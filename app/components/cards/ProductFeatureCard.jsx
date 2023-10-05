const ProductFeatureCard = ({ title, description, className = "" }) => {
  return (
    <div className={`bg-purple rounded-2xl h-[15rem] p-8 w-full ${className}`}>
      <h1 className="text-white text-3xl font-extrabold mb-2">{title}</h1>
      <p className="text-white text-base my-2">{description}</p>
    </div>
  );
};

export default ProductFeatureCard;
