import uploadToFirebase from "./firebase";
import { useState } from "react";

const ImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState("");

  const handleImageUpload = async (something) => {
    const file = something.target.files[0];
    const url = await uploadToFirebase(file);
    setUploadedImage(url);
  };

  return (
    <div>
      <input
        onChange={handleImageUpload}
        type="file"
        id="img"
        name="img"
        accept="image/*"
      />
      <img src={uploadedImage} />
    </div>
  );
};

export default ImageUpload;
