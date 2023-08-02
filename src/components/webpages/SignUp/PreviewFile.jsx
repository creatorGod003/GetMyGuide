import { useState } from "react";

// eslint-disable-next-line react/prop-types
const PreviewFile = ({file}) => {

    const [preview, setPreview] = useState("");

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
        setPreview(fileReader.result);
    }

  return (
    <div>
        {
            preview ? (
                <img src={preview} alt="preview" className="w-20 h-20" />
            ):(
                <div className="w-20 h-20 bg-gray-200">
                    Loading...
                </div>
            )
        }
    </div>
  )
}

export default PreviewFile