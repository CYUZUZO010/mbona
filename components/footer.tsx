export default function SiteFooter() {
  return (
    <footer className="bg-gray-50 text-zinc-900 border-t border-zinc-200 max-h-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2 md:grid-cols-4">
          
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">Mbona</h3>
            <p className="text-zinc-600 text-xs sm:text-sm mb-6 leading-relaxed">
              A digital bridge connecting families, healing trauma, and restoring identity in Rwanda.
            </p>
            <div className="bg-white text-zinc-900 rounded p-3 sm:p-4 border-l-4 border-emerald-600">
              <p className="text-xs font-medium">Stay informed</p>
              <p className="text-xs text-zinc-600 mt-1">Get updates on platform features and support resources.</p>
            </div>
          </div>
          <Column title="Quick Links" items={["Adopt or Foster", "Find Lost Family", "Support Resources", "About Us"]} />
          <Column title="Resources" items={["Legal Guidance", "Counseling Services", "Community Stories", "FAQ"]} />
          <Column title="Contact Us" items={["info@mbona.rw", "+250 788 123 456", "Kigali, Rwanda"]} />

        </div>
      </div>

      <div className="border-t border-zinc-200 px-4 sm:px-6 py-6 sm:py-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-600">
            <div>
              © 2025 Mbona Platform. All rights reserved.
            </div>
            <nav className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <a href="#" className="hover:text-emerald-600 transition-colors">Privacy policy</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">Accessibility</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-semibold text-zinc-900 text-xs sm:text-sm mb-3 sm:mb-4">{title}</h4>
      <ul className="space-y-2 sm:space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-zinc-600 hover:text-emerald-600 transition-colors text-xs sm:text-sm">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
