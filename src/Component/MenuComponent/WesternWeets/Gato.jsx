import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import logo from "../../../assets/logocart.png";
import Cake from "../../../assets/assetsGato/ecklear.jpg";
import Cake2 from "../../../assets/assetsGato/hols.jpg";
import melfay from "../../../assets/assetsGato/melfay.jpg";
import melfaych from "../../../assets/assetsGato/melfaych.jpg";
import swesrol from "../../../assets/assetsGato/swesrol.jpg";
import swesroul from "../../../assets/assetsGato/swesroul.jpg";
import andeal from "../../../assets/assetsGato/andeal.jpg";
import despaseto from "../../../assets/assetsGato/despaseto.jpg";
// صور ال تشيز
import cheesCake from "../../../assets/assetsGato/cheesCake.jpg";
import cheascake from "../../../assets/assetsGato/cheascake.jpg";
import cheascake2 from "../../../assets/assetsGato/cheascake2.jpg";
import cheascake3 from "../../../assets/assetsGato/cheascake3.jpg";
import cheascake4 from "../../../assets/assetsGato/cheascake4.jpg";
// اخر صور ال تشيز
import fnwar from "../../../assets/assetsGato/fnwar.jpg";
import kopmos from "../../../assets/assetsGato/kopmos.jpg";
import molton from "../../../assets/assetsGato/molton.jpg";
// صور الرويال
import roya1 from "../../../assets/assetsGato/roya1.jpg";
import royal from "../../../assets/assetsGato/royal.jpg";
import royal2 from "../../../assets/assetsGato/royal2.png";
import royal3 from "../../../assets/assetsGato/royal3.png";
import royal4 from "../../../assets/assetsGato/royal4.png";
import royal5 from "../../../assets/assetsGato/royal5.png";
// اخر صور الرويال
import spsheal from "../../../assets/assetsGato/spsheal.jpg";
import traiovl from "../../../assets/assetsGato/traiovl.jpg";
import superLoux from "../../../assets/assetsGato/superLoux.jpg";
import superLoux2 from "../../../assets/assetsGato/superLoux2.jpg";
import superLoux3 from "../../../assets/assetsGato/superLoux3.jpg";
import superLoux4 from "../../../assets/assetsGato/superLoux4.jpg";
import superLoux5 from "../../../assets/assetsGato/superLoux5.jpg";
import superLoux6 from "../../../assets/assetsGato/superLoux6.jpg";
import superLoux7 from "../../../assets/assetsGato/superLoux7.jpg";
import superLoux8 from "../../../assets/assetsGato/superLoux8.jpg";
import superLoux9 from "../../../assets/assetsGato/superLoux9.jpg";
import superLoux10 from "../../../assets/assetsGato/superLoux10.jpg";
// import begRoul from "../../../assets/assetsGato/begRoul.jpg";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { favorites } from "../../../store/Favorites";
const Gato = ({ id }) => {
  const { addToFavorite } = favorites();
  const prduct = [
    {
      id: 1,
      name: "اكلير",
      price: 20,
      img: Cake,
      images: [Cake],
    },
    {
      id: 2,
      name: "هولز",
      price: 20,
      img: Cake2,
      images: [Cake2],
    },
    {
      id: 3,
      name: "تشيز كيك",
      price: 30,
      img: cheesCake,
      images: [cheascake, cheesCake, cheascake2, cheascake3, cheascake4],
    },
    {
      id: 4,
      name: "سويسرول ",
      price: 20,
      img: swesrol,
      images: [swesrol, swesroul],
    },
    {
      id: 5,
      name: "ملفاي",
      price: 20,
      img: melfay,
      images: [melfay, melfaych],
    },
    { id: 8, name: "انديال ", price: 20, img: andeal },
    { id: 9, name: "ديسباسيتو ", price: 60, img: despaseto },
    { id: 11, name: "فنوار ", price: 20, img: fnwar },
    { id: 12, name: "كوب موس ", price: 20, img: kopmos },
    { id: 13, name: "مولتون كيك ", price: 35, img: molton },
    {
      id: 14,
      name: " رويال",
      price: 20,
      img: roya1,
      images: [royal, roya1, royal2, royal3, royal4, royal5],
    },

    { id: 16, name: "سبشيال", price: 35, img: spsheal },
    // { id: 16, name: "بيج رول", price: 35, img: begRoul },
    {
      id: 17,
      name: "سوبر لوكس",
      price: 16,
      img: superLoux,
      images: [
        superLoux,
        superLoux2,
        superLoux3,
        superLoux4,
        superLoux5,
        superLoux6,
        superLoux7,
        superLoux8,
        superLoux9,
        superLoux10,
      ],
    },
    { id: 18, name: "ترايفول", price: 12, img: traiovl },
    { id: 19, name: "ميني ديسباسيتو ", price: 25, img: despaseto },
    { id: 20, name: "ميني لوكس ", price: 11, img: null },
    { id: 21, name: "شيكولاته دبي صغير ", price: 30, img: null },
    { id: 22, name: "شيكولاته دبي كبيرة ", price: 40, img: null },
  ];
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
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
    <div className="border-b border-gray-300 pb-20 pt-5 md:pb-30 mb-10 shadow-lg shadow-gray-300">
      <h1 className="text-3xl font-bold md:text-5xl mb-10 md:mb-20 underline text-center">
        جاتوه
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
              className="rounded-2xl group shadow-lg shadow-gray-400 pt-5 md:p-2 px-1 flex flex-col items-center justify-between lg:gap-10 transition hover:shadow-lg bg-white  "
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
                    className="text-2xl md:text-3xl cursor-pointer hover:bg-red-500 hover:text-white p-2 md:p-3 rounded-2xl border  focus:scale-120 focus:border-amber-700"
                  >
                    <MdOutlineFavoriteBorder />
                  </button>
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    to={"/contact"}
                    className="w-full text-center py-3  text-[14px] md:text-[17px] xl:text-2xl hover:bg-white hover:text-black border bg-cyan-950 text-white rounded-2xl cursor-pointer "
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
export default Gato;
