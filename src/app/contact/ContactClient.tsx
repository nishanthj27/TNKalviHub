'use client';
import { useState } from 'react';
import { Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactClient() {
  const { t, isTamil } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xzdkndre", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="page-container py-10">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-7 h-7 text-brand-primary" />
          </div>
          <h1 className="section-title">{t('contactTitle')}</h1>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            {isTamil
              ? 'ஏதேனும் கேள்வி, உடைந்த இணைப்பு அல்லது பரிந்துரை இருந்தால் எங்களை தொடர்பு கொள்ளுங்கள்.'
              : 'Have a question, broken link, or suggestion? We would love to hear from you.'}
          </p>
        </div>

        {submitted ? (
          <div className="card p-10 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              {isTamil ? 'நன்றி!' : 'Thank You!'}
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              {isTamil
                ? 'உங்கள் செய்தி கிடைத்தது. விரைவில் நாங்கள் உங்களை தொடர்பு கொள்கிறோம்.'
                : 'Your message has been received. We will get back to you soon.'}
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
              className="mt-6 btn-primary inline-flex"
            >
              {isTamil ? 'மீண்டும் அனுப்பு' : 'Send Another'}
            </button>
          </div>
        ) : (
          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-primary)' }}>
                  {t('name')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={isTamil ? 'உங்கள் பெயரை உள்ளிடுங்கள்' : 'Enter your name'}
                  className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-primary)' }}>
                  {t('email')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={isTamil ? 'உங்கள் மின்னஞ்சலை உள்ளிடுங்கள்' : 'Enter your email'}
                  className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-primary)' }}>
                  {t('message')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={isTamil ? 'உங்கள் செய்தியை இங்கே உள்ளிடுங்கள்...' : 'Type your message here...'}
                  className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center py-3">
                <MessageSquare className="w-4 h-4" />
                {t('sendMessage')}
              </button>
            </form>

            <p className="text-xs mt-4 text-center" style={{ color: 'var(--text-secondary)' }}>
              {isTamil
                ? 'உங்கள் தகவல்கள் பாதுகாப்பாக வைக்கப்படும்.'
                : 'Your information is kept private and secure.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}