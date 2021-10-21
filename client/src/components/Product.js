function Product ({product: {title, price, description, category, image}}) {
  return (
    <div className="flex bg-white w-full mb-5 shadow-sm rounded-lg dark:bg-gray-300 group overflow-visible hover:shadow-2xl transition-shadow duration-300">
      <div className="w-full p-2 dark:bg-white rounded-tl-lg rounded-bl-lg">
        <div style={{backgroundImage: `url(${image})`}} className="bg-contain bg-no-repeat bg-center w-full h-80 transition-transform duration-300 group-hover:transform group-hover:scale-150"></div>
      </div>
      {/* <div className="w-1/12 p-5"> */}
        {/* <h1 className="md:text-2xl">{title.substr(0, 50)}</h1> */}
        {/* <h3 className="text-gray-400 dark:text-gray-700">{category}</h3> */}
        {/* <p className="text-red-400 mt-4 text-xl md:text-4xl">$ {price}</p> */}
        {/* <div className="mt-4">{description.substr(0, 100)}</div> */}
      {/* </div> */}
    </div>
    
  );
}
export default Product;
