import CustomButton from "../buttons/CustomButton";

const ProductCard = ({
  className = "",
  title,
  imageSrc,
  imageClassName = "",
  buttonText,
  onClick = () => {},
}) => {
  return (
    <div
      className={`flex flex-col flex-1 justify-center items-center ${className}`}
    >
      <h1 className="text-3xl font-extrabold text-white mt-12 mb-4">{title}</h1>
      <img
        className={`w-[30rem] h-full my-4 ${imageClassName}`}
        src={imageSrc}
      />
      <CustomButton
        label={buttonText}
        onClick={onClick}
        containerClassName="my-4"
      />
    </div>
  );
};

export default ProductCard;
