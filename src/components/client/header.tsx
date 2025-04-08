import React, { useState, useEffect } from "react";
import axios from "axios";
import { IProduct } from "../../interface/product";

const ClientHeader = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  // Lấy danh sách sản phẩm từ API khi component được mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data); // Cập nhật dữ liệu sản phẩm từ API
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Hàm gọi API chỉ chạy khi component mount lần đầu

  // Hàm xử lý thay đổi giá trị ô tìm kiếm
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Hàm lọc sản phẩm dựa trên từ khóa tìm kiếm
  const handleSearchSubmit = () => {
    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  };

  return (
    <header>
      {/* Announcement bar */}
      <div className="bg-black text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          <div className="w-28 lg:w-40"></div> {/* Placeholder for centering */}
          <div className="text-sm mx-auto whitespace-nowrap">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="#" className="font-bold hover:underline ml-1">
              Shop Now
            </a>
          </div>
          <div className="relative w-28 lg:w-40 flex justify-end">
            <select className="bg-transparent text-white text-sm appearance-none pr-6 cursor-pointer border-none focus:outline-none">
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
              <option value="vi">Tiếng Việt</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-black mb-4 md:mb-0">
            Exclusive
          </a>

          {/* Navigation Menu */}
          <ul className="flex space-x-8 mb-4 md:mb-0 order-3 md:order-2">
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-500">
                Home
              </a>
            </li>
            <li>
              <a href="/category" className="text-gray-700 hover:text-gray-500">
                Category
              </a>
            </li>
            <li>
              <a href="/details" className="text-gray-700 hover:text-gray-500">
                About
              </a>
            </li>
            <li>
              <a href="/register" className="text-gray-700 hover:text-gray-500">
                Sign Up
              </a>
            </li>
          </ul>

          {/* Right side menu with search and icons */}
          <div className="flex items-center space-x-4 order-2 md:order-3 mb-4 md:mb-0">
            {/* Search Box */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="pl-4 pr-10 py-2 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:border-gray-400 w-[240px]"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={handleSearchSubmit}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filtered Products Display */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <div className="relative h-60 bg-gray-100">
                  <img
                    src={product.images}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <span className="text-red-500 font-semibold">
                    ${product.price}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div>No products found</div>
          )}
        </div>
      </div>
    </header>
  );
};

export default ClientHeader;
