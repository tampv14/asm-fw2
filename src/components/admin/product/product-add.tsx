import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IProduct } from "../../../interface/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>();
  const queryclient = useQueryClient();
  const nav = useNavigate();
  const mutation = useMutation({
    mutationFn: async (product: IProduct) => {
      try {
        const { data } = await axios.post(
          `http://localhost:3000/products`,
          product
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: (res) => {
      message.success("Them thanh cong");
      console.log(res);
      queryclient.invalidateQueries({ queryKey: ["products"] });
      nav("/admin/product/list");
    },
  });
  const onsubmit = (product: IProduct) => {
    mutation.mutate(product);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6"> 📝 Thêm Sản Phẩm</h2>
      <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Tên sản phẩm</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Nhập tên sản phẩm"
            {...register("name", {
              required: "Khong duoc de trong",
            })}
          />
          {errors.name?.message && (
            <span className="text-red-500">{errors?.name?.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Hình ảnh sản phẩm
          </label>
          <input
            placeholder="Nhap images"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md"
            {...register("images")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Giá sản phẩm</label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Nhập giá sản phẩm"
            {...register("price", {
              required: "Khong duoc bo trong",
              min: {
                value: 1000,
                message: "Lon hon 1000",
              },
            })}
          />
          {errors.price?.message && (
            <span className="text-red-500">{errors?.price?.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Chọn danh mục
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md"
            {...register("category")}
          >
            <option value="">Chọn danh mục</option>
            <option value="Phones">Phones</option>
            <option value="Computers">Computers</option>
            <option value="SmartWacth">SmartWacth</option>
            <option value="Camera">Camera</option>
            <option value="HeadPhones">HeadPhones</option>
            <option value="Gaming">Gaming</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
