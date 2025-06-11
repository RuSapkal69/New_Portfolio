import { useRef } from "react"

function Home() {
  const homeRef = useRef(null)

  return (
    <div ref={homeRef} className="relative w-full min-h-screen">
      {/* Content with backdrop for readability */}
      <div className="relative z-10 min-h-screen flex flex-col bg-black/40 backdrop-blur-sm">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Welcome to My Portfolio
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              I'm a passionate developer creating amazing digital experiences with modern technologies and innovative
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                View My Work
              </button>
              <button className="px-8 py-3 border border-white/30 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Me
              </button>
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-white">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="group bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Project Alpha</h3>
                  <p className="text-gray-300 mb-4">
                    A cutting-edge web application built with React and modern technologies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-900/50 rounded-full text-xs text-blue-300">React</span>
                    <span className="px-3 py-1 bg-purple-900/50 rounded-full text-xs text-purple-300">TypeScript</span>
                    <span className="px-3 py-1 bg-cyan-900/50 rounded-full text-xs text-cyan-300">Tailwind</span>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="group bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-purple-500/30 to-pink-600/30 flex items-center justify-center">
                  <div className="text-6xl">🎨</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Design System</h3>
                  <p className="text-gray-300 mb-4">
                    A comprehensive design system with reusable components and guidelines.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-900/50 rounded-full text-xs text-purple-300">Figma</span>
                    <span className="px-3 py-1 bg-pink-900/50 rounded-full text-xs text-pink-300">CSS</span>
                    <span className="px-3 py-1 bg-blue-900/50 rounded-full text-xs text-blue-300">Storybook</span>
                  </div>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="group bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 flex items-center justify-center">
                  <div className="text-6xl">⚡</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Performance App</h3>
                  <p className="text-gray-300 mb-4">
                    High-performance application optimized for speed and user experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-900/50 rounded-full text-xs text-cyan-300">Next.js</span>
                    <span className="px-3 py-1 bg-blue-900/50 rounded-full text-xs text-blue-300">GraphQL</span>
                    <span className="px-3 py-1 bg-green-900/50 rounded-full text-xs text-green-300">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-white">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["React", "TypeScript", "Next.js", "Node.js", "Python", "GraphQL", "AWS", "Docker"].map((skill) => (
                <div
                  key={skill}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-lg font-semibold text-white">{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
