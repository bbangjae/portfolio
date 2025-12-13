export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © {currentYear} YoungJae. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <a
                  href="https://github.com/bbangjae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                  href="https://a-steady-byun.tistory.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
              >
                Blog
              </a>
              <a
                  href="mailto:thebbangjae@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}