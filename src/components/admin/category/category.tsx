import { useForm } from "react-hook-form";
import { ICate } from "../../../interface/category";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const CategoryAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICate>();
  const queryclient = useQueryClient();
  const nav = useNavigate();
  const mutation = useMutation({
    mutationFn: async (cate: ICate) => {
      try {
        const { data } = await axios.post(
          " http://localhost:3000/categories",
          cate
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    onSuccess: (res) => {
      message.success("Them thanh cong");
      console.log(res);
      queryclient.invalidateQueries({ queryKey: ["cate"] });
      nav("/admin/category/list");
    },
  });
  const onsubmit = (cate: ICate) => {
    mutation.mutate(cate);
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
  <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">📝 Thêm Danh Mục</h2>
  
  <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
    {/* Nhập tên danh mục */}
    <div>
      <label className="block text-lg font-medium text-gray-600 mb-2">Tên danh mục</label>
      <input
        type="text"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Nhập tên danh mục..."
        {...register("name", { required: "Không được bỏ trống" })}
      />
      {errors.name?.message && <span className="text-red-500 text-sm">{errors.name.message}</span>}
    </div>

    {/* Upload hình ảnh */}
    <div>
      <label className="block text-lg font-medium text-gray-600 mb-2">Hình ảnh</label>
      <input
        type="text"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Nhập URL hình ảnh..."
        {...register("images")}
      />
    </div>

    <button
      type="submit"
      className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300"
    >
       Add
    </button>
  </form>
</div>

  );
};

export default CategoryAdd;
