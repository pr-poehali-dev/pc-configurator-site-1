import Icon from '@/components/ui/icon';
import { Build, componentCategories, getBuildTotal, getFilledCount, formatPrice } from './types';
import ComponentImage from './ComponentImage';

interface CompareViewProps {
  builds: Build[];
  onEditBuild: (idx: number) => void;
}

export default function CompareView({ builds, onEditBuild }: CompareViewProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="font-mono-custom text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
        Сравнение {builds.length} сборок
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 pr-6 text-sm font-medium text-muted-foreground w-40">Компонент</th>
              {builds.map((b) => (
                <th key={b.id} className="text-left py-4 px-4 min-w-52">
                  <div className="font-bold text-base">{b.name}</div>
                  <div className="font-mono-custom text-sm text-accent-orange font-medium mt-0.5">
                    {formatPrice(getBuildTotal(b))}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {getFilledCount(b)} / {componentCategories.length} комплектующих
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {componentCategories.map((cat) => {
              const values = builds.map(b => b.components[cat.id]);
              const prices = values.map(v => v?.price ?? 0);
              const maxPrice = Math.max(...prices);

              return (
                <tr key={cat.id} className="border-b border-border last:border-0">
                  <td className="py-4 pr-6">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Icon name={cat.icon} fallback="Cpu" size={14} />
                      {cat.label}
                    </div>
                  </td>
                  {values.map((comp, bi) => (
                    <td
                      key={builds[bi].id}
                      className={`py-4 px-4 ${comp?.price === maxPrice && maxPrice > 0 ? 'comparison-highlight' : ''}`}
                    >
                      {comp ? (
                        <div className="flex items-center gap-3">
                          <ComponentImage src={comp.image} alt={comp.name} categoryId={cat.id} />
                          <div>
                            <div className="font-medium text-sm">{comp.name}</div>
                            <div className="text-xs text-muted-foreground">{comp.brand}</div>
                            <div className="font-mono-custom text-sm font-medium mt-1">{formatPrice(comp.price)}</div>
                            <a
                              href={comp.buyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-accent-orange hover:underline font-mono-custom flex items-center gap-0.5 mt-0.5"
                              onClick={e => e.stopPropagation()}
                            >
                              DNS <Icon name="ExternalLink" size={10} />
                            </a>
                          </div>
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-sm">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
            <tr className="bg-secondary">
              <td className="py-4 pr-6 font-bold text-sm">Итого</td>
              {builds.map(b => (
                <td key={b.id} className="py-4 px-4">
                  <div className="font-mono-custom font-bold text-lg">
                    {formatPrice(getBuildTotal(b))}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex gap-3 flex-wrap">
        {builds.map((b, i) => (
          <button
            key={b.id}
            onClick={() => onEditBuild(i)}
            className="flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-medium hover:border-foreground transition-colors"
          >
            <Icon name="Edit3" size={13} />
            Редактировать «{b.name}»
          </button>
        ))}
      </div>
    </div>
  );
}
