import { useNavigate } from 'react-router-dom';

function Card({ id, title, description, file, genre, lenderName, status,price }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item/${id}`, {
        state: {
        title,
        description,
        file,
        genre,
        lenderName,
        status,
        price,
      },
    });
    console.log(file);
    
  };

  // Status Indicator for the card
  const statusIndicator = status === "Available" ? (
    <span className="text-green-500">● Available</span>
  ) : (
    <span className="text-red-500">● On Borrow</span>
  );

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition"
      onClick={handleClick} // On click, navigate and pass data
    >
      <div className="aspect-w-1 aspect-h-1 overflow-hidden">
        <img
          className="w-full h-[100px] object-cover rounded-2xl"
          src={file}
          alt={title}
        />
      </div>
      <div className="px-2 py-2">
        <div className="font-bold text-lg mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description.slice(0, 100)}...</p>
        
        <div className="text-sm text-gray-500 mb-2">
          <p>Genre: {genre}</p>
          <p>Lender: {lenderName}</p>
          <p>Price: {price} Baht per day</p>
          <p>{statusIndicator}</p> {/* Show status indicator here */}
        </div>
      </div>
    </div>
  );
}

export default Card;
