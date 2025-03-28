import React from "react";

function Category() {
  return (
    <div className="container mx-auto p-4 my-10">
      <h2 className="text-2xl font-bold mb-4">Category name</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-8">
        {/** Product Card */}
        <div className="border rounded-lg shadow-lg p-4 relative">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -35%
          </span>
          <img
            src="/src/assets/img/Cart (11).png"
            alt="Product"
            className="w-full h-40 object-cover"
          />
          <button className="mt-2 w-full bg-black text-white py-2 flex items-center justify-center">
            🛒 Add To Cart
          </button>

          <h3 className="text-lg font-semibold mt-2">Gucci duffle bag</h3>
          <p className="text-red-500 text-lg font-bold">
            $960 <span className="text-gray-400 line-through">$1160</span>
          </p>
        </div>

        <div className="border rounded-lg shadow-lg p-4 relative">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -35%
          </span>
          <img
            src="/src/assets/img/Cart (12).png"
            alt="Product"
            className="w-full h-40 object-cover"
          />
          <button className="mt-2 w-full bg-black text-white py-2 flex items-center justify-center">
            🛒 Add To Cart
          </button>
          <h3 className="text-lg font-semibold mt-2">RGB liquid CPU Cooler</h3>
          <p className="text-red-500 text-lg font-bold">$1960 </p>
        </div>

        <div className="border rounded-lg shadow-lg p-4 relative">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -35%
          </span>
          <img
            src="/src/assets/img/Cart (13).png"
            alt="Product"
            className="w-full h-40 object-cover"
          />
          <button className="mt-2 w-full bg-black text-white py-2 flex items-center justify-center">
            🛒 Add To Cart
          </button>
          <h3 className="text-lg font-semibold mt-2">
            GP11 Shooter USB Gamepad
          </h3>
          <p className="text-red-500 text-lg font-bold">$550</p>
        </div>

        <div className="border rounded-lg shadow-lg p-4 relative">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -35%
          </span>
          <img
            src="/src/assets/img/Cart (14).png"
            alt="Product"
            className="w-full h-40 object-cover"
          />
          <button className="mt-2 w-full bg-black text-white py-2 flex items-center justify-center">
            🛒 Add To Cart
          </button>
          <h3 className="text-lg font-semibold mt-2">Quilted Satin Jacket</h3>
          <p className="text-red-500 text-lg font-bold">$750 </p>
        </div>
        <div className="border rounded-lg shadow-lg p-4 relative">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -35%
          </span>
          <img
            src="/src/assets/img/Cart (15).png"
            alt="Product"
            className="w-full h-40 object-cover"
          />
          <button className="mt-2 w-full bg-black text-white py-2 flex items-center justify-center">
            🛒 Add To Cart
          </button>
          <h3 className="text-lg font-semibold mt-2">ASUS FHD Gaming Laptop</h3>
          <p className="text-red-500 text-lg font-bold">
            $960 <span className="text-gray-400 line-through">$1160</span>
          </p>
          <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ (65)</p>
        </div>
        <div className="border rounded-lg shadow-lg p-4 relative">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -35%
          </span>
          <img
            src="/src/assets/img/Cart (16).png"
            alt="Product"
            className="w-full h-40 object-cover"
          />
          <button className="mt-2 w-full bg-black text-white py-2 flex items-center justify-center">
            🛒 Add To Cart
          </button>
          <h3 className="text-lg font-semibold mt-2">IPS LCD Gaming Monitor</h3>
          <p className="text-red-500 text-lg font-bold">$1160</p>
          <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ (65)</p>
        </div>
        <div className="border rounded-lg shadow-lg p-4 relative">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -35%
          </span>
          <img
            src="/src/assets/img/Cart (17).png"
            alt="Product"
            className="w-full h-40 object-cover"
          />
          <button className="mt-2 w-full bg-black text-white py-2 flex items-center justify-center">
            🛒 Add To Cart
          </button>
          <h3 className="text-lg font-semibold mt-2">HAVIT HV-G92 Gamepad</h3>
          <p className="text-red-500 text-lg font-bold">$560 </p>
          <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ (65)</p>
        </div>
        <div className="border rounded-lg shadow-lg p-4 relative">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -35%
          </span>
          <img
            src="/src/assets/img/Cart (18).png"
            alt="Product"
            className="w-full h-40 object-cover"
          />
          <button className="mt-2 w-full bg-black text-white py-2 flex items-center justify-center">
            🛒 Add To Cart
          </button>
          <h3 className="text-lg font-semibold mt-2">AK-900 Wired Keyboard</h3>
          <p className="text-red-500 text-lg font-bold">$200 </p>
          <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ (65)</p>
        </div>
      </div>
    </div>
  );
}

export default Category;
