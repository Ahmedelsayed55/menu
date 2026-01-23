import React, { useEffect, useState } from "react";
import sodani from "../../../assets/assetsDryNuts/sodani.png";
import homs from "../../../assets/assetsDryNuts/homs.png";
import noga from "../../../assets/assetsDryNuts/noga.png";
import semsem from "../../../assets/assetsDryNuts/semsem.png";
import logo from "../../../assets/logocart.png";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { favorites } from "../../../store/Favorites";
const DryNuts = ({ id }) => {
  const { addToFavorite } = favorites();
  const prduct = [
    { id: 1, name: "سودانية", price: 150, img: sodani },
    { id: 2, name: "حمصية", price: 150, img: homs },
    { id: 3, name: "نوجا", price: 110, img: noga },
    { id: 4, name: "سمسمية", price: 160, img: semsem },
    { id: 5, name: "شريحه حمص", price: 135, img: null },
    { id: 6, name: "شريحه سمسم", price: 135, img: null },
    { id: 7, name: "نواعم", price: 150, img: null },
    { id: 8, name: "بندق", price: 625, img: null },
    { id: 9, name: "لوز", price: 550, img: null },
    { id: 10, name: "فستق", price: 1400, img: null },
    { id: 11, name: "كاجو", price: 550, img: null },
  ];
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // يمنع الاسكرول
    } else {
      document.body.style.overflow = "auto"; // يرجع الاسكرول
    }

    return () => {
      document.body.style.overflow = "auto"; // احتياطي عند الخروج من الكمبوننت
    };
  }, [open]);

  return (
    <div className="border-b border-gray-300 py-20 md:py-30 mb-10 shadow-lg shadow-gray-300">
      <h1 className="text-3xl font-bold md:text-5xl mb-10 md:mb-20 underline text-center">
        نواشف ومكسرات
      </h1>
      <div
        className=" grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2 md:gap-10"
        id={id}
      >
        {prduct.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => {
                setSelectedItem(item);
                setOpen(true);
              }}
              className="rounded-2xl group shadow-lg shadow-gray-400 pt-5 md:p-2 px-1 flex flex-col items-center justify-between md:gap-10 transition hover:shadow-lg bg-gray-100   "
            >
              <div className="relative h-1/2 group-hover:shadow-2xl group-hover:shadow-gray-200 transition duration-300  shadow group w-full md:h-100  flex justify-center overflow-hidden rounded-2xl">
                <img
                  className=" w-full md:w-[80%] md:h-[90%] object-contain rounded-xl transition-transform  duration-300 group-active:scale-120  group-hover:scale-120  "
                  src={item.img ? item.img : logo}
                  alt="Cake"
                  loading="lazy"
                />
              </div>

              <div className="w-full flex flex-col gap-4 md:gap-7 py-3 px-3">
                <h2 className="text-start text-[14px] md:text-[24px] font-bold text-cyan-950 transition duration-500 cursor-default group-hover:-translate-y-5">
                  {item.name}
                </h2>
                <h2 className="text-start text-[16px] md:text-2xl font-bold text-cyan-700 transition duration-500 cursor-default group-hover:-translate-y-5">
                  {item.price} ج.م
                </h2>
                <div className="flex gap-2 items-center transition duration-500 group-hover:-translate-y-5">
                  <button
                    onClick={(e) => {
                      (e.stopPropagation(), addToFavorite(item));
                    }}
                    className="text-2xl md:text-3xl cursor-pointer hover:bg-red-500 hover:text-white p-2 md:p-3 rounded border  focus:scale-120 focus:border-amber-700"
                  >
                    <MdOutlineFavoriteBorder />
                  </button>
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    to={"/contact"}
                    className="w-full text-center py-3  text-[14px] md:text-2xl hover:bg-white hover:text-black border bg-cyan-950 text-white rounded-2xl cursor-pointer "
                  >
                    للطلب والاستفسار
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* model for details */}
      {/* model for details */}
      {open && selectedItem && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 flex flex-col gap-5 items-center justify-center z-50 px-4 "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-100 rounded px-5 pt-20 pb-5 group overflow-hidden  lg:w-md shadow-lg shadow-cyan-800 flex flex-col gap-10 items-center justify-between relative"
          >
            <button
              className="absolute px-3 py-2 btn flex items-center justify-center top-2 right-2 text-2xl cursor-pointer bg-cyan-800 text-white  rounded-box shadow shadow-cyan-500"
              onClick={() => setOpen(false)}
            >
              ✖
            </button>

            <div className="relative h-1/2 group-hover:shadow-2xl group-hover:shadow-gray-200 transition duration-300  shadow group w-full md:h-96  flex justify-center overflow-hidden rounded-2xl">
              <img
                className=" w-[90%] md:mb-7 filter transition-transform duration-300 group-hover:scale-120"
                src={selectedItem.img ? selectedItem.img : logo}
                alt="Cake"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-full flex flex-col gap-7 md:gap-12 py-3 px-3">
              <h2 className="text-start text-[20px] md:text-[24px] font-bold text-cyan-950">
                {selectedItem.name}
              </h2>
              <h2 className="text-start text-[20px] md:text-[20px] font-bold text-cyan-700">
                {selectedItem.price} ج.م
              </h2>
              <div className="flex gap-2 transition duration-500 group-hover:-translate-y-5">
                <button
                  onClick={(e) => {
                    (e.stopPropagation(), addToFavorite(selectedItem));
                  }}
                  className="text-3xl cursor-pointer hover:bg-red-500 hover:text-white p-3 rounded"
                >
                  {" "}
                  <MdOutlineFavoriteBorder />
                </button>
                <Link
                  onClick={(e) => e.stopPropagation()}
                  to={"/contact"}
                  className="w-full text-center p-3 md:text-2xl hover:bg-white hover:text-black border bg-cyan-950 text-white rounded-2xl cursor-pointer "
                >
                  للطلب والاستفسار
                </Link>
              </div>
            </div>
          </div>
          <button className="btn bg-cyan-800 rounded-4xl border-0 shadow-lg p-7 cursor-pointer text-2xl text-white shadow-cyan-700">
            إغلاق
          </button>
        </div>
      )}
    </div>
  );
};
export default DryNuts;
