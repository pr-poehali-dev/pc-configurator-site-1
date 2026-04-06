import Icon from '@/components/ui/icon';

type Section = 'home' | 'configurator' | 'about' | 'contacts';

interface HomePageProps {
  onNavigate: (section: Section) => void;
}

const features = [
  {
    icon: 'Cpu',
    title: 'Подбор компонентов',
    desc: 'Выбирайте из проверенных комплектующих с гарантией совместимости',
  },
  {
    icon: 'BarChart2',
    title: 'Сравнение сборок',
    desc: 'Сравнивайте несколько конфигураций одновременно по всем параметрам',
  },
  {
    icon: 'ShieldCheck',
    title: 'Проверка совместимости',
    desc: 'Система автоматически предупредит о несовместимых компонентах',
  },
];

const presets = [
  {
    label: 'Офисный',
    price: 'от 35 000 ₽',
    desc: 'Для работы с документами и видеозвонков',
    tag: 'Популярный',
  },
  {
    label: 'Игровой',
    price: 'от 90 000 ₽',
    desc: 'Для современных игр в Full HD / 2K',
    tag: 'Топ продаж',
  },
  {
    label: 'Рабочая станция',
    price: 'от 180 000 ₽',
    desc: '3D, видеомонтаж, рендеринг и разработка',
    tag: null,
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-36">
        <div className="max-w-3xl">
          <div className="font-mono-custom text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6 animate-fade-in animate-stagger-1">
            Конфигуратор ПК — 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.0] tracking-tight mb-8 animate-fade-in animate-stagger-2">
            Собери<br />
            идеальный<br />
            <span className="text-accent-orange">компьютер</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-10 animate-fade-in animate-stagger-3">
            Подбирай компоненты, сравнивай сборки и получай готовую конфигурацию за несколько минут.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in animate-stagger-4">
            <button
              onClick={() => onNavigate('configurator')}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium hover:bg-accent-orange transition-colors"
            >
              Открыть конфигуратор
              <Icon name="ArrowRight" size={16} />
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium hover:border-foreground transition-colors"
            >
              О нас
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-px bg-border border border-border animate-fade-in animate-stagger-5">
          {[
            { num: '500+', label: 'Компонентов' },
            { num: '12 000+', label: 'Сборок создано' },
            { num: '4.9', label: 'Средний рейтинг' },
          ].map((stat) => (
            <div key={stat.label} className="bg-background px-6 py-8">
              <div className="text-3xl font-black mb-1">{stat.num}</div>
              <div className="text-sm text-muted-foreground font-mono-custom">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="font-mono-custom text-xs tracking-[0.2em] text-muted-foreground uppercase mb-12">
            Возможности
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="group">
                <div className="w-10 h-10 border border-border flex items-center justify-center mb-6 group-hover:border-accent-orange group-hover:text-accent-orange transition-colors">
                  <Icon name={f.icon} fallback="Cpu" size={18} />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presets */}
      <section className="border-t border-border bg-secondary">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="font-mono-custom text-xs tracking-[0.2em] text-muted-foreground uppercase mb-12">
            Готовые сборки
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {presets.map((preset) => (
              <div
                key={preset.label}
                className="component-card bg-background p-8 cursor-pointer group"
                onClick={() => onNavigate('configurator')}
              >
                {preset.tag && (
                  <div className="inline-block font-mono-custom text-xs tracking-widest uppercase px-2 py-0.5 bg-accent-orange text-white mb-4">
                    {preset.tag}
                  </div>
                )}
                <h3 className="text-2xl font-black mb-2">{preset.label}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{preset.desc}</p>
                <div className="font-mono-custom font-medium text-lg">{preset.price}</div>
                <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground group-hover:text-accent-orange transition-colors font-mono-custom">
                  Настроить <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black mb-2">Готов собрать свой ПК?</h2>
            <p className="text-sm opacity-60">Займёт не больше 5 минут</p>
          </div>
          <button
            onClick={() => onNavigate('configurator')}
            className="flex-shrink-0 flex items-center gap-2 px-8 py-4 bg-background text-foreground font-medium hover:bg-accent-orange hover:text-white transition-colors"
          >
            Начать сборку
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}