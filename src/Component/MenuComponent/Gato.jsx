import React from 'react'
import Cake from "../../assets/ecklear.png"
import Cake2 from "../../assets/hols.png"
export const Gato = ({id}) => {
      const prduct = [
        {id:1, name: "اكلير", price: 35, img: Cake },
        {id:2, name: "هولز", price: 35, img: Cake2 },
        {id:3, name: "اكلير", price: 35, img: Cake },
        {id:4, name: "هولز", price: 35, img: Cake2 },
        {id:5, name: "اكلير", price: 35, img: Cake },
        {id:6, name: "هولز", price: 35, img: Cake2 },
        {id:7, name: "اكلير", price: 35, img: Cake },
        {id:8, name: "هولز", price: 35, img: Cake2 },
        {id:9, name: "اكلير", price: 35, img: Cake },
        {id:10, name: "هولز", price: 35, img: Cake2 },
        {id:11, name: "اكلير", price: 35, img: Cake },
        {id:12, name: "هولز", price: 35, img: Cake2 },
        {id:13, name: "اكلير", price: 35, img: Cake },
        {id:24, name: "هولز", price: 35, img: Cake2 },
     
    
      ]
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
              className="rounded-sm h-70 md:h-120 shadow-2xl shadow-gray-400 pt-10 md:pt-15 px-1 flex flex-col items-center justify-between transition hover:scale-105 bg-gray-100 active:scale-110 focus:scale-110"
            >
              <img className=" w-full md:w-60  md:mb-7 transition filter hover:drop-shadow-[0_10px_5px_rgba(102,231,239,0.2)]" src={item.img} alt="Cake" />
              <div className="w-full flex flex-col gap-7 md:gap-15 py-3 px-3">
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
  )
}
