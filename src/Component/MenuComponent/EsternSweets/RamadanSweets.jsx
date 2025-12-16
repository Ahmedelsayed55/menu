import React, { useEffect, useState } from "react";
import glashmx from "../../../assets/assetsRmadan/glashmx.png";
import mdl3amanga from "../../../assets/assetsRmadan/mdl3amanga.png";
import asawer from "../../../assets/assetsRmadan/asawer.png";
import forma from "../../../assets/assetsRmadan/forma.png";
import kornehkrema from "../../../assets/assetsRmadan/kornehkrema.png";
import kornehnotela from "../../../assets/assetsRmadan/kornehnotela.png";
import lotes from "../../../assets/assetsRmadan/lotes.png";
import basma from "../../../assets/assetsRmadan/basmaagwa.png";
const RamadanSweets = ({ id }) => {
  const prduct = [
    { id: 1, name: "جلاش مكسرت", price: 35, img: glashmx },
    { id: 2, name: "مدلعه مانجا", price: 35, img: mdl3amanga },
    { id: 3, name: " أساور", price: 35, img: asawer },
    { id: 4, name: " فطيرة سوري", price: 35, img: forma },
    { id: 5, name: " كورنيه قشطة ", price: 35, img: kornehkrema },
    { id: 6, name: " كورنيه نوتيلا ", price: 35, img: kornehnotela },
    { id: 7, name: " مدلعه لوتس ", price: 35, img: lotes },
    { id: 8, name: "بصمة عجوة  ", price: 35, img: basma },
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
    <div>
      <h1 className="text-[16px] font-bold md:text-2xl mb-5">رمضانيات</h1>
      <div
        className=" grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-2 md:gap-5"
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
              className="rounded  shadow-2xl shadow-gray-400 pt-5 md:pt-7 px-1 flex flex-col items-center justify-between transition hover:scale-105 bg-gray-100 active:scale-110 focus:scale-110"
            >
              <img
                className=" w-full md:w-60  md:mb-7 transition filter hover:drop-shadow-[0_10px_5px_rgba(102,231,239,0.2)]"
                src={item.img}
                alt="Cake"
              />
              <div className="w-full flex flex-col gap-4 md:gap-7 py-3 px-3">
                <h2 className="text-start text-[14px] md:text-[24px] font-bold text-cyan-950">
                  {item.name}
                </h2>
                <h2 className="text-start text-[16px] md:text-2xl font-bold text-cyan-700">
                  {item.price} ج.م
                </h2>
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
            className="bg-gray-100 rounded px-5 pt-20 pb-5 lg:w-md shadow-lg shadow-cyan-800 flex flex-col gap-10 items-center justify-between relative"
          >
            <button
              className="absolute px-3 py-2 btn flex items-center justify-center top-2 right-2 text-2xl cursor-pointer bg-cyan-800 text-white  rounded-box shadow shadow-cyan-500"
              onClick={() => setOpen(false)}
            >
              ✖
            </button>

            <img
              className=" w-60 lg:w-[90%] md:mb-7 transition filter hover:drop-shadow-[0_10px_5px_rgba(102,231,239,0.2)]"
              src={selectedItem.img}
              alt="Cake"
            />
            <div className="w-full flex flex-col gap-7 md:gap-12 py-3 px-3">
              <h2 className="text-start text-[20px] md:text-[24px] font-bold text-cyan-950">
                {selectedItem.name}
              </h2>
              <h2 className="text-start text-[20px] md:text-[20px] font-bold text-cyan-700">
                {selectedItem.price} ﻡ.ﺝ
              </h2>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="btn bg-cyan-800 rounded-4xl border-0 shadow-lg p-7 cursor-pointer text-2xl shadow-cyan-700"
          >
            إغلاق
          </button>
        </div>
      )}
    </div>
  );
};
export default RamadanSweets;
