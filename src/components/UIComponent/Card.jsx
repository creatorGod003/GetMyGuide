import Button from "./Button";
import StarRating from "./StarRating";

const Card = (props) => {

    // tourtitle
    // tour description
    // tour rating
    // tour price
    // tour image
    // tour id
    // key

    // eslint-disable-next-line react/prop-types
    const title = props.title;
    // eslint-disable-next-line react/prop-types
    const description = props.description;
    // eslint-disable-next-line react/prop-types
    const rating = props.rating;
    // eslint-disable-next-line react/prop-types
    const price = props.price;
    // const image = props.image;
    // const id = props.id;    
    

  return (
    // eslint-disable-next-line react/prop-types
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4" >
      <img 
        className="w-full h-56 hover:scale-105 transition-all duration-300"
        src={"https://tailwindcss.com/img/card-top.jpg"}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {
            description
          }
        </p>
        <StarRating rating={rating} width={"20px"}/>
        <p>
            <span className="font-bold">Price: </span>
            <span className="text-gray-700 text-base">₹{price}/person</span>
        </p>
      </div>
      <div className="px-6 pb-4">
        <Button name={"Get"}/>
      </div>
    </div>
  );
};

export default Card;
