
import Cake from "../../assets/snecars26.png"
const Cake26 = ({id}) => {
  const prduct = [
    {id:1, name: "تورته سنيكرز مقاس(26)", price: 350, img: Cake },
    {id:1, name: "تورته سنيكرز مقاس(26)", price: 350, img: Cake },
    {id:1, name: "تورته سنيكرز مقاس(26)", price: 350, img: Cake },
    {id:1, name: "تورته سنيكرز مقاس(26)", price: 350, img: Cake },
    {id:1, name: "تورته سنيكرز مقاس(26)", price: 350, img: Cake },
    {id:1, name: "تورته سنيكرز مقاس(26)", price: 350, img: Cake },
    {id:1, name: "تورته سنيكرز مقاس(26)", price: 350, img: Cake },
    {id:1, name: "تورته سنيكرز مقاس(26)", price: 350, img: Cake },
    {id:1, name: "تورته سنيكرز مقاس(26)", price: 350, img: Cake },
    {id:1, name: "تورته سنيكرز مقاس(26)", price: 350, img: Cake },
    {id:1, name: "تورته سنيكرز مقاس(26)", price: 350, img: Cake },
    {id:1, name: "تورته سنيكرز مقاس(26)", price: 350, img: Cake },
    {id:1, name: "تورته سنيكرز مقاس(26)", price: 350, img: Cake },
    {id:1, name: "تورته سنيكرز مقاس(26)", price: 350, img: Cake },
    {id:1, name: "تورته سنيكرز مقاس(26)", price: 350, img: Cake },
    {id:1, name: "تورته سنيكرز مقاس(26)", price: 350, img: Cake },

  ]
  return (
    <div>
      <h1 className="text-2xl mb-5">تورته مقاس (26)</h1>
 <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5' id={id}>
      
     {prduct.map((item)=>{
      return(
        <div key={item.id} className="rounded-2xl shadow-yellow-500 shadow-sm p-5 flex flex-col gap-3 items-center transition hover:scale-110">
          <img className="w-3/4" src={item.img} alt="Cake" />
          <h2 className="text-center">{item.name}</h2>
          <h2>{item.price} ج.م</h2>
        </div>
      )
     })}
    </div>
    </div>
   
  )
}

export default Cake26
