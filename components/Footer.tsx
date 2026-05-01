const ForgeLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L4 10V22L16 30L28 22V10L16 2Z" fill="rgba(255,69,0,0.15)" stroke="#FF4500" strokeWidth="1.5" />
    <path d="M20 9H13L10 16H15L12 23L22 14H17L20 9Z" fill="#FF4500" />
  </svg>
);

const links = {
  Product: ["Features", "How It Works", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "API Reference", "Integrations", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "GDPR"],
};

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <ForgeLogo />
            <span className="font-syne font-extrabold text-xl tracking-widest text-white">FORGE</span>
          </div>
          <p className="font-sans text-sm text-white/40 leading-relaxed max-w-xs mb-6">
            AI-powered sales performance platform. Built for teams that close.
          </p>
          <div className="flex gap-3">
            {/* Social icons */}
            {[
              { label: "Twitter/X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.737-8.835L2.252 2.25h7.044l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" },
              { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg bg-surface border border-white/5 flex items-center justify-center hover:border-accent/30 hover:bg-accent/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.4)" className="hover:fill-white">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(links).map(([section, items]) => (
          <div key={section}>
            <h4 className="font-syne font-bold text-sm text-white mb-4 tracking-wide">{section}</h4>
            <ul className="space-y-2.5">
              {items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-sans text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-xs text-white/20 tracking-wide">
            © 2025 FORGE AI, Inc. All rights reserved.
          </span>
          <span className="font-mono text-xs text-white/20 tracking-wide">
            salesaidemo.com
          </span>
        </div>
      </div>
    </footer>
  );
}
