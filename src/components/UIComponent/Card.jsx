import { useEffect, useState } from "react";
import Button from "./Button";
import StarRating from "./StarRating";
import { PropTypes } from "prop-types";
const Card = (props) => {

    const title = props.title;
    const description = props.description;
    const rating = props.rating;
    const price = props.price;
    const key = props.key;

    const [moreClicked, setMoreClicked] = useState(false);
    useEffect(()=>{

      if(description.length>100)
        setMoreClicked(true);
      
    },[])

  return (
    
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4" key = {key}>
      <img 
        className="w-full h-56 hover:scale-105 transition-all duration-300"
        src={"https://tailwindcss.com/img/card-top.jpg"}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-base">
          {
            moreClicked?
            (
              <div>
                <span>{description.slice(0,100)+"   ..."}</span>
                <button href="#" className="underline" onClick={
                  ()=>{
                    setMoreClicked(false);
                  }
                }>more</button>
              </div>
            ):
            (
              <div>
                <span>{description}</span>
                <button href="#" className="underline" onClick={
                  ()=>{
                    setMoreClicked(true);
                  }
                }>less</button>
              </div>
            )

          }
        </div>
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

Card.defaultProps = {
  title: "Title",
  description: "Description",
  rating: 0,
  price: 0,
  key: "",
  // image: "",
  // id: "",
};


Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  key: PropTypes.string,
  // image: PropTypes.string,
  // id: PropTypes.string,
};