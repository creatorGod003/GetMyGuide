import { useEffect, useState} from "react";
import Star from "./Star";

const StarRating = (props) => {
  
  // eslint-disable-next-line react/prop-types
  const rating = props.rating;
  // eslint-disable-next-line react/prop-types
  const width = props.width;
  const [starBucket,setStarBucket] = useState([0,0,0,0,0]);

  useEffect(() => {
    
    const bucket = [0,0,0,0,0];
    
    const fullStar = Math.floor(rating);

    let i=0
    for(;i<fullStar;i+=1){
      bucket[i]=2;
    }

    if(rating%1 >=0.5){
      bucket[i]=1;
    }

    setStarBucket(bucket);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);
  


  return (

    
    <div className="flex flex-row items-center justify-start">
        <div className="flex flex-row items-center justify-center">
          {
            starBucket.map((item,index)=>{
              return(
                <Star key={index} starState={item} width={width}/>
              )
            })
          }            
        </div>
        <span className={`text-[${width}] font-bold`}>
          {
            "("+rating+")"
          }
        </span>
    </div>
    
  )
}

export default StarRating;