import { useNavigate } from 'react-router-dom';

function Card({ id, title, description, file, lenderName, status,price }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item/${id}`, {
        state: {
        title,
        description,
        file,
        lenderName,
        status,
        price,
      },
    });
    
  };


  const statusIndicator = status === "Available" ? (
    <span className="text-green-500">● Available</span>
  ) : (
    <span className="text-red-500">● On Borrow</span>
  );

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition h-[310px] lg:h-[330px] "
      onClick={handleClick} 
    >
      <div className="aspect-w-1 aspect-h-1 overflow-hidden">
        <img
          className="w-full h-[100px] object-cover rounded-xl"
          src={file}
          alt={title}
        />
      </div>
      <div className="px-2 py-2">
        <div className="font-semibold text-[15px] mb-2 text-center">{title}</div>
        <p className="text-gray-700 text-base">{description}...</p>
        
        <section className='w-full fixed  bottom-0'>
        <div className="flex text-sm text-gray-500 ">
          {/* <p>Location: {lenderName}</p> */}
          <p className='text-green-900 font-semibold'>Price: <span className='text-green-900 font-semibold'>{price}</span> Baht/day</p>
          {/* <p>{statusIndicator}</p> Show status indicator here */}
        </div>
        </section>
      </div>
    </div>
  );
}

export default Card;
