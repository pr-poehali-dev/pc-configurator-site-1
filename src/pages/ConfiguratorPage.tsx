import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface Component {
  id: string;
  name: string;
  brand: string;
  price: number;
  specs: string;
  tier: 'budget' | 'mid' | 'high';
}

interface Build {
  id: string;
  name: string;
  components: Record<string, Component | null>;
}

const componentCategories = [
  { id: 'cpu', label: 'Процессор', icon: 'Cpu' },
  { id: 'gpu', label: 'Видеокарта', icon: 'Monitor' },
  { id: 'ram', label: 'Оперативная память', icon: 'MemoryStick' },
  { id: 'storage', label: 'Накопитель', icon: 'HardDrive' },
  { id: 'motherboard', label: 'Материнская плата', icon: 'CircuitBoard' },
  { id: 'psu', label: 'Блок питания', icon: 'Zap' },
  { id: 'case', label: 'Корпус', icon: 'Box' },
  { id: 'cooler', label: 'Охлаждение', icon: 'Wind' },
];

const catalog: Record<string, Component[]> = {
  cpu: [
    { id: 'cpu1', name: 'Core i5-14600K', brand: 'Intel', price: 24900, specs: '14 ядер, 3.5 / 5.3 ГГц', tier: 'mid' },
    { id: 'cpu2', name: 'Core i9-14900K', brand: 'Intel', price: 54900, specs: '24 ядра, 3.2 / 6.0 ГГц', tier: 'high' },
    { id: 'cpu3', name: 'Ryzen 5 7600X', brand: 'AMD', price: 22900, specs: '6 ядер, 4.7 / 5.3 ГГц', tier: 'mid' },
    { id: 'cpu4', name: 'Ryzen 9 7950X', brand: 'AMD', price: 64900, specs: '16 ядер, 4.5 / 5.7 ГГц', tier: 'high' },
    { id: 'cpu5', name: 'Ryzen 5 5600G', brand: 'AMD', price: 12900, specs: '6 ядер, 3.9 / 4.4 ГГц', tier: 'budget' },
  ],
  gpu: [
    { id: 'gpu1', name: 'RTX 4060', brand: 'NVIDIA', price: 34900, specs: '8 ГБ GDDR6, 2460 МГц', tier: 'mid' },
    { id: 'gpu2', name: 'RTX 4090', brand: 'NVIDIA', price: 149900, specs: '24 ГБ GDDR6X, 2520 МГц', tier: 'high' },
    { id: 'gpu3', name: 'RX 7600', brand: 'AMD', price: 28900, specs: '8 ГБ GDDR6, 2655 МГц', tier: 'mid' },
    { id: 'gpu4', name: 'RX 7900 XTX', brand: 'AMD', price: 84900, specs: '24 ГБ GDDR6, 2500 МГц', tier: 'high' },
    { id: 'gpu5', name: 'GTX 1660 Super', brand: 'NVIDIA', price: 18900, specs: '6 ГБ GDDR6, 1785 МГц', tier: 'budget' },
  ],
  ram: [
    { id: 'ram1', name: 'Fury Beast 16GB', brand: 'Kingston', price: 4900, specs: 'DDR5, 5600 МГц, 2x8 ГБ', tier: 'mid' },
    { id: 'ram2', name: 'Trident Z5 32GB', brand: 'G.Skill', price: 12900, specs: 'DDR5, 6000 МГц, 2x16 ГБ', tier: 'high' },
    { id: 'ram3', name: 'Vengeance 16GB', brand: 'Corsair', price: 3900, specs: 'DDR4, 3200 МГц, 2x8 ГБ', tier: 'budget' },
  ],
  storage: [
    { id: 'st1', name: '980 Pro 1TB', brand: 'Samsung', price: 7900, specs: 'NVMe M.2, 7000/5000 МБ/с', tier: 'mid' },
    { id: 'st2', name: '990 Pro 2TB', brand: 'Samsung', price: 14900, specs: 'NVMe M.2, 7450/6900 МБ/с', tier: 'high' },
    { id: 'st3', name: 'SN570 1TB', brand: 'WD', price: 5900, specs: 'NVMe M.2, 3500/3000 МБ/с', tier: 'budget' },
  ],
  motherboard: [
    { id: 'mb1', name: 'ROG Strix B650-A', brand: 'ASUS', price: 21900, specs: 'AM5, DDR5, ATX', tier: 'mid' },
    { id: 'mb2', name: 'MEG X670E ACE', brand: 'MSI', price: 44900, specs: 'AM5, DDR5, ATX', tier: 'high' },
    { id: 'mb3', name: 'B550M DS3H', brand: 'Gigabyte', price: 8900, specs: 'AM4, DDR4, mATX', tier: 'budget' },
  ],
  psu: [
    { id: 'psu1', name: 'RM750x', brand: 'Corsair', price: 9900, specs: '750 Вт, 80+ Gold, Modular', tier: 'mid' },
    { id: 'psu2', name: 'HX1000', brand: 'Corsair', price: 18900, specs: '1000 Вт, 80+ Platinum', tier: 'high' },
    { id: 'psu3', name: 'CV550', brand: 'Corsair', price: 4900, specs: '550 Вт, 80+ Bronze', tier: 'budget' },
  ],
  case: [
    { id: 'case1', name: 'H510', brand: 'NZXT', price: 7900, specs: 'Mid-Tower, ATX, Tempered Glass', tier: 'mid' },
    { id: 'case2', name: 'O11D XL', brand: 'Lian Li', price: 19900, specs: 'Full-Tower, E-ATX, 3x360 мм', tier: 'high' },
    { id: 'case3', name: 'MasterBox Q300L', brand: 'Cooler Master', price: 3900, specs: 'Micro-ATX, mATX, Compact', tier: 'budget' },
  ],
  cooler: [
    { id: 'cool1', name: 'Hyper 212 Black', brand: 'Cooler Master', price: 3500, specs: 'Air, 120 мм, 150 Вт TDP', tier: 'budget' },
    { id: 'cool2', name: 'Kraken X63', brand: 'NZXT', price: 12900, specs: 'AIO 280 мм, 2x140 мм', tier: 'mid' },
    { id: 'cool3', name: 'Kraken Elite 360', brand: 'NZXT', price: 24900, specs: 'AIO 360 мм, 3x120 мм LCD', tier: 'high' },
  ],
};

const emptyBuild = (): Build => ({
  id: Math.random().toString(36).slice(2),
  name: 'Сборка',
  components: Object.fromEntries(componentCategories.map(c => [c.id, null])),
});

const tierColors: Record<string, string> = {
  budget: 'bg-blue-50 text-blue-700 border-blue-200',
  mid: 'bg-amber-50 text-amber-700 border-amber-200',
  high: 'bg-red-50 text-red-700 border-red-200',
};

const tierLabels: Record<string, string> = {
  budget: 'Бюджет',
  mid: 'Средний',
  high: 'Топ',
};

export default function ConfiguratorPage() {
  const [builds, setBuilds] = useState<Build[]>([{ ...emptyBuild(), name: 'Сборка 1' }]);
  const [activeBuildIdx, setActiveBuildIdx] = useState(0);
  const [activeCategory, setActiveCategory] = useState('cpu');
  const [compareMode, setCompareMode] = useState(false);
  const [editingName, setEditingName] = useState<string | null>(null);

  const activeBuild = builds[activeBuildIdx];

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

  const getBuildTotal = (build: Build) =>
    Object.values(build.components).reduce((sum, c) => sum + (c?.price ?? 0), 0);

  const formatPrice = (price: number) =>
    price.toLocaleString('ru-RU') + ' ₽';

  const getFilledCount = (build: Build) =>
    Object.values(build.components).filter(Boolean).length;

  const currentComponents = catalog[activeCategory] || [];

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
        /* ---- COMPARE MODE ---- */
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="font-mono-custom text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
            Сравнение {builds.length} сборок
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 pr-6 text-sm font-medium text-muted-foreground w-40">Компонент</th>
                  {builds.map((b, i) => (
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
                            <div>
                              <div className="font-medium text-sm">{comp.name}</div>
                              <div className="text-xs text-muted-foreground">{comp.brand}</div>
                              <div className="font-mono-custom text-sm font-medium mt-1">{formatPrice(comp.price)}</div>
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
                onClick={() => { setActiveBuildIdx(i); setCompareMode(false); }}
                className="flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-medium hover:border-foreground transition-colors"
              >
                <Icon name="Edit3" size={13} />
                Редактировать «{b.name}»
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* ---- CONFIGURATOR MODE ---- */
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Tabs */}
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
                    onBlur={e => renameBuild(b.id, e.target.value || b.name)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') renameBuild(b.id, e.currentTarget.value || b.name);
                      if (e.key === 'Escape') setEditingName(null);
                    }}
                    onClick={e => e.stopPropagation()}
                  />
                ) : (
                  <button
                    className="px-4 py-2 text-sm font-medium"
                    onClick={() => setActiveBuildIdx(i)}
                    onDoubleClick={() => setEditingName(b.id)}
                  >
                    {b.name}
                  </button>
                )}
                {i === activeBuildIdx && (
                  <div className="flex items-center pr-2 gap-1">
                    <button
                      className="p-1 opacity-60 hover:opacity-100"
                      onClick={() => setEditingName(b.id)}
                    >
                      <Icon name="Pencil" size={11} />
                    </button>
                    {builds.length > 1 && (
                      <button
                        className="p-1 opacity-60 hover:opacity-100"
                        onClick={() => removeBuild(i)}
                      >
                        <Icon name="X" size={11} />
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Left — category list */}
            <div className="space-y-1">
              {componentCategories.map((cat) => {
                const selected = activeBuild.components[cat.id];
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
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
                      onClick={() => clearComponent(activeCategory)}
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
                  return (
                    <div
                      key={comp.id}
                      onClick={() => selectComponent(comp)}
                      className={`component-card p-5 cursor-pointer flex items-center justify-between gap-4 ${isSelected ? 'selected' : 'bg-background'}`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-bold text-sm">{comp.name}</span>
                          <span className={`font-mono-custom text-xs px-1.5 py-0.5 border rounded-none ${tierColors[comp.tier]}`}>
                            {tierLabels[comp.tier]}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground">{comp.brand} · {comp.specs}</div>
                      </div>
                      <div className="flex items-center gap-4 flex-shrink-0">
                        <div className="font-mono-custom font-bold text-base">{formatPrice(comp.price)}</div>
                        <div className={`w-5 h-5 border flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? 'bg-accent-orange border-accent-orange' : 'border-border'}`}>
                          {isSelected && <Icon name="Check" size={11} className="text-white" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
