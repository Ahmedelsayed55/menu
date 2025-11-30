import Cake1 from "../../assets/assets26/a1.png";
import Cake2 from "../../assets/assets26/a2.png";
import Cake3 from "../../assets/assets26/a3.png";
import Cake4 from "../../assets/assets26/a4.png";
import Cake5 from "../../assets/assets26/a5.png";
import Cake6 from "../../assets/assets26/a6.png";
import Cake7 from "../../assets/assets26/a7.png";
import Cake8 from "../../assets/assets26/a8.png";
import Cake9 from "../../assets/assets26/a9.png";
import Cake10 from "../../assets/assets26/a10.png";
import Cake11 from "../../assets/assets26/a11.png";
import Cake12 from "../../assets/assets26/a12.png";
import Cake14 from "../../assets/assets26/a14.png";
import Cake15 from "../../assets/assets26/a15.png";
import Cake16 from "../../assets/assets26/a16.png";
import Cake17 from "../../assets/assets26/a17.png";
import Cake18 from "../../assets/assets26/a18.png";
const Cake26 = ({ id }) => {
  const prduct = [
      { id: 1, name: "تورته فلاور ", price: 350, img: Cake1 },
    { id: 2, name: "تورته لوتس شيكولاته ", price: 350, img: Cake2 },
    { id: 3, name: "تورته جلاكسي ", price: 350, img: Cake3 },
    { id: 4, name: "تورته نوتيلا فراوله ", price: 350, img: Cake4 },
    { id: 5, name: "تورته قلب شيكولاته ", price: 350, img: Cake5 },
    { id: 6, name: "تورته قلب بلاك فورست ", price: 350, img: Cake6 },
    { id: 7, name: "تورته هاف كارميل شيكولاته ", price: 350, img: Cake7 },
    { id: 8, name: "تورته قلب فاكهة  ", price: 350, img: Cake8 },
    { id: 9, name: "تورته قلب ريد فاليفت ", price: 350, img: Cake9 },
    { id: 10, name: "تورته سنيكرز ", price: 350, img: Cake10 },
    { id: 11, name: "تورته ايت سيزون ", price: 350, img: Cake11 },
    { id: 12, name: "تورته سنيكرز ", price: 350, img: Cake12 },
    { id: 14, name: "تورته سنيكرز ", price: 350, img: Cake14 },
    { id: 15, name: "تورته سنيكرز ", price: 350, img: Cake15 },
    { id: 16, name: "تورته هاف جلاكسي & فاكهة ", price: 350, img: Cake16 },
    { id: 17, name: "تورته سنيكرز ", price: 350, img: Cake17 },
    { id: 18, name: "تورته سنيكرز ", price: 350, img: Cake18 },
  ];
  return (
    <div>
      <h1 className="text-[16px] font-bold md:text-2xl mb-5">تورته مقاس (26)</h1>
      <div
        className=" grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-2 md:gap-5"
        id={id}
      >
        {prduct.map((item) => {
          return (
            <div
              key={item.id}
              className="rounded h-70 md:h-120 shadow-2xl shadow-gray-400 pt-10 md:pt-15 px-1 flex flex-col items-center justify-between transition hover:scale-105 bg-gray-100 active:scale-110 focus:scale-110"
            >
              <img className=" w-full md:w-60  md:mb-7 transition filter hover:drop-shadow-[0_10px_5px_rgba(102,231,239,0.2)]" src={item.img} alt="Cake" />
              <div className="w-full flex flex-col gap-7 md:gap-12 py-3 px-3">
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
    </div>
  );
};

export default Cake26;
