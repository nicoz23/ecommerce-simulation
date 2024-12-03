import Card from "./Card"
import { useFetch } from "../hooks/useFetch";

function CardCarrousel({ urlFetch }) {
  const { data } = useFetch(urlFetch);

  return (
    <>
      <div className="
      relative h-fit w-auto flex flex-row overflow-x-auto mx-auto justify-start
      ">
        {data?.map((items) => (
          <Card items={items} key={items.id} />
        ))}
      </div>
    </>
  )
}

export default CardCarrousel
