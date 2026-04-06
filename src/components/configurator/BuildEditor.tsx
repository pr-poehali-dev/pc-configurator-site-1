import { useState } from 'react';
import Icon from '@/components/ui/icon';
import {
  Build, Component, componentCategories, catalog,
  tierColors, tierLabels, getBuildTotal, getFilledCount, formatPrice,
} from './types';
import ComponentImage from './ComponentImage';

interface BuildEditorProps {
  builds: Build[];
  activeBuildIdx: number;
  activeCategory: string;
  editingName: string | null;
  onSelectBuild: (idx: number) => void;
  onRemoveBuild: (idx: number) => void;
  onStartRename: (id: string) => void;
  onRename: (id: string, name: string) => void;
  onCancelRename: () => void;
  onSelectCategory: (categoryId: string) => void;
  onSelectComponent: (component: Component) => void;
  onClearComponent: (categoryId: string) => void;
}

export default function BuildEditor({
  builds,
  activeBuildIdx,
  activeCategory,
  editingName,
  onSelectBuild,
  onRemoveBuild,
  onStartRename,
  onRename,
  onCancelRename,
  onSelectCategory,
  onSelectComponent,
  onClearComponent,
}: BuildEditorProps) {
  const activeBuild = builds[activeBuildIdx];
  const currentComponents = catalog[activeCategory] || [];
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Build tabs */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {builds.map((b, i) => (
          <div
            key={b.id}
            className={`group flex items-center border transition-colors cursor-pointer ${i === activeBuildIdx ? 'border-foreground bg-foreground text-background' : 'border-border hover:border-foreground'}`}
          >
            {editingName === b.id ? (
              <input
                autoFocus
                className="px-3 py-2 text-sm font-medium bg-transparent outline-none min-w-20 max-w-32 text-background"
                defaultValue={b.name}
                onBlur={e => onRename(b.id, e.target.value || b.name)}
                onKeyDown={e => {
                  if (e.key === 'Enter') onRename(b.id, e.currentTarget.value || b.name);
                  if (e.key === 'Escape') onCancelRename();
                }}
                onClick={e => e.stopPropagation()}
              />
            ) : (
              <button
                className="px-4 py-2 text-sm font-medium"
                onClick={() => onSelectBuild(i)}
                onDoubleClick={() => onStartRename(b.id)}
              >
                {b.name}
              </button>
            )}
            {i === activeBuildIdx && (
              <div className="flex items-center pr-2 gap-1">
                <button className="p-1 opacity-60 hover:opacity-100" onClick={() => onStartRename(b.id)}>
                  <Icon name="Pencil" size={11} />
                </button>
                {builds.length > 1 && (
                  <button className="p-1 opacity-60 hover:opacity-100" onClick={() => onRemoveBuild(i)}>
                    <Icon name="X" size={11} />
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        {/* Left — category list + summary */}
        <div className="space-y-1">
          {componentCategories.map((cat) => {
            const selected = activeBuild.components[cat.id];
            return (
              <button
                key={cat.id}
                onClick={() => { onSelectCategory(cat.id); setExpandedId(null); }}
                className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm transition-all border ${activeCategory === cat.id ? 'border-foreground bg-foreground text-background' : 'border-transparent hover:border-border'}`}
              >
                <div className="flex items-center gap-3">
                  <Icon name={cat.icon} fallback="Cpu" size={15} />
                  <span className="font-medium">{cat.label}</span>
                </div>
                {selected ? (
                  <div className="text-right">
                    <div className="font-mono-custom text-xs truncate max-w-24 opacity-70">{selected.name}</div>
                  </div>
                ) : (
                  <span className={`text-xs font-mono-custom ${activeCategory === cat.id ? 'opacity-50' : 'text-muted-foreground'}`}>—</span>
                )}
              </button>
            );
          })}

          {/* Summary */}
          <div className="border border-border p-4 mt-4">
            <div className="font-mono-custom text-xs tracking-widest uppercase text-muted-foreground mb-3">Итого</div>
            <div className="text-2xl font-black mb-1">{formatPrice(getBuildTotal(activeBuild))}</div>
            <div className="text-xs text-muted-foreground mb-4">
              {getFilledCount(activeBuild)} из {componentCategories.length} компонентов
            </div>
            <div className="h-1 bg-secondary overflow-hidden">
              <div
                className="h-full bg-accent-orange transition-all duration-300"
                style={{ width: `${(getFilledCount(activeBuild) / componentCategories.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right — component list */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold">{componentCategories.find(c => c.id === activeCategory)?.label}</h2>
              {activeBuild.components[activeCategory] && (
                <button
                  onClick={() => onClearComponent(activeCategory)}
                  className="text-xs text-muted-foreground hover:text-destructive mt-0.5 flex items-center gap-1 font-mono-custom"
                >
                  <Icon name="X" size={10} /> Сбросить выбор
                </button>
              )}
            </div>
            <div className="font-mono-custom text-xs text-muted-foreground">
              {currentComponents.length} вариантов
            </div>
          </div>

          <div className="space-y-2">
            {currentComponents.map((comp) => {
              const isSelected = activeBuild.components[activeCategory]?.id === comp.id;
              const isExpanded = expandedId === comp.id;

              return (
                <div
                  key={comp.id}
                  onClick={() => onSelectComponent(comp)}
                  className={`component-card cursor-pointer ${isSelected ? 'selected' : 'bg-background'}`}
                >
                  {/* Main row */}
                  <div className="p-4 flex items-center gap-4">
                    <ComponentImage src={comp.image} alt={comp.name} categoryId={activeCategory} />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-bold text-sm">{comp.name}</span>
                        <span className={`font-mono-custom text-xs px-1.5 py-0.5 border ${tierColors[comp.tier]}`}>
                          {tierLabels[comp.tier]}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-1">{comp.brand} · {comp.specs}</div>
                      <div className="text-xs text-accent-orange font-medium">
                        {comp.forWhom}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="text-right">
                        <div className="font-mono-custom font-bold text-base">{formatPrice(comp.price)}</div>
                        <a
                          href={comp.buyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-accent-orange hover:underline font-mono-custom flex items-center gap-0.5 justify-end mt-0.5"
                          onClick={e => e.stopPropagation()}
                        >
                          Купить в DNS <Icon name="ExternalLink" size={10} />
                        </a>
                      </div>
                      <button
                        className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={e => toggleExpand(comp.id, e)}
                        title="Подробные характеристики"
                      >
                        <Icon name={isExpanded ? 'ChevronUp' : 'ChevronDown'} size={15} />
                      </button>
                      <div className={`w-5 h-5 border flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? 'bg-accent-orange border-accent-orange' : 'border-border'}`}>
                        {isSelected && <Icon name="Check" size={11} className="text-white" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded details */}
                  {isExpanded && (
                    <div
                      className="border-t border-border px-4 py-3 bg-secondary/50"
                      onClick={e => e.stopPropagation()}
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
                        {comp.details.map(d => (
                          <div key={d.label}>
                            <div className="font-mono-custom text-xs text-muted-foreground uppercase tracking-wider">{d.label}</div>
                            <div className="text-sm font-medium mt-0.5">{d.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
