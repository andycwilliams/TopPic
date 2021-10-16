import uploadImage from "firebase";

const ImageUpload = () => {
  const handleImageUpload = (something) => {
    console.log(something);
    //uploadImage()
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
    </div>
  );
};

export default ImageUpload;
