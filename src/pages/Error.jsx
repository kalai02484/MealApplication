import React from 'react'

const Error = () => {
  return (
    <div className="error-container flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center animate-fade-in">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 animate-bounce">
          404
        </h1>
        <p className="text-2xl text-gray-300 mt-4 animate-pulse">
          Page Not Found
        </p>
        <a 
          href="/" 
          className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-slide-up"
        >
          Go Back Home
        </a>
      </div>
    </div>
  )
}

export default Error
