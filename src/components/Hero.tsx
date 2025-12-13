export default function Hero() {
  return (
      <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <p className="text-blue-600 font-semibold text-lg mb-4">
              안녕하세요 👋
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Backend Develop
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              YoungJae
            </span>
              입니다
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              사용자 경험을 최우선으로 생각하며,
              <br className="hidden sm:block" />
              아름답고 효율적인 웹 애플리케이션을 만듭니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                  href="#projects"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105"
              >
                프로젝트 보기
              </a>
              <a
                  href="#contact"
                  className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                연락하기
              </a>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-4 text-gray-600">
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                Java
              </div>
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                Spring
              </div>
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                Spring Boot
              </div>
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                JPA
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}