import React, { useEffect, useState } from "react";
import konafa3othmanly from "../../../assets/konafa/konafa3othmanly.png";
import konafaKrema from "../../../assets/konafa/konafaKrema.png";
import konafaN from "../../../assets/konafa/konafaN.png";
import medl3a1 from "../../../assets/konafa/medl3a1-removebg-preview.png";
import medl3a2 from "../../../assets/konafa/medl3a2-removebg-preview.png";
import medl3a3 from "../../../assets/konafa/medl3a3-removebg-preview.png";
import konafa3osmanle from "../../../assets/konafa/konafa3osmanle.png";
import konafamanga from "../../../assets/konafa/konafamanga.png";
import makhsos from "../../../assets/konafa/makhsos.png";
import rafaielo from "../../../assets/konafa/rafaielo.png";
import shhrzad from "../../../assets/konafa/shhrzad.png";
import tamrea from "../../../assets/konafa/tamrea.png";
import { Link } from "react-router-dom";
const Konafa = ({ id }) => {
  const prduct = [
    { id: 1, name: " كنافة عثمانلي", price: 35, img: konafa3othmanly },
    { id: 2, name: "كنافة كريمة", price: 35, img: konafaKrema },
    { id: 3, name: " كنافة نوتيلا", price: 35, img: konafaN },
    { id: 4, name: " مدلعه", price: 35, img: medl3a1 },
    { id: 5, name: "مدلعة", price: 35, img: medl3a2 },
    { id: 6, name: "مدلعه", price: 35, img: medl3a3 },
    { id: 7, name: "كنافه عثمانلي", price: 35, img: konafa3osmanle },
    { id: 8, name: "كنافه مانجو", price: 35, img: konafamanga },
    { id: 9, name: "كنافه مخصوص", price: 35, img: makhsos },
    { id: 10, name: "كنافه رافيلو", price: 35, img: rafaielo },
    { id: 11, name: "كنافه شهرزاد", price: 35, img: shhrzad },
    { id: 12, name: "كنافه تمريه ", price: 35, img: tamrea },
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
      <h1 className="text-[16px] font-bold md:text-3xl mb-5"> كنافات</h1>
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
              <div className="relative group-hover:shadow shadow group w-full md:h-100  flex justify-center overflow-hidden rounded-2xl">
                <img
                  className=" w-full md:w-[90%] md:h-[90%] object-cover md:object-contain rounded-xl transition-transform  duration-300 group-active:scale-120  group-hover:scale-120"
                  src={item.img}
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
export default Konafa;
