import { useState } from 'react';
import Icon from '@/components/ui/icon';

const contacts = [
  { icon: 'MapPin', label: 'Адрес', value: 'г. Архангельск' },
  { icon: 'Phone', label: 'Телефон', value: '+7 (921) 490-01-25' },
  { icon: 'Mail', label: 'Email', value: 'dmitrylazarev2010@icloud.com' },
  { icon: 'Clock', label: 'Режим работы', value: 'Пн–Пт: 9:00–19:00' },
];

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-16">
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="font-mono-custom text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
            Контакты
          </div>
          <h1 className="text-5xl font-black">Свяжитесь с нами</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — contacts */}
          <div>
            <div className="space-y-0">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-start gap-5 py-6 border-t border-border last:border-b">
                  <div className="w-9 h-9 border border-border flex items-center justify-center flex-shrink-0 text-muted-foreground mt-0.5">
                    <Icon name={c.icon} fallback="Info" size={15} />
                  </div>
                  <div>
                    <div className="font-mono-custom text-xs text-muted-foreground uppercase tracking-widest mb-1">
                      {c.label}
                    </div>
                    <div className="font-medium text-base">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>


          </div>

          {/* Right — form */}
          <div>
            <div className="font-mono-custom text-xs tracking-[0.2em] text-muted-foreground uppercase mb-8">
              Написать нам
            </div>

            {sent ? (
              <div className="border border-border p-10 text-center">
                <div className="w-12 h-12 bg-accent-orange text-white flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={22} />
                </div>
                <h3 className="font-bold text-xl mb-2">Сообщение отправлено</h3>
                <p className="text-muted-foreground text-sm">Мы свяжемся с вами в ближайшее время</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                  className="mt-6 font-mono-custom text-xs text-muted-foreground hover:text-foreground transition-colors underline"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-mono-custom text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full border border-border px-4 py-3 text-sm bg-background focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="font-mono-custom text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full border border-border px-4 py-3 text-sm bg-background focus:outline-none focus:border-foreground transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="font-mono-custom text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                    Сообщение
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full border border-border px-4 py-3 text-sm bg-background focus:outline-none focus:border-foreground transition-colors resize-none"
                    placeholder="Расскажите о вашем проекте или вопросе..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-foreground text-background font-medium text-sm hover:bg-accent-orange transition-colors flex items-center justify-center gap-2"
                >
                  Отправить сообщение
                  <Icon name="ArrowRight" size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}