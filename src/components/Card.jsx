import { useNavigate } from "react-router-dom";

function Card({
  id,
  title,
  description,
  image,
  mainLocation,
  subLocation,
  price,
  email,
  borrowEmail,
  status,
  clickable = true,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (clickable) {
      navigate(`/item/${id}`, {
        state: {
          id,
          title,
          description,
          image,
          mainLocation,
          subLocation,
          price,
          email,
          borrowEmail,
          status,
        },
      });
    }
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition h-[210px] lg:h-[270px] "
      onClick={handleClick}
    >
      <div className="aspect-w-1 aspect-h-1 overflow-hidden">
        <img
          className="w-full h-[100px] object-cover rounded-xl"
          src={image}
          alt={title}
        />
      </div>
      <div className="px-2 py-2">
        <div className="font-semibold text-[15px] mb-2 text-center">
          {title}
        </div>
        <p className="text-gray-700 text-base">{description}...</p>

        <section className="w-full">
          <div className="flex text-sm text-gray-500 ">
            {/* <p>Location: {lenderName}</p> */}
            <p className="text-green-900 font-semibold">
              Price:{" "}
              <span className="text-green-900 font-semibold">{price}</span>{" "}
              Baht/day
            </p>
            {/* <p>{statusIndicator}</p> Show status indicator here */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Card;
