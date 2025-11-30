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
      <h1 className="text-[16px] md:text-2xl mb-5">تورته مقاس (26)</h1>
 <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5' id={id}>
      
     {prduct.map((item)=>{
      return(
        <div key={item.id} className="rounded-2xl shadow-blue-200 shadow-sm p-5 flex flex-col gap-3 items-center transition hover:scale-110 bg-gray-100 focus:scale-110">
          <img className="w-3/4 mb-3" src={item.img} alt="Cake" />
          <h2 className="text-center">{item.name}</h2>
          <h2 className="text-center text-yellow-700">{item.price} ج.م</h2>
        </div>
      )
     })}
    </div>
    </div>
  )
}
