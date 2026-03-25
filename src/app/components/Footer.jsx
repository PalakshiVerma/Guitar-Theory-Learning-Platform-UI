export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-black mb-3">Learn</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Getting Started</li>
              <li>Music Theory</li>
              <li>Chords</li>
              <li>Songs</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-black mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Guides</li>
              <li>Practice Tools</li>
              <li>Community</li>
              <li>Blog</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-black mb-3">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Help Center</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© 2026 GuitarTheory. Made for guitar learners.</p>
        </div>
      </div>
    </footer>
  );
}
