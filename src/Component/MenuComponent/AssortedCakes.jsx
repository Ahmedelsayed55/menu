import React from 'react'
import Cake from "../../assets/cake.png";
export const AssortedCakes = ({id}) => {
      const prduct = [
        { id: 1, name: "تورته فلاور (20)", price: 350, img: Cake },
        { id: 2, name: "تورته فلاور (20)", price: 350, img: Cake },
        { id: 3, name: "تورته فلاور (20)", price: 350, img: Cake },
        { id: 4, name: "تورته فلاور (20)", price: 350, img: Cake },
        { id: 5, name: "تورته فلاور (20)", price: 350, img: Cake },
        { id: 6, name: "تورته فلاور (20)", price: 350, img: Cake },
        { id: 7, name: "تورته فلاور (20)", price: 350, img: Cake },
        { id: 8, name: "تورته فلاور (20)", price: 350, img: Cake },
        { id: 9, name: "تورته فلاور (20)", price: 350, img: Cake },
        { id: 10, name: "تورته فلاور (20)", price: 350, img: Cake },
        { id: 11, name: "تورته فلاور (20)", price: 350, img: Cake },
        { id: 12, name: "تورته فلاور (20)", price: 350, img: Cake },
        { id: 13, name: "تورته فلاور (20)", price: 350, img: Cake },
        { id: 14, name: "تورته فلاور (20)", price: 350, img: Cake },
        { id: 15, name: "تورته فلاور (20)", price: 350, img: Cake },
        { id: 16, name: "تورته فلاور (20)", price: 350, img: Cake },
      ];
  return (
  <div>
      <h1 className="text-[16px] font-bold md:text-2xl mb-5">تورته مقاس (26)</h1>
      <div
        className=" grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-5"
        id={id}
      >
        {prduct.map((item) => {
          return (
            <div
              key={item.id}
              className="rounded-sm shadow-2xl shadow-gray-400 pt-15 px-5 flex flex-col gap-5 items-center transition hover:scale-105 bg-gray-100 active:scale-110 focus:scale-110"
            >
              <img className="w-[85%] mb-10 transition filter hover:drop-shadow-[0_10px_5px_rgba(102,231,239,0.2)]" src={item.img} alt="Cake" />
              <div className="w-full flex flex-col gap-5 p-3">
                <h2 className="text-start text-[20px] font-bold">
                  {item.name}
                </h2>
                <h2 className="text-start text-[18px] font-bold text-yellow-700">
                  {item.price} ج.م
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
