// import uploadImage from "firebase";

const ImageUpload = () => {
  const handleImageUpload = (something) => {
    console.log(something);
    // uploadImage()
  };

  return (
    <div className="flex justify-center items-center my-2">
      <div id="image-uploader">
        <div>
          <p className="text-2xl text-center my-3">Inspire Others</p>
        </div>

        <div class="py-1 h-1/6 bg-gray-200 rounded-lg">
          <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
            <div class="md:flex">
              <div class="w-full p-3">
                <div class="relative border-dashed h-20 rounded-lg border-dashed border-2 border-green-900 bg-gray-100 flex justify-center items-center">
                  <div class="absolute">
                    <div class="flex flex-col items-center">
                      <i class="fa fa-folder-open fa-4x text-blue-700"></i>
                      <span class="block text-gray-400 font-normal text-center">
                        Upload
                        <br />
                        (jpg, png, svg, jpeg)
                      </span>
                    </div>
                  </div>
                  <input
                    onChange={handleImageUpload}
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    class="h-full w-full opacity-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;