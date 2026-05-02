export default function Home() {
  const faqs = [
    {
      q: 'What does the scanner detect?',
      a: 'It crawls your website using a real browser, detects all cookies set before and after consent, checks for missing or non-compliant consent banners, and flags third-party trackers that violate GDPR.'
    },
    {
      q: 'How often are scans run?',
      a: 'You can run on-demand scans anytime or schedule automated weekly scans. Every scan result is stored so you can track compliance changes over time.'
    },
    {
      q: 'Do I need technical knowledge to use it?',
      a: 'No. Just enter your website URL and get a plain-language compliance report with actionable fixes. No coding required.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan websites for{' '}
          <span className="text-[#58a6ff]">GDPR cookie violations</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically crawl any website to detect non-compliant cookies, missing consent banners, and hidden trackers. Generate audit-ready compliance reports in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $17/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for first scan. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🔍', title: 'Deep Cookie Audit', desc: 'Detects all cookies set before and after consent, including hidden third-party trackers.' },
            { icon: '📋', title: 'Compliance Reports', desc: 'Export audit-ready PDF reports with violation details and recommended fixes.' },
            { icon: '📅', title: 'Scheduled Scans', desc: 'Automate weekly scans and get alerted when new violations appear on your site.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, transparent pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$17</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited website scans',
              'Full cookie & tracker detection',
              'Consent banner compliance check',
              'Scheduled automated scans',
              'Exportable PDF compliance reports',
              'Violation history & trend tracking',
              'Email alerts for new violations'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Secure checkout via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] py-8 border-t border-[#21262d]">
        © {new Date().getFullYear()} GDPR Cookie Compliance Scanner. Built for web agencies &amp; compliance consultants.
      </footer>
    </main>
  )
}
