import React, { useEffect, useState } from "react";
import Cake from "../../../assets/assetsGato/ecklear.png";
import Cake2 from "../../../assets/assetsGato/hols.png";
import cheesCake from "../../../assets/assetsGato/cheesCake.png";
import melfay from "../../../assets/assetsGato/melfay.png";
import melfaych from "../../../assets/assetsGato/melfaych.png";
import swesrol from "../../../assets/assetsGato/swesrol.png";
import swesroul from "../../../assets/assetsGato/swesroul.png";
export const Gato = ({ id }) => {
  const prduct = [
    { id: 1, name: "اكلير", price: 35, img: Cake },
    { id: 2, name: "هولز", price: 17, img: Cake2 },
    { id: 3, name: "تشيزكيك", price: 25, img: cheesCake },
    { id: 4, name: "سويسرول ", price: 15, img: swesrol },
    { id: 5, name: "ملفاي", price: 20, img: melfay },
    { id: 6, name: "ملفاي شيكولاته", price: 20, img: melfaych },
    { id: 7, name: "سويسرول ", price: 15, img: swesroul },
  ];
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <div>
      <h1 className="text-[16px] font-bold md:text-2xl mb-5">جاتوة</h1>
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 ">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-100 rounded px-5 h-[80%] pt-20 pb-5 w-sm  lg:w-md shadow-lg shadow-cyan-800 flex flex-col gap-10 items-center justify-between relative"
          >
            <button
              className="absolute px-3 py-2 btn flex items-center justify-center top-2 right-2 text-2xl cursor-pointer bg-cyan-800 text-white  rounded-box"
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
                {selectedItem.price} ج.م
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
