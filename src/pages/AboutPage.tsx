const team = [
  { name: 'Алексей Романов', role: 'Основатель / Hardware-инженер', years: 12 },
  { name: 'Мария Соколова', role: 'UX-дизайнер', years: 7 },
  { name: 'Дмитрий Козлов', role: 'Технический консультант', years: 9 },
];

const timeline = [
  { year: '2018', event: 'Основание компании в Москве' },
  { year: '2020', event: 'Запуск онлайн-конфигуратора' },
  { year: '2022', event: '5 000 собранных ПК' },
  { year: '2024', event: 'Открытие второго офиса в Санкт-Петербурге' },
  { year: '2026', event: 'Новая платформа с AI-подбором компонентов' },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="font-mono-custom text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
            О компании
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h1 className="text-5xl font-black leading-tight">
              Собираем ПК<br />с 2018 года
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              BUILDLAB — это команда инженеров и энтузиастов, которые помогают находить
              оптимальные конфигурации для любых задач и бюджетов. Мы верим, что каждый
              заслуживает идеально подобранный компьютер.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { num: '8 лет', label: 'Опыта' },
              { num: '12 000+', label: 'Сборок' },
              { num: '500+', label: 'Компонентов' },
              { num: '98%', label: 'Довольных клиентов' },
            ].map(s => (
              <div key={s.label} className="py-10 px-6 first:pl-0">
                <div className="text-3xl font-black mb-1">{s.num}</div>
                <div className="text-sm text-muted-foreground font-mono-custom">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="font-mono-custom text-xs tracking-[0.2em] text-muted-foreground uppercase mb-10">
            История
          </div>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-8 items-start border-t border-border py-6 last:border-b">
                <div className="font-mono-custom font-medium text-sm text-muted-foreground w-12 flex-shrink-0 pt-0.5">
                  {item.year}
                </div>
                <div className="font-medium text-base">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="font-mono-custom text-xs tracking-[0.2em] text-muted-foreground uppercase mb-10">
          Команда
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {team.map((member) => (
            <div key={member.name} className="border border-border p-8 group hover:border-foreground transition-colors">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center font-black text-lg mb-6 group-hover:bg-accent-orange group-hover:text-white transition-colors">
                {member.name[0]}
              </div>
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
              <div className="font-mono-custom text-xs text-muted-foreground">
                {member.years} лет опыта
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
