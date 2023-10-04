const IconButton = ({
  imageSrc,
  onClick = () => {},
  containerClassName = "",
  imageClassName = "",
}) => {
  return (
    <button onClick={onClick} className={containerClassName}>
      <img src={imageSrc} className={`w-[2rem] h-[2rem] ${imageClassName}`} />
    </button>
  );
};

export default IconButton;
