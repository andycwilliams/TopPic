function Product ({product: {title, price, description, category, image}}) {
  return (
    <div className="flex bg-white w-full mb-5 shadow-sm rounded-lg dark:bg-gray-300 group overflow-visible hover:shadow-2xl transition-shadow duration-300">
      <div className="w-full p-2 dark:bg-white rounded-tl-lg rounded-bl-lg">
        <div style={{backgroundImage: `url(${image})`}} className="bg-contain bg-no-repeat bg-center w-full h-80 transition-transform duration-300 group-hover:transform group-hover:scale-150"></div>
      </div>
    </div>
    
  );
}
export default Product;