import { useRef } from "react";
import StarRating from "./StarRating";

// eslint-disable-next-line react/prop-types
const ReadableField = ({ data, name, type }) => {
  // eslint-disable-next-line react/prop-types
  const country_code = data.country_code;
  // eslint-disable-next-line react/prop-types
  const datavalue = data.data;

  const element = useRef(null);

  switch (type) {
    case "text":
      element.current = (
        <input type="text" value={datavalue} ref={element} readOnly className="" />
      );
      break;
    case "phone":
      element.current = (
        <div className="flex justify-start">
          <input
            type="text"
            value={country_code}
            ref={element}
            readOnly
            className="w-10"
          />
          <input type="text" value={datavalue} ref={element} readOnly />
        </div>
      );
      break;
    case "country_code":
      element.current = (
        <input type="text" value={datavalue} ref={element} readOnly />
      );
      break;

    case "array":
      element.current = (
        <div className="flex flex-row flex-wrap">
          {
            Array.isArray(datavalue)
            // eslint-disable-next-line react/prop-types
              ? datavalue.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-gray-100 rounded-md px-2 py-1 m-1"
                    >
                      {item}
                    </div>
                  );
                })
              : null
          }
        </div>
      );
      break;

    case "rating":
      element.current=(
        <StarRating rating={4.4}/>
    )
break;
    case "number":
      element.current = (
        <input type="tel" value={datavalue} ref={element} readOnly />
      );

      break;

    default:
      break;
  }

  return (
    <>
      <div className="my-2">
        <label className="font-bold">{name}</label>
        <br />
        <div className="">
        {element.current}
        </div>
      </div>
    </>
  );
};

export default ReadableField;
