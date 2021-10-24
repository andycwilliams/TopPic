import uploadToFirebase from "./firebase";
import { useState } from "react";
// This is related to the file upload to firebase.
const ImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState("");

  const handleImageUpload = async (something) => {
    console.log(something);
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
