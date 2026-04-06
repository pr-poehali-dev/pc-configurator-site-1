export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="font-mono-custom text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
            О проекте
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h1 className="text-5xl font-black leading-tight">
              Мы только<br />начинаем
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              BUILDLAB — это новый проект для тех, кто хочет собрать компьютер без лишней
              головной боли. Никаких запутанных форумов — просто выбирай компоненты,
              сравнивай сборки и получай готовый результат.
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="font-mono-custom text-xs tracking-[0.2em] text-muted-foreground uppercase mb-10">
            Миссия
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Просто',
                desc: 'Подбор комплектующих без технических знаний. Интуитивный интерфейс для любого пользователя.',
              },
              {
                title: 'Честно',
                desc: 'Реальные цены, актуальные данные и прямые ссылки на проверенные магазины.',
              },
              {
                title: 'Свободно',
                desc: 'Никакой регистрации и скрытых условий. Конфигуратор работает сразу — без ограничений.',
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-accent-orange pt-6">
                <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="font-mono-custom text-xs tracking-[0.2em] text-muted-foreground uppercase mb-10">
            Основатель
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="border border-border p-8 group hover:border-foreground transition-colors max-w-sm">
              <div className="w-14 h-14 bg-secondary flex items-center justify-center font-black text-xl mb-6 group-hover:bg-accent-orange group-hover:text-white transition-colors">
                Д
              </div>
              <h3 className="font-bold text-xl mb-1">Дмитрий Лазарев</h3>
              <p className="text-sm text-muted-foreground">Основатель BUILDLAB</p>
            </div>
            <div className="pt-2">
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Идея BUILDLAB появилась из личного опыта — каждый раз при сборке ПК приходилось
                часами изучать форумы, сравнивать характеристики и проверять совместимость.
                Я решил сделать инструмент, который упростит этот процесс для всех.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Сейчас проект только запускается. Я открыт к любым вопросам и предложениям —
                пишите в раздел «Контакты».
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What's next */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="font-mono-custom text-xs tracking-[0.2em] text-muted-foreground uppercase mb-10">
          Что планируем
        </div>
        <div className="space-y-0">
          {[
            { label: 'Расширение каталога', desc: 'Больше компонентов и актуальные цены из нескольких магазинов' },
            { label: 'Проверка совместимости', desc: 'Автоматическое предупреждение о несовместимых комплектующих' },
            { label: 'Готовые сборки по задачам', desc: 'Подборки для игр, работы, видеомонтажа и разработки' },
            { label: 'Сохранение конфигураций', desc: 'Возможность сохранить и поделиться своей сборкой по ссылке' },
          ].map((item) => (
            <div key={item.label} className="flex gap-8 items-start border-t border-border py-6 last:border-b">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-orange mt-2.5 flex-shrink-0" />
              <div>
                <div className="font-bold text-base mb-1">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
