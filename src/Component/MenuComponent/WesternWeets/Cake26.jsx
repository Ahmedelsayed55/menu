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
import flower from "../../../assets/assets26/flowe.png";
import karamilBlack from "../../../assets/assets26/karamilBlack-removebg-preview.png";
import whiteMillk from "../../../assets/assets26/whiteMillk-removebg-preview.png";
import { useEffect, useState } from "react";
const Cake26 = ({ id }) => {
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
    { id: 6, name: "تورته نوتيلا اوريو ", price: 350, img: notelaOrio },
    { id: 7, name: "تورته ايت سيزون اسبونج ", price: 350, img: Cake11 },
    { id: 7, name: "تورته شيكولاته ", price: 350, img: chocolate },
    { id: 7, name: "تورته هاف تاج ", price: 350, img: havTag },
    { id: 7, name: "تورته فلوتس ", price: 350, img: Cake15 },
    { id: 8, name: "تورته هاف جلاكسي & فاكهة ", price: 350, img: Cake16 },
    { id: 9, name: "تورته ايت سيزون فادج ", price: 350, img: Cake17 },
    { id: 9, name: "تورته سنيكرز ", price: 350, img: snecars },
    { id: 10, name: "تورته فلاور", price: 350, img: flower },
    {
      id: 11,
      name: "تورته هاف كارميل & بلاك فورست",
      price: 350,
      img: karamilBlack,
    },
    { id: 12, name: "تورته وايت فورست & حليب", price: 350, img: whiteMillk },
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
      <h1 className="text-[16px] font-bold md:text-2xl mb-5">
        تورته مقاس (26)
      </h1>
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
              data-wow-offset="200"
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
                <h2 className="text-start text-[12px] md:text-[20px] font-bold text-cyan-700">
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4  ">
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

export default Cake26;
