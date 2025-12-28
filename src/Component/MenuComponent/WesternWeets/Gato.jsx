import React, { useEffect, useState } from "react";
import Cake from "../../../assets/assetsGato/ecklear.png";
import Cake2 from "../../../assets/assetsGato/hols.png";
import cheesCake from "../../../assets/assetsGato/cheesCake.png";
import melfay from "../../../assets/assetsGato/melfay.png";
import melfaych from "../../../assets/assetsGato/melfaych.png";
import swesrol from "../../../assets/assetsGato/swesrol.png";
import swesroul from "../../../assets/assetsGato/swesroul.png";
import andeal from "../../../assets/assetsGato/andeal.png";
import despaseto from "../../../assets/assetsGato/despaseto.png";
import cheascake from "../../../assets/assetsGato/cheascake.png";
import fnwar from "../../../assets/assetsGato/fnwar.png";
import kopmos from "../../../assets/assetsGato/kopmos.png";
import molton from "../../../assets/assetsGato/molton.png";
import roya2 from "../../../assets/assetsGato/roya2.png";
import royal from "../../../assets/assetsGato/royal.png";
import spsheal from "../../../assets/assetsGato/spsheal.png";
import traiovl from "../../../assets/assetsGato/traiovl.png";
import { Link } from "react-router-dom";
const Gato = ({ id }) => {
  const prduct = [
    { id: 1, name: "اكلير", price: 35, img: Cake },
    { id: 2, name: "هولز", price: 17, img: Cake2 },
    { id: 3, name: "تشيزكيك", price: 25, img: cheesCake },
    { id: 4, name: "سويسرول ", price: 15, img: swesrol },
    { id: 5, name: "ملفاي", price: 20, img: melfay },
    { id: 6, name: "ملفاي شيكولاته", price: 20, img: melfaych },
    { id: 7, name: "سويسرول ", price: 15, img: swesroul },
    { id: 8, name: "انديال ", price: 15, img: andeal },
    { id: 9, name: "ديسباسيتو ", price: 15, img: despaseto },
    { id: 10, name: "تشيز كيك ", price: 15, img: cheascake },
    { id: 11, name: "فنوار ", price: 15, img: fnwar },
    { id: 12, name: "كوب موس ", price: 15, img: kopmos },
    { id: 13, name: "مولتون كيك ", price: 15, img: molton },
    { id: 14, name: " رويال", price: 15, img: roya2 },
    { id: 15, name: "لوكس ", price: 15, img: royal },
    { id: 16, name: "سبشيال", price: 15, img: spsheal },
    { id: 17, name: "ترايفول", price: 15, img: traiovl },
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
    <div className="border-b border-gray-300 py-20 md:py-30 mb-10 shadow-lg shadow-gray-300">
      <h1 className="text-[16px] font-bold md:text-3xl mb-5">جاتوة</h1>
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
              className="rounded-2xl group shadow-lg shadow-gray-400 pt-5 md:p-2 px-1 flex flex-col items-center justify-between md:gap-10 transition hover:shadow-lg bg-gray-100 active:scale-110  "
            >
              <div className="relative h-1/2 group-hover:shadow-2xl group-hover:shadow-gray-200 transition duration-300  shadow group w-full md:h-100  flex justify-center overflow-hidden rounded-2xl">
                <img
                  className=" w-full md:w-[80%] md:h-[90%] object-cover md:object-contain rounded-xl transition-transform  duration-300 group-active:scale-120  group-hover:scale-120 filter md:drop-shadow-2xl drop-shadow-gray-400"
                  src={item.img}
                  alt="Cake"
                  loading="lazy"
                />
              </div>

              <div
                onClick={(e) => e.stopPropagation()}
                className="w-full flex flex-col gap-4 md:gap-7 py-3 px-3"
              >
                <h2 className="text-start text-[14px] md:text-[24px] font-bold text-cyan-950 transition duration-500 cursor-default group-hover:-translate-y-5">
                  {item.name}
                </h2>
                <h2 className="text-start text-[16px] md:text-2xl font-bold text-cyan-700 transition duration-500 cursor-default group-hover:-translate-y-5">
                  {item.price} ج.م
                </h2>
                <Link
                  to={"/contact"}
                  className="w-full text-center p-3 md:text-2xl hover:bg-white hover:text-black border bg-cyan-950 text-white rounded-2xl cursor-pointer transition duration-500 group-hover:-translate-y-5"
                >
                  للطلب والاستفسار
                </Link>
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

            <img
              className=" w-60 lg:w-[90%] md:mb-7 filter transition-transform duration-300 group-hover:scale-120"
              src={selectedItem.img}
              alt="Cake"
              loading="lazy"
              decoding="async"
            />
            <div className="w-full flex flex-col gap-7 md:gap-12 py-3 px-3">
              <h2 className="text-start text-[20px] md:text-[24px] font-bold text-cyan-950">
                {selectedItem.name}
              </h2>
              <h2 className="text-start text-[20px] md:text-[20px] font-bold text-cyan-700">
                {selectedItem.price} ج.م
              </h2>
              <Link
                to={"/contact"}
                className="w-full text-center p-3 md:text-2xl hover:bg-white hover:text-black border bg-cyan-950 text-white rounded-2xl cursor-pointer transition duration-500 group-hover:-translate-y-5"
              >
                للطلب والاستفسار
              </Link>
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
export default Gato;
