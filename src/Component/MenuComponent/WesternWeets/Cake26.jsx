import havGlaxyChocolata from "../../../assets/assets26/havGlaxyChocolata.png";
import Cake1 from "../../../assets/assets26/a1.png";
import Cake2 from "../../../assets/assets26/a2.png";
import Cake3 from "../../../assets/assets26/a3.png";
import Cake4 from "../../../assets/assets26/a4.png";
import Cake7 from "../../../assets/assets26/a7.png";
import notelaOrio from "../../../assets/assets26/a10.png";
import Cake11 from "../../../assets/assets26/a11.png";
import chocolate from "../../../assets/assets26/a12.png";
import havTag from "../../../assets/assets26/a14.png";
import Cake15 from "../../../assets/assets26/a15.png";
import Cake16 from "../../../assets/assets26/a16.png";
import Cake17 from "../../../assets/assets26/a17.png";
import snecars from "../../../assets/assets26/a18.png";
import karamilBlack from "../../../assets/assets26/karamilBlack-removebg-preview.png";
import whiteMillk from "../../../assets/assets26/whiteMillk-removebg-preview.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { favorites } from "../../../store/Favorites";
const Cake26 = ({ id }) => {
  const { addToFavorite } = favorites();
  const prduct = [
    {
      id: 1,
      name: "تورته هاف جلاكسي شيكولاته ",
      price: 350,
      img: havGlaxyChocolata,
    },
    { id: 2, name: "تورته فلاور ", price: 350, img: Cake1 },
    { id: 3, name: "تورته هاف لوتس & شيكولاته ", price: 350, img: Cake2 },
    { id: 4, name: "تورته جلاكسي ", price: 350, img: Cake3 },
    { id: 5, name: "تورته نوتيلا فراوله ", price: 350, img: Cake4 },
    { id: 6, name: "تورته هاف كارميل & شيكولاته ", price: 350, img: Cake7 },
    { id: 7, name: "تورته نوتيلا اوريو ", price: 350, img: notelaOrio },
    { id: 8, name: "تورته ايت سيزون اسبونج ", price: 350, img: Cake11 },
    { id: 9, name: "تورته شيكولاته ", price: 350, img: chocolate },
    { id: 10, name: "تورته هاف تاج ", price: 350, img: havTag },
    { id: 11, name: "تورته فلوتس ", price: 350, img: Cake15 },
    { id: 12, name: "تورته هاف جلاكسي & فاكهة ", price: 350, img: Cake16 },
    { id: 13, name: "تورته ايت سيزون فادج ", price: 350, img: Cake17 },
    { id: 14, name: "تورته سنيكرز ", price: 350, img: snecars },
    {
      id: 15,
      name: "تورته هاف كارميل & بلاك فورست",
      price: 350,
      img: karamilBlack,
    },
    { id: 16, name: "تورته وايت فورست & حليب", price: 350, img: whiteMillk },
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
      <h1 className="text-[16px] font-bold md:text-3xl mb-5">تورت ادوار</h1>
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

              <div className="w-full flex flex-col gap-4 md:gap-7 py-3 px-3">
                <h2 className="text-start text-[14px] md:text-[24px] font-bold text-cyan-950 transition duration-500 cursor-default group-hover:-translate-y-5">
                  {item.name}
                </h2>
                <h2 className="text-start text-[16px] md:text-2xl font-bold text-cyan-700 transition duration-500 cursor-default group-hover:-translate-y-5">
                  {item.price} ج.م
                </h2>
                <div className="flex gap-2 transition duration-500 group-hover:-translate-y-5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(), addToFavorite(item);
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
              <div className="flex gap-2 transition duration-500 group-hover:-translate-y-5">
                <button
                  onClick={(e) => {
                    e.stopPropagation(), addToFavorite(selectedItem);
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

export default Cake26;
