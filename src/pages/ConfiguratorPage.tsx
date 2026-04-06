import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Build, Component, emptyBuild } from '@/components/configurator/types';
import CompareView from '@/components/configurator/CompareView';
import BuildEditor from '@/components/configurator/BuildEditor';

export default function ConfiguratorPage() {
  const [builds, setBuilds] = useState<Build[]>([{ ...emptyBuild(), name: 'Сборка 1' }]);
  const [activeBuildIdx, setActiveBuildIdx] = useState(0);
  const [activeCategory, setActiveCategory] = useState('cpu');
  const [compareMode, setCompareMode] = useState(false);
  const [editingName, setEditingName] = useState<string | null>(null);

  const selectComponent = (component: Component) => {
    setBuilds(prev => prev.map((b, i) =>
      i === activeBuildIdx
        ? { ...b, components: { ...b.components, [activeCategory]: component } }
        : b
    ));
  };

  const clearComponent = (categoryId: string) => {
    setBuilds(prev => prev.map((b, i) =>
      i === activeBuildIdx
        ? { ...b, components: { ...b.components, [categoryId]: null } }
        : b
    ));
  };

  const addBuild = () => {
    const num = builds.length + 1;
    setBuilds(prev => [...prev, { ...emptyBuild(), name: `Сборка ${num}` }]);
    setActiveBuildIdx(builds.length);
  };

  const removeBuild = (idx: number) => {
    if (builds.length === 1) return;
    setBuilds(prev => prev.filter((_, i) => i !== idx));
    setActiveBuildIdx(Math.max(0, activeBuildIdx - 1));
  };

  const renameBuild = (id: string, name: string) => {
    setBuilds(prev => prev.map(b => b.id === id ? { ...b, name } : b));
    setEditingName(null);
  };

  const handleEditBuild = (idx: number) => {
    setActiveBuildIdx(idx);
    setCompareMode(false);
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-background">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="font-mono-custom text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
            Конфигуратор
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-3xl font-black">Сборка ПК</h1>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCompareMode(!compareMode)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border transition-colors ${compareMode ? 'bg-foreground text-background border-foreground' : 'border-border hover:border-foreground'}`}
              >
                <Icon name="BarChart2" size={14} />
                {compareMode ? 'Выйти из сравнения' : 'Сравнить сборки'}
              </button>
              <button
                onClick={addBuild}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent-orange text-white hover:bg-orange-600 transition-colors"
              >
                <Icon name="Plus" size={14} />
                Добавить сборку
              </button>
            </div>
          </div>
        </div>
      </div>

      {compareMode ? (
        <CompareView
          builds={builds}
          onEditBuild={handleEditBuild}
        />
      ) : (
        <BuildEditor
          builds={builds}
          activeBuildIdx={activeBuildIdx}
          activeCategory={activeCategory}
          editingName={editingName}
          onSelectBuild={setActiveBuildIdx}
          onRemoveBuild={removeBuild}
          onStartRename={setEditingName}
          onRename={renameBuild}
          onCancelRename={() => setEditingName(null)}
          onSelectCategory={setActiveCategory}
          onSelectComponent={selectComponent}
          onClearComponent={clearComponent}
        />
      )}
    </div>
  );
}
