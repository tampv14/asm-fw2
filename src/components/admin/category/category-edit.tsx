import { useForm } from "react-hook-form";
import { ICate } from "../../../interface/category";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { message } from "antd";

const CategoryEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICate>();
  const queryclient = useQueryClient();
  const nav = useNavigate();
  const { id } = useParams();
  const { data } = useQuery<ICate>({
    queryKey: ["cates", id],
    queryFn: async () => {
      const { data: cate } = await axios.get(
        `http://localhost:3000/categories/${id}`
      );
      return cate;
    },
  });
  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);
  const mutation = useMutation({
    mutationFn: async (cate: ICate) => {
      try {
        const { data } = await axios.put(
          `http://localhost:3000/categories/${id}`,
          cate
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    onSuccess: (res) => {
      message.success("Cap nhat thanh cong");
      console.log(res);
      queryclient.invalidateQueries({ queryKey: ["cates"] });
      nav("/admin/category/list");
    },
  });
  const onsubmit = (cate: ICate) => {
    mutation.mutate(cate);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Update</h2>
      <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Tên danh mục</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập tên danh mục..."
            {...register("name", {
              required: "Ko duoc bo trong",
            })}
          />
          {errors.name?.message && (
            <span className="text-red-500">{errors?.name?.message}</span>
          )}
        </div>

        {/* Upload hình ảnh */}
        <div>
          <label className="block font-medium mb-1">Hình ảnh</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            {...register("images")}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default CategoryEdit;
