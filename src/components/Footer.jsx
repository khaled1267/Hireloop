import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left Side */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold">
                P
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg">
                  Programming Hero
                </h2>
              </div>
            </div>

            <p className="text-sm leading-7 max-w-xs">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            <div className="flex gap-3 mt-8">
              <Link
                href="#"
                className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center hover:bg-violet-600 transition"
              >
                F
              </Link>

              <Link
                href="#"
                className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center"
              >
                P
              </Link>

              <Link
                href="#"
                className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center hover:bg-violet-600 transition"
              >
               L
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-violet-500 font-medium mb-5">Product</h3>

            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white">
                  Job discovery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Worker AI
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Salary data
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-violet-500 font-medium mb-5">Navigations</h3>

            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Career Library
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-violet-500 font-medium mb-5">Resources</h3>

            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white">
                  Brand Guideline
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>Copyright 2024 - Programming Hero</p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#">Terms & Policy</Link>
            <Link href="#">Privacy Guideline</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}