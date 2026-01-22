import { FaStar } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import { favorites } from "../store/Favorites";
import { useState } from "react";
import img from "../assets/logo.png";
import { Link } from "react-router-dom";
const Favorites = () => {
  const [search, setSearch] = useState("");
  const { favoritsItem, removeFromFavorites } = favorites();
  const filteredFavorites = favoritsItem.filter((item) => {
    return (
      item.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.price?.toString().includes(search)
    );
  });
  return (
    <div className="w-full  py-30 px-5 bg-white  ">
      <div className=" max-w-[1420px] mx-auto">
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
          <div className="flex gap-5 items-center ">
            <FaStar className="text-yellow-500 text-4xl" />
            <h1 className="text-2xl md:text-5xl font-bold">المفضله</h1>
          </div>
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="بحث"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" w-full p-2 border focus:border-blue-200 outline-0 shadow-2xl rounded-2xl"
            />
          </div>
        </div>

        {filteredFavorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 py-40">
            {filteredFavorites.map((item) => (
              <div
                key={item.id}
                className="shadow-md flex flex-col gap-7 rounded p-4 bg-gray-100 "
              >
                <button
                  onClick={() => removeFromFavorites(item)}
                  className="px-3 py-1 text-red-800 cursor-pointer rounded text-4xl"
                >
                  <MdFavorite />
                </button>

                <div className="rating flex justify-center">
                  <input
                    type="radio"
                    name={`rating-${item.name}`}
                    className="mask mask-star-2 bg-orange-400 "
                    aria-label="1 star"
                  />
                  <input
                    type="radio"
                    name={`rating-${item.name}`}
                    className="mask mask-star-2 bg-orange-400 "
                    aria-label="2 star"
                  />
                  <input
                    type="radio"
                    name={`rating-${item.name}`}
                    className="mask mask-star-2 bg-orange-400 "
                    aria-label="3 star"
                  />
                  <input
                    type="radio"
                    name={`rating-${item.name}`}
                    className="mask mask-star-2 bg-orange-400 "
                    aria-label="4 star"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name={`rating-${item.name}`}
                    className="mask mask-star-2 bg-orange-400 "
                    aria-label="5 star"
                  />
                </div>
                <div className=" flex flex-col gap-5 mt-3">
                  <h3 className="font-semibold text-2xl text-cyan-950 ">
                    {item.name}
                  </h3>
                  <h3 className="font-semibold text-[20px] text-cyan-700">
                    {item.price} ج.م{" "}
                  </h3>
                </div>
                <div className="w-full h-44 overflow-hidden rounded-md">
                  <img
                    src={item.img ? item.img : img}
                    alt="product"
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <Link
                  onClick={(e) => e.stopPropagation()}
                  to={"/contact"}
                  className="w-full text-center py-3  text-[14px] md:text-[17px] xl:text-2xl hover:bg-white hover:text-black border bg-cyan-950 text-white rounded-2xl cursor-pointer "
                >
                  للطلب والاستفسار
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[60vh] flex justify-center items-center">
            <p className="  text-3xl ">صفحه المفضله لديك فارغهه :(</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
