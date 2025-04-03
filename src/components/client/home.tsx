import React from "react";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Categories and Hero Banner */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 py-8">
        {/* Left: Categories */}
        <div className="w-full lg:w-1/4  rounded p-2">
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Women's Fashion <span>&rarr;</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Men's Fashion <span>&rarr;</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Electronics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Home & Lifestyle
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Medicine
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Sports & Outdoor
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Baby's & Toys
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Groceries & Pets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Health & Beauty
              </a>
            </li>
          </ul>
        </div>
        {/* Right: Hero Banner */}
        <div className="w-full lg:w-3/4 bg-black text-white rounded-lg overflow-hidden relative">
          <div className="flex flex-col md:flex-row items-center h-full px-10 md:px-12 py-10">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <img
                  src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
                  alt="Apple Logo"
                  className="h-10 mr-4"
                />
                <span className="text-sm">iPhone 14 Series</span>
              </div>
              <h1 className="text-4xl font-bold mb-2">Up to 10%</h1>
              <h1 className="text-4xl font-bold mb-6">off Voucher</h1>
              <button className="flex items-center text-sm border-b border-white pb-1 hover:opacity-80 transition">
                Shop Now <span className="ml-2">&rarr;</span>
              </button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              {/* Light Glow Effect */}
              <div className="relative w-100 h-100">
                {/* iPhone Image */}
                <img
                  src="/src/assets/img/hero_endframe__cvklg0xk3w6e_large 2.png"
                  alt="iPhone 14"
                  className="w-full h-full object-contain glow-effect"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            <button className="w-2 h-2 rounded-full bg-gray-500 transition-colors duration-300 hover:bg-red-400"></button>
            <button className="w-2 h-2 rounded-full bg-gray-500 transition-colors duration-300 hover:bg-red-400"></button>
            <button className="w-2 h-2 rounded-full bg-red-500 transition-colors duration-300 hover:bg-red-400"></button>
            <button className="w-2 h-2 rounded-full bg-gray-500 transition-colors duration-300 hover:bg-red-400"></button>
            <button className="w-2 h-2 rounded-full bg-gray-500 transition-colors duration-300 hover:bg-red-400"></button>
          </div>
        </div>
      </div>

      {/* JBL Speaker Banner */}

      {/* Browse By Category */}
      <div className="my-12">
        <div className="flex items-center mb-4">
          <div className="w-1 h-10 bg-red-500 mr-3"></div>
          <span className="text-red-500 font-medium">Categories</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Browse By Category</h2>
          <div className="flex space-x-2">
            <button className="p-2 border rounded hover:bg-gray-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="p-2 border rounded hover:bg-gray-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* Phone Category */}
        <div className="group border rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 h-32 hover:shadow-lg hover:border-red-500 hover:scale-105 hover:bg-red-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto mb-2 transition-colors duration-300 group-hover:text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </svg>
          <span className="text-center font-medium group-hover:text-red-500">Phones</span>
        </div>

        {/* Computers Category */}
        <div className="group border rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 h-32 hover:shadow-lg hover:border-red-500 hover:scale-105 hover:bg-red-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto mb-2 transition-colors duration-300 group-hover:text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <path d="M8 21h8" />
            <path d="M12 17v4" />
          </svg>
          <span className="text-center font-medium group-hover:text-red-500">Computers</span>
        </div>

        {/* SmartWatch Category */}
        <div className="group border rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 h-32 hover:shadow-lg hover:border-red-500 hover:scale-105 hover:bg-red-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto mb-2 transition-colors duration-300 group-hover:text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="7" />
            <polyline points="12 9 12 12 13.5 13.5" />
            <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
          </svg>
          <span className="text-center font-medium group-hover:text-red-500">SmartWatch</span>
        </div>

        {/* Camera Category */}
        <div className="group border rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 h-32 hover:shadow-lg hover:border-red-500 hover:scale-105 hover:bg-red-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto mb-2 transition-colors duration-300 group-hover:text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
          <span className="text-center font-medium group-hover:text-red-500">Camera</span>
        </div>

        {/* Headphones Category */}
        <div className="group border rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 h-32 hover:shadow-lg hover:border-red-500 hover:scale-105 hover:bg-red-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto mb-2 transition-colors duration-300 group-hover:text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          </svg>
          <span className="text-center font-medium group-hover:text-red-500">HeadPhones</span>
        </div>

        {/* Gaming Category */}
        <div className="group border rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 h-32 hover:shadow-lg hover:border-red-500 hover:scale-105 hover:bg-red-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto mb-2 transition-colors duration-300 group-hover:text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 11h4M8 9v4M15 12h.01M18 10h.01" />
            <rect width="20" height="12" x="2" y="6" rx="2" />
          </svg>
          <span className="text-center font-medium group-hover:text-red-500">Gaming</span>
        </div>
      </div>
    </div>
      </div>
      <div className="my-12">
        <div className="flex items-center mb-4">
          <div className="w-1 h-10 bg-red-500 mr-3"></div>
          <span className="text-red-500 font-medium">This Month</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Best Selling Products</h2>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            View All
          </button>
        </div>
        <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product 1: The north coat */}
        <div className="bg-gray-50 rounded-lg overflow-hidden group">
          <div className="relative h-60 bg-gray-100">
            <img
              src="/src/assets/img/Cart (1).png"
              alt="The north coat"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">The north coat</h3>
            <div className="flex items-center mt-2">
              <span className="text-red-500 font-semibold">$250</span>
              <span className="text-gray-400 line-through ml-2">$360</span>
            </div>
            <div className="flex items-center mt-2">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-xs text-gray-500 ml-2">(65)</span>
            </div>
          </div>
        </div>

        {/* Product 2: Gucci duffle bag */}
        <div className="bg-gray-50 rounded-lg overflow-hidden group">
          <div className="relative h-60 bg-gray-100">
            <img
              src="/src/assets/img/Cart (2).png"
              alt="Gucci duffle bag"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">Gucci duffle bag</h3>
            <div className="flex items-center mt-2">
              <span className="text-red-500 font-semibold">$960</span>
              <span className="text-gray-400 line-through ml-2">$1160</span>
            </div>
            <div className="flex items-center mt-2">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-xs text-gray-500 ml-2">(65)</span>
            </div>
          </div>
        </div>

        {/* Product 3: RGB liquid CPU Cooler */}
        <div className="bg-gray-50 rounded-lg overflow-hidden group">
          <div className="relative h-60 bg-gray-100">
            <img
              src="/src/assets/img/Cart (3).png"
              alt="RGB liquid CPU Cooler"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">RGB liquid CPU Cooler</h3>
            <div className="flex items-center mt-2">
              <span className="text-red-500 font-semibold">$160</span>
              <span className="text-gray-400 line-through ml-2">$170</span>
            </div>
            <div className="flex items-center mt-2">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-xs text-gray-500 ml-2">(65)</span>
            </div>
          </div>
        </div>

        {/* Product 4: Small BookShelf */}
        <div className="bg-gray-50 rounded-lg overflow-hidden group">
          <div className="relative h-60 bg-gray-100">
            <img
              src="/src/assets/img/Cart (4).png"
              alt="Small BookShelf"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">Small BookShelf</h3>
            <div className="flex items-center mt-2">
              <span className="text-red-500 font-semibold">$360</span>
            </div>
            <div className="flex items-center mt-2">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-xs text-gray-500 ml-2">(65)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      <div className="my-12">
        <div className="bg-black text-white rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center py-8 px-8 md:px-12">
            {/* Left Section: Text and Countdown */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <span className="text-green-500 font-medium">Categories</span>
              </div>
              <h2 className="text-4xl font-bold mb-2">Enhance Your</h2>
              <h2 className="text-4xl font-bold mb-6">Music Experience</h2>

              {/* Time Countdown */}
              <div className="flex space-x-4 mb-6">
                <div className="countdown-circle">
                  <span className="font-semibold">23</span>
                  <span>Hours</span>
                </div>
                <div className="countdown-circle">
                  <span className="font-semibold">05</span>
                  <span>Days</span>
                </div>
                <div className="countdown-circle">
                  <span className="font-semibold">59</span>
                  <span>Mins</span>
                </div>
                <div className="countdown-circle">
                  <span className="font-semibold">35</span>
                  <span>Secs</span>
                </div>
              </div>

              {/* Buy Now Button */}
              <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                Buy Now!
              </button>
            </div>

            {/* Right Section: Speaker Image with Glow */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="relative w-100 h-100">
                <img
                  src="/src/assets/img/Frame 694.png"
                  alt="JBL Speaker"
                  className="w-full h-full object-contain glow-effect"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Products */}
      <div className="my-12 container mx-auto px-4">
      <div className="flex items-center mb-4">
        <div className="w-1 h-10 bg-red-500 mr-3"></div>
        <span className="text-red-500 font-medium">Our Products</span>
      </div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Explore Our Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product 1: Breed Dry Dog Food */}
        <div className="bg-gray-50 rounded-lg overflow-hidden group">
          <div className="relative h-60 bg-gray-100">
            <img
              src="/src/assets/img/Cart (17).png"
              alt="Breed Dry Dog Food"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">Breed Dry Dog Food</h3>
            <div className="flex items-center mt-2">
              <span className="text-red-500 font-semibold">$100</span>
            </div>
            <div className="flex items-center mt-2">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-xs text-gray-500 ml-2">(35)</span>
            </div>
          </div>
        </div>

        {/* Product 2: CANON EOS DSLR Camera */}
        <div className="bg-gray-50 rounded-lg overflow-hidden group">
          <div className="relative h-60 bg-gray-100">
            <img
              src="/src/assets/img/Cart (16).png"
              alt="CANON EOS DSLR Camera"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">CANON EOS DSLR Camera</h3>
            <div className="flex items-center mt-2">
              <span className="text-red-500 font-semibold">$360</span>
            </div>
            <div className="flex items-center mt-2">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-xs text-gray-500 ml-2">(95)</span>
            </div>
          </div>
        </div>

        {/* Product 3: ASUS FHD Gaming Laptop */}
        <div className="bg-gray-50 rounded-lg overflow-hidden group">
          <div className="relative h-60 bg-gray-100">
            <img
              src="/src/assets/img/Cart (15).png"
              alt="ASUS FHD Gaming Laptop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">ASUS FHD Gaming Laptop</h3>
            <div className="flex items-center mt-2">
              <span className="text-red-500 font-semibold">$700</span>
            </div>
            <div className="flex items-center mt-2">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-xs text-gray-500 ml-2">(325)</span>
            </div>
          </div>
        </div>

        {/* Product 4: Curology Product Set */}
        <div className="bg-gray-50 rounded-lg overflow-hidden group">
          <div className="relative h-60 bg-gray-100">
            <img
              src="/src/assets/img/Cart (14).png"
              alt="Curology Product Set"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">Curology Product Set</h3>
            <div className="flex items-center mt-2">
              <span className="text-red-500 font-semibold">$500</span>
            </div>
            <div className="flex items-center mt-2">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-xs text-gray-500 ml-2">(145)</span>
            </div>
          </div>
        </div>

        {/* Product 5: Kids Electric Car */}
        <div className="bg-gray-50 rounded-lg overflow-hidden group">
          <div className="relative h-60 bg-gray-100">
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-green-500 text-white text-xs py-1 px-2 rounded">New</span>
            </div>
            <img
              src="/src/assets/img/Cart (13).png"
              alt="Kids Electric Car"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">Kids Electric Car</h3>
            <div className="flex items-center mt-2">
              <span className="text-red-500 font-semibold">$960</span>
            </div>
            <div className="flex items-center mt-2">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-xs text-gray-500 ml-2">(65)</span>
            </div>
            <div className="flex space-x-2 mt-3">
              <button className="w-4 h-4 rounded-full bg-red-500"></button>
              <button className="w-4 h-4 rounded-full bg-red-700"></button>
            </div>
          </div>
        </div>

        {/* Product 6: Jr. Zoom Soccer Cleats */}
        <div className="bg-gray-50 rounded-lg overflow-hidden group">
          <div className="relative h-60 bg-gray-100">
            <img
              src="/src/assets/img/Cart (12).png"
              alt="Jr. Zoom Soccer Cleats"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">Jr. Zoom Soccer Cleats</h3>
            <div className="flex items-center mt-2">
              <span className="text-red-500 font-semibold">$160</span>
            </div>
            <div className="flex items-center mt-2">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-xs text-gray-500 ml-2">(35)</span>
            </div>
            <div className="flex space-x-2 mt-3">
              <button className="w-4 h-4 rounded-full bg-yellow-500"></button>
              <button className="w-4 h-4 rounded-full bg-red-500"></button>
            </div>
          </div>
        </div>

        {/* Product 7: GP11 Shooter USB Gamepad */}
        <div className="bg-gray-50 rounded-lg overflow-hidden group">
          <div className="relative h-60 bg-gray-100">
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-green-500 text-white text-xs py-1 px-2 rounded">New</span>
            </div>
            <img
              src="/src/assets/img/Cart (11).png"
              alt="GP11 Shooter USB Gamepad"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">GP11 Shooter USB Gamepad</h3>
            <div className="flex items-center mt-2">
              <span className="text-red-500 font-semibold">$650</span>
            </div>
            <div className="flex items-center mt-2">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-xs text-gray-500 ml-2">(55)</span>
            </div>
            <div className="flex space-x-2 mt-3">
              <button className="w-4 h-4 rounded-full bg-black"></button>
              <button className="w-4 h-4 rounded-full bg-red-500"></button>
            </div>
          </div>
        </div>

        {/* Product 8: Quilted Satin Jacket */}
        <div className="bg-gray-50 rounded-lg overflow-hidden group">
          <div className="relative h-60 bg-gray-100">
            <img
              src="/src/assets/img/Cart (18).png"
              alt="Quilted Satin Jacket"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                Add to Cart
              </button>
            </div>
            <div className="absolute top-3 right-3 flex flex-col space-y-2">
              <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">Quilted Satin Jacket</h3>
            <div className="flex items-center mt-2">
              <span className="text-red-500 font-semibold">$680</span>
            </div>
            <div className="flex items-center mt-2">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-xs text-gray-500 ml-2">(55)</span>
            </div>
            <div className="flex space-x-2 mt-3">
              <button className="w-4 h-4 rounded-full bg-green-800"></button>
              <button className="w-4 h-4 rounded-full bg-red-500"></button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-8">
        <button className="px-8 py-3 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition">
          View All Products
        </button>
      </div>
    </div>

      {/* Best Selling Products */}
      {/* New Arrival */}
      <div className="my-12">
        <div className="flex items-center mb-4">
          <div className="w-1 h-10 bg-red-500 mr-3"></div>
          <span className="text-red-500 font-medium">Featured</span>
        </div>
        <h2 className="text-2xl font-bold mb-6">New Arrival</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4"></div>
      </div>
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PlayStation 5 Section */}
        <div className="relative bg-black text-white overflow-hidden group">
          <div className="relative h-[600px] transition-transform duration-700 transform group-hover:scale-105">
            <img
              src="/src/assets/img/Frame 684.png"
              alt="PlayStation 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
            <h2 className="text-4xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              PlayStation 5
            </h2>
            <p className="text-sm mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
              Experience next-generation gaming with the PS5
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md w-max transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 hover:bg-red-500 hover:text-white">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Side Sections */}
        <div className="grid grid-cols-2 gap-4">
          {/* Top Wide Section */}
          <div className="relative bg-gray-900 text-white overflow-hidden group col-span-2">
            <div className="relative h-[250px] transition-transform duration-700 transform group-hover:scale-105">
              <img
                src="/src/assets/img/Frame 685.png"
                alt="Perfume Collection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h2 className="text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                Luxury Perfumes
              </h2>
              <p className="text-xs mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                Discover our exclusive fragrance collection
              </p>
              <button className="bg-white text-black py-2 px-4 rounded-md w-max transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 hover:bg-red-500 hover:text-white text-sm">
                Shop Now
              </button>
            </div>
          </div>

          {/* Women's Collections */}
          <div className="relative bg-gray-900 text-white overflow-hidden group">
            <div className="relative h-[200px] transition-transform duration-700 transform group-hover:scale-105">
              <img
                src="/src/assets/img/Frame 686.png"
                alt="Women's Collections"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
              <h2 className="text-lg font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                Women's Fashion
              </h2>
              <p className="text-xs mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                Trendy styles for every occasion
              </p>
              <button className="bg-white text-black py-1.5 px-3 rounded-md w-max transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 hover:bg-red-500 hover:text-white text-xs">
                Shop Now
              </button>
            </div>
          </div>

          {/* Speakers */}
          <div className="relative bg-gray-800 text-white overflow-hidden group">
            <div className="relative h-[180px] transition-transform duration-700 transform group-hover:scale-105">
              <img src="/src/assets/img/Frame 687.png" alt="Speakers" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
              <h2 className="text-lg font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                Premium Speakers
              </h2>
              <p className="text-xs mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                Immersive sound experience
              </p>
              <button className="bg-white text-black py-1.5 px-3 rounded-md w-max transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 hover:bg-red-500 hover:text-white text-xs">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Service Features */}
      <div className="my-20 border-t pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Free and Fast Delivery */}
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">FREE AND FAST DELIVERY</h3>
            <p className="text-gray-500 text-sm">
              Free delivery for all orders over $140
            </p>
          </div>

          {/* Feature 2: 24/7 Customer Service */}
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">24/7 CUSTOMER SERVICE</h3>
            <p className="text-gray-500 text-sm">
              Friendly 24/7 customer support
            </p>
          </div>

          {/* Feature 3: Money Back Guarantee */}
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">MONEY BACK GUARANTEE</h3>
            <p className="text-gray-500 text-sm">
              We return money within 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
