import uploadImage from "firebase";

// const imageUpload = () => {
//   const handleImageUpload = (something) => {
//     console.log(something);
//     //uploadImage()
//   };

//   return (
//     <div>
//       <input
//         onChange={handleImageUpload}
//         type="file"
//         id="img"
//         name="img"
//         accept="image/*"
//       />
//     </div>
//   );
// };

const imageUpload = () => {
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
      <img src={uploadedImage} alt="No image yet" />
    </div>
  );
};

export default imageUpload;
