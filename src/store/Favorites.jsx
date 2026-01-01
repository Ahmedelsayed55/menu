import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const favorites = create(
  persist(
    (set) => ({
      favoritsItem: [],
      addToFavorite: (products) =>
        set((state) => {
          let product = state.favoritsItem;
          let final = product.findIndex((el) => el.id == products.id);
          if (final == -1) {
            product.push({ ...products, qty: 1 });
            toast.success(`${products.name} تم اضافته بنجاح`);
          } else {
            toast.error(`${products.name} موجود بالفعل `);
          }
          return { favoritsItem: product };
        }),
      removeFromFavorites: (products) =>
        set((state) => {
          let product = state.favoritsItem;
          let final = product.findIndex((el) => el.id == products.id);
          product.splice(final, 1);
          toast.success(`${products.name} تم حذفه بنجاح`);
          return { favoritsItem: product };
        }),
    }),
    {
      name: "favorites-storage",
    }
  )
);
