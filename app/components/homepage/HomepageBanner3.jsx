import ProductCard from "../cards/ProductCard";
import { BANNER_PADDING, products } from "./constants";

const HomepageBanner3 = () => {
  return (
    <div className={`flex flex-1 flex-col bg-purple ${BANNER_PADDING} md:p-10`}>
      <h1 className="w-full bg-darkYellow sm:mx-auto mx-4 rotate-[-1deg] rounded-full p-4 font-extrabold text-purple text-[1.75rem] md:text-[2.5rem] lg:text-[4rem] text-center">
        Available in 2 Luxurious Colors
      </h1>
      <div className="flex flex-1 flex-col lg:flex-row justify-center items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            buttonText={product.buttonText}
            imageSrc={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HomepageBanner3;
