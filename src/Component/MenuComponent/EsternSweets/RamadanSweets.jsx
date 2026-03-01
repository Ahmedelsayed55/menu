import React, { useEffect, useState } from "react";
import logo from "../../../assets/logocart.png";
import ram8 from "../../../assets/assetsRmadan/ram8.png";
import ram21 from "../../../assets/assetsRmadan/ram21.png";

// بول رمضان
import lmetRamdanThree from "../../../assets/assetsRmadan/polaLmetElfetarThreeSesson.jpeg";
import elnanosaLotos from "../../../assets/assetsRmadan/elnanosaLotos.jpeg";
import elnanosaBestatio from "../../../assets/assetsRmadan/elnanosaBestatio.jpeg";
import elnanosaNotela from "../../../assets/assetsRmadan/elnanosaNotela.jpeg";
import elnanosaMango from "../../../assets/assetsRmadan/elnanosaMango.jpeg";
import elnanosaTot from "../../../assets/assetsRmadan/elnanosaTot.jpeg";
import polaLmetElfetarFourSesson from "../../../assets/assetsRmadan/polaLmetElfetarFourSesson.jpeg";
import lmetElfetarNotelaLotos from "../../../assets/assetsRmadan/lmetElfetarNotelaLotos.jpeg";
import elbarkaMango from "../../../assets/assetsRmadan/elbarkaMango.jpeg";
import elbarkaLotos from "../../../assets/assetsRmadan/elbarkaLotos.jpeg";
import eldalo3aMango from "../../../assets/assetsRmadan/eldalo3aMango.jpeg";
import eldlo3aBestatio from "../../../assets/assetsRmadan/eldlo3aBestatio.jpeg";
import lmetElfetarMangoNotela from "../../../assets/assetsRmadan/lmetElfetarMangoNotela.jpeg";
import lmetElfetarMangoLotos from "../../../assets/assetsRmadan/lmetElfetarMangoLotos.jpeg";
import eldlo3aNotela from "../../../assets/assetsRmadan/eldlo3aNotela.jpeg";
import eldlo3aLotos from "../../../assets/assetsRmadan/eldlo3aLotos.jpeg";
import kobKonafaMango from "../../../assets/assetsRmadan/kobKonafaMango.jpeg";
import kobKonafaNotela from "../../../assets/assetsRmadan/kobKonafaNotela.jpeg";
import PolaLmetEl3elaNotela from "../../../assets/assetsRmadan/PolaLmetEl3elaNotela.jpeg";
import polaLmetEl3elaTot from "../../../assets/assetsRmadan/polaLmetEl3elaTot.jpeg";
import polaLmetEl3elaMango from "../../../assets/assetsRmadan/polaLmetEl3elaMango.jpeg";
import PolaLmetEl3elaLotos from "../../../assets/assetsRmadan/PolaLmetEl3elaLotos.jpeg";
import polaLmetEl3elaBestatio from "../../../assets/assetsRmadan/polaLmetEl3elaBestatio.jpeg";
import polaHavLmetEl3elaMangoLotos from "../../../assets/assetsRmadan/polaHavLmetEl3elaMangoLotos.jpeg";
import polaHavLmetEl3elaMangoNotela from "../../../assets/assetsRmadan/polaHavLmetEl3elaMangoNotela.jpeg";
import polaHavLmetEl3elaNotelaLotos from "../../../assets/assetsRmadan/polaHavLmetEl3elaNotelaLotos.jpeg";
import polaElkarmMangoLotos from "../../../assets/assetsRmadan/polaElkarmMangoLotos.jpeg";
import polaElkarmMangoNotela from "../../../assets/assetsRmadan/polaElkarmMangoNotela.jpeg";
import polaElkarmBestio from "../../../assets/assetsRmadan/polaElkarmBestio.jpeg";
import polaElkarmNotela from "../../../assets/assetsRmadan/polaElkarmNotela.jpeg";
import polaElkarmTot from "../../../assets/assetsRmadan/polaElkarmTot.jpeg";
import polaElkarmMango from "../../../assets/assetsRmadan/polaElkarmMango.jpeg";
import polaElkarmLotos from "../../../assets/assetsRmadan/polaElkarmLotos.jpeg";
import polaElkarmLotosNotela from "../../../assets/assetsRmadan/polaElkarmLotosNotela.jpeg";
import eldlo3aTot from "../../../assets/assetsRmadan/eldlo3aTot.jpeg";
import fanosKonafaNotelaMango from "../../../assets/assetsRmadan/fanosKonafaNotelaMango.jpeg";

import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { favorites } from "../../../store/Favorites";
const RamadanSweets = ({ id }) => {
  const { addToFavorite } = favorites();
  const prduct = [
    {
      id: 2,
      name: "فانوس كنافة مانجو و نوتيلا",
      price: 30,
      img: fanosKonafaNotelaMango,
    },
    { id: 3, name: "كوب كنافة مانجو", price: 25, img: kobKonafaMango },
    { id: 4, name: "كوب كنافة نوتيلا", price: 25, img: kobKonafaNotela },
    { id: 5, name: "بوله الننوسه(1فرد)نوتيلا", price: 35, img: elnanosaNotela },
    { id: 6, name: "بوله الننوسه(1فرد)مانجو", price: 35, img: elnanosaMango },
    { id: 7, name: "بوله الننوسه(1فرد)لوتس", price: 35, img: elnanosaLotos },
    { id: 8, name: "بوله الننوسه(1فرد)توت", price: 35, img: elnanosaTot },
    {
      id: 9,
      name: "بوله الننوسه(1فرد)بستاشيو",
      price: 50,
      img: elnanosaBestatio,
    },
    { id: 10, name: "بوله الدلوعه(2فرد)مانجو", price: 70, img: eldalo3aMango },
    { id: 11, name: "بوله الدلوعه(2فرد)نوتيلا", price: 70, img: eldlo3aNotela },
    { id: 12, name: "بوله الدلوعه(2فرد)لوتس", price: 70, img: eldlo3aLotos },
    { id: 13, name: "بوله الدلوعه(2فرد)توت", price: 70, img: eldlo3aTot },
    {
      id: 14,
      name: "بوله الدلوعه(2فرد)بستاشيو",
      price: 90,
      img: eldlo3aBestatio,
    },
    { id: 15, name: "بوله الكرم(4فرد)مانجو", price: 100, img: polaElkarmMango },
    {
      id: 16,
      name: "بوله الكرم(4فرد)نوتيلا",
      price: 100,
      img: polaElkarmNotela,
    },
    { id: 17, name: "بوله الكرم(4فرد)لوتس", price: 100, img: polaElkarmLotos },
    { id: 18, name: "بوله الكرم(4فرد)توت", price: 100, img: polaElkarmTot },
    {
      id: 19,
      name: "بوله الكرم(4فرد)بستاشيو",
      price: 145,
      img: polaElkarmBestio,
    },
    {
      id: 20,
      name: "بوله الكرم هاف(4فرد)مانجو*نوتيلا",
      price: 100,
      img: polaElkarmMangoNotela,
    },
    {
      id: 21,
      name: "بوله الكرم هاف(4فرد) لوتس*نوتيلا",
      price: 100,
      img: polaElkarmLotosNotela,
    },
    {
      id: 22,
      name: "بوله الكرم هاف(4فرد) مانجو*لوتس",
      price: 100,
      img: polaElkarmMangoLotos,
    },
    { id: 23, name: "بوله الكرم هاف(4فرد) بستاشيو", price: 145, img: "" },
    {
      id: 24,
      name: "بوله لمة العيله(6فرد) مانجو",
      price: 150,
      img: polaLmetEl3elaMango,
    },
    {
      id: 25,
      name: "بوله لمة العيله(6فرد) نوتيلا",
      price: 150,
      img: PolaLmetEl3elaNotela,
    },
    {
      id: 26,
      name: "بوله لمة العيله(6فرد) لوتس",
      price: 150,
      img: PolaLmetEl3elaLotos,
    },
    {
      id: 27,
      name: "بوله لمة العيله(6فرد) توت",
      price: 150,
      img: polaLmetEl3elaTot,
    },
    {
      id: 28,
      name: "بوله لمة العيله(6فرد) بستاشيو",
      price: 175,
      img: polaLmetEl3elaBestatio,
    },
    {
      id: 29,
      name: "بوله لمة العيله هاف(6فرد) مانجو*نوتيلا",
      price: 150,
      img: polaHavLmetEl3elaMangoNotela,
    },
    {
      id: 30,
      name: "بوله لمة العيله هاف(6فرد) لوتس*نوتيلا",
      price: 150,
      img: polaHavLmetEl3elaNotelaLotos,
    },
    {
      id: 31,
      name: "بوله لمة العيله هاف(6فرد) مانجو*لوتس",
      price: 150,
      img: polaHavLmetEl3elaMangoLotos,
    },
    {
      id: 32,
      name: "بوله لمة العيله هاف(6فرد)بستاشيو",
      price: 175,
      img: "",
    },
    {
      id: 33,
      name: "بوله لمة الفطار هاف(8فرد)مانجو*نوتيلا",
      price: 175,
      img: lmetElfetarMangoNotela,
    },
    {
      id: 34,
      name: "بوله لمة الفطار هاف(8فرد)لوتس*نوتيلا",
      price: 175,
      img: lmetElfetarNotelaLotos,
    },
    {
      id: 35,
      name: "بوله لمة الفطار هاف(8فرد)مانجو*لوتس",
      price: 175,
      img: lmetElfetarMangoLotos,
    },
    {
      id: 36,
      name: "بوله لمة الفطار فورسيزون(8فرد)مانجو*نوتيلا*لوتس*توت",
      price: 175,
      img: polaLmetElfetarFourSesson,
    },
    {
      id: 37,
      name: "بوله لمة الفطار ثري سيزون(8فرد)مانجو*نوتيلا*لوتس",
      price: 175,
      img: lmetRamdanThree,
    },
    { id: 38, name: "بوله البركة(10فرد)مانجو", price: 200, img: elbarkaMango },
    { id: 39, name: "بوله البركة(10فرد)لوتس", price: 200, img: elbarkaLotos },
    { id: 40, name: "بوله البركة(10فرد)نوتيلا", price: 200, img: "" },
    { id: 41, name: "فورمة بسبوسه شاميه مكسرات صغيرة", price: 125, img: "" },
    { id: 42, name: "فورمة كنافه مخصوص صغيرة", price: 125, img: "" },
    { id: 43, name: "فورمة كنافة كريمة", price: 125, img: "" },
    { id: 44, name: "فورمه كنافة مانجو", price: 150, img: "" },
    { id: 45, name: "فورمة كنافه تمريه", price: 150, img: ram21 },
    { id: 46, name: "فورمه كنافة نوتيلا", price: 175, img: "" },
    { id: 47, name: "فورمه كنافة فواكه", price: 150, img: ram8 },
    { id: 48, name: "فورمه كنافه عثمالية", price: 150, img: "" },
    { id: 49, name: "كنافه كورنيه قشطه", price: 180, img: "" },
    { id: 50, name: "فطيرة سوري", price: 200, img: "" },
    { id: 51, name: "اصابع زينب", price: 90, img: "" },
    { id: 52, name: "زلابيه", price: 95, img: "" },
    { id: 53, name: "بلح شام ساده", price: 100, img: "" },
    { id: 54, name: "بلح الشام محشي", price: 110, img: "" },
    { id: 55, name: "بلح الشام محشي سيواريه", price: 110, img: "" },
    { id: 56, name: "قطايف مكسرات", price: 120, img: "" },
    { id: 57, name: "قطايف كريمة", price: 120, img: "" },
    { id: 58, name: "علبة زلابيه", price: 30, img: "" },
    { id: 59, name: "طاجن ام علي", price: 30, img: "" },
    { id: 60, name: "كنافه كورنية نوتيلا", price: 180, img: "" },
    { id: 61, name: "بلح الشام محشي نوتيلا", price: 125, img: "" },
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
        رمضانيات
      </h1>
      <div
        className=" grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-2 md:gap-10"
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
              className="rounded-2xl group shadow-lg shadow-gray-400 pt-5 md:p-2 px-1 flex flex-col items-center justify-between md:gap-5 transition hover:shadow-lg bg-gray-100   "
            >
              <div className="relative h-1/2 group-hover:shadow-2xl group-hover:shadow-gray-200  transition duration-300  shadow group w-full md:h-70 lg:h-100 flex justify-center overflow-hidden rounded-2xl">
                {/* اللودر */}
                {!loadedImages[item.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-600 border-t-transparent"></div>
                  </div>
                )}

                {/* الصورة */}
                <img
                  src={item.img ? item.img : logo}
                  alt="Cake"
                  loading="lazy"
                  onLoad={() =>
                    setLoadedImages((prev) => ({ ...prev, [item.id]: true }))
                  }
                  className={`w-full md:w-[80%] md:h-[90%] object-contain rounded-xl transition-all duration-500
                      ${loadedImages[item.id] ? "opacity-100 blur-0" : "opacity-0 blur-sm"}
                   `}
                />
              </div>

              <div className="w-full flex flex-col gap-4 md:gap-7 py-3 px-3">
                <h2 className="text-start text-[14px] md:text-[18px] lg:text-2xl font-bold text-cyan-950 transition duration-500 cursor-default group-hover:-translate-y-5">
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
                    className="text-[16px] md:text-[20px] cursor-pointer hover:bg-red-500 hover:text-white p-2 md:p-3 rounded border  focus:scale-120 focus:border-amber-700"
                  >
                    <MdOutlineFavoriteBorder />
                  </button>
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    to={"/contact"}
                    className="w-full text-center py-3  text-[16px] md:text-[20px] hover:bg-white hover:text-black border bg-cyan-950 text-white rounded-2xl cursor-pointer "
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
export default RamadanSweets;
