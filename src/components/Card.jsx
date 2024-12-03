import { Link } from "react-router-dom"

function Card({ items }) {

  const renderStars = (rate) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= Math.floor(rate) ? "filled" : ""}`}
          style={
            i === Math.ceil(rate) && rate % 1 !== 0
              ? {
                  background: `linear-gradient(to right, #f5c518 ${
                    (rate % 1) * 100
                  }%, #ccc 0%)`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }
              : {}
          }
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
      <Link
        to={`/product/${items.id}`}
        key={items.id}
        className="min-w-52 w-52 h-[21.5rem] md:min-w-56 md:w-56 md:h-96 m-4 lg:m-7 flex items-center justify-center overflow-hidden shadow-md rounded-lg hover:scale-105 hover:shadow-slate-500 bg-white"
      >
        <div className="relative flex w-full h-auto flex-col overflow-hidden rounded-lg bg-white">
          <img
            src={items.image}
            alt={items.title}
            className="object-contain mx-auto h-56 md:h-60 object-center w-full border-b-[1px]"
          />
          <div className="mt-1 px-2 pb-1 md:mt-2 md:px-4 md:pb-2 w-full ellipsis2">
            <span className="text-base md:text-lg tracking-tight text-slate-900">
              {items.title}
            </span>
          </div>
          <div className="mt-0 mb-2 px-2 md:mt-2 md:mb-4 md:px-4 flex flex-col items-start justify-between">
            <span className="text-2xl md:text-3xl font-semibold text-slate-900">
              ${items.price}
            </span>
            <div className="flex items-center text-sm md:text-base">
              {renderStars( items.rating.rate )}
              <span className="text-gray-600 text-sm md:text-base">
                ({ items.rating.rate })
              </span>
            </div>
          </div>
        </div>
      </Link>
  )
}

export default Card
