import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import blackForst from "../../../assets/cake20/blackForst-removebg-preview.jpg";
import chocolate from "../../../assets/cake20/chocolate-removebg-preview.jpg";
import hacFrot from "../../../assets/cake20/hacFrot-removebg-preview.jpg";
import havTap from "../../../assets/cake20/havTap-removebg-preview.jpg";
import vadg from "../../../assets/cake20/vadg-removebg-preview.jpg";
import notela from "../../../assets/cake20/notela.jpg";
import whitefourest from "../../../assets/cake20/whitefourest.jpg";
import flawer from "../../../assets/cake20/20flawer.png";
import flawer2 from "../../../assets/cake20/20flawer2.png";
import flawer3 from "../../../assets/cake20/20flawer3.png";
import flawer4 from "../../../assets/cake20/20flawer4.png";
import flawer5 from "../../../assets/cake20/20flawer5.png";
import logo from "../../../assets/logocart.png";
import { Link } from "react-router-dom";
import { favorites } from "../../../store/Favorites";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Cake20 = ({ id }) => {
  const { addToFavorite } = favorites();
  const prduct = [
    {
      id: 1,
      name: "تورته بلاك فورست ",
      price: 250,
      img: blackForst,
      images: [blackForst],
    },
    {
      id: 2,
      name: "تورته شيكولاتة ",
      price: 250,
      img: chocolate,
      images: [chocolate],
    },
    { id: 3, name: "تورته هاف فاكهة ", price: 250, img: hacFrot },
    { id: 4, name: "تورته هاف تاج ", price: 250, img: havTap },
    { id: 5, name: "تورته 4*4 فادجات   ", price: 300, img: vadg },
    {
      id: 6,
      name: "تورته فلاور",
      price: 0,
      img: flawer,
      images: [flawer, flawer2, flawer3, flawer4, flawer5],
    },
    { id: 7, name: "تورته نوتيلا", price: 250, img: notela },
    { id: 8, name: "تورته وايت فورست", price: 250, img: whitefourest },
    { id: 9, name: "تورته هاف بدون ", price: 250, img: null },
    { id: 10, name: "تورته كلها فاكهة ", price: 250, img: null },
    { id: 11, name: "تورته ريد فالفيت ", price: 250, img: null },
  ];
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
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
        تورته 20سم
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
              className="rounded-2xl group shadow-lg shadow-gray-400 pt-5 md:p-2 px-1 flex flex-col items-center justify-between md:gap-10 transition hover:shadow-lg bg-white "
            >
              <div className="relative h-1/2 group-hover:shadow-2xl group-hover:shadow-gray-200 transition duration-300 shadow group w-full xl:h-100 flex justify-center overflow-hidden rounded-2xl">
                {!loadedImages[item.id] && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-200 animate-pulse">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-600 border-t-transparent"></div>
                  </div>
                )}

                <Swiper
                  modules={[Autoplay, Pagination]}
                  slidesPerView={1}
                  loop={(item.images || [item.img || logo]).length > 1}
                  speed={500}
                  autoplay={
                    (item.images || [item.img || logo]).length > 1
                      ? {
                          delay: 2500,
                          disableOnInteraction: false,
                        }
                      : false
                  }
                  pagination={
                    (item.images || [item.img || logo]).length > 1
                      ? { clickable: true }
                      : false
                  }
                  className="w-full"
                >
                  {(item.images || [item.img || logo]).map((image, index) => (
                    <SwiperSlide
                      key={index}
                      className="!flex !justify-center !items-center"
                    >
                      <img
                        src={image}
                        alt={item.name}
                        loading="lazy"
                        draggable={false}
                        onLoad={() =>
                          setLoadedImages((prev) => ({
                            ...prev,
                            [item.id]: true,
                          }))
                        }
                        className={`w-full md:w-[80%] md:h-[90%] object-contain rounded-xl transition-all duration-500 ${
                          loadedImages[item.id]
                            ? "opacity-100 blur-0"
                            : "opacity-0 blur-sm"
                        }`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
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
            className="bg-white rounded px-5 pt-20 pb-5 group overflow-hidden  lg:w-md shadow-lg shadow-cyan-800 flex flex-col gap-10 items-center justify-between relative"
          >
            <button
              className="absolute px-3 py-2 btn flex items-center justify-center top-2 right-2 text-2xl cursor-pointer bg-cyan-800 text-white  rounded-box shadow shadow-cyan-500"
              onClick={() => setOpen(false)}
            >
              ✖
            </button>

            <div className="relative w-full h-60 md:h-96 overflow-hidden rounded-2xl">
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop={
                  (selectedItem.images || [selectedItem.img || logo]).length > 1
                }
                speed={500}
                autoplay={
                  (selectedItem.images || [selectedItem.img || logo]).length > 1
                    ? {
                        delay: 2500,
                        disableOnInteraction: false,
                      }
                    : false
                }
                pagination={
                  (selectedItem.images || [selectedItem.img || logo]).length > 1
                    ? { clickable: true }
                    : false
                }
                observer={true}
                observeParents={true}
                className="!w-full !h-full"
              >
                {(selectedItem.images || [selectedItem.img || logo]).map(
                  (image, index) => (
                    <SwiperSlide
                      key={index}
                      className="!flex !w-full !h-full !items-center !justify-center"
                    >
                      <img
                        src={image}
                        alt={selectedItem.name}
                        draggable={false}
                        className="block w-[90%] max-h-[90%] object-contain"
                      />
                    </SwiperSlide>
                  ),
                )}
              </Swiper>
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

export default Cake20;
