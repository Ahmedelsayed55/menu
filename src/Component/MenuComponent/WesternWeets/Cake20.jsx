import { useEffect, useState } from "react";
import blackForst from "../../../assets/cake20/blackForst-removebg-preview.png";
import chocolate from "../../../assets/cake20/chocolate-removebg-preview.png";
import hacFrot from "../../../assets/cake20/hacFrot-removebg-preview.png";
import havTap from "../../../assets/cake20/havTap-removebg-preview.png";
import vadg from "../../../assets/cake20/vadg-removebg-preview.png";

const Cake20 = ({ id }) => {
  const prduct = [
    { id: 1, name: "تورته بلاك فورست (20)", price: 350, img: blackForst },
    { id: 2, name: "تورته شيكولاتة (20)", price: 350, img: chocolate },
    { id: 3, name: "تورته هاف فاكهة (20)", price: 350, img: hacFrot },
    { id: 4, name: "تورته هاف تاج (20)", price: 350, img: havTap },
    { id: 5, name: "تورته 4*4 فادجات   (20)", price: 350, img: vadg },
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
      <h1 className="text-[16px] font-bold md:text-3xl mb-5">تورته (20)</h1>
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
              className="rounded-2xl group shadow-lg shadow-gray-400 pt-5 md:p-2 px-1 flex flex-col items-center justify-between gap-10 transition hover:shadow-lg bg-gray-100 active:scale-110  "
            >
              <div className="relative group-hover:shadow group w-full md:h-100  flex justify-center overflow-hidden rounded-2xl">
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

export default Cake20;
