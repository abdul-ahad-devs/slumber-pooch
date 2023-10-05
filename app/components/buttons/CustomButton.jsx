const CustomButton = ({
  label,
  onClick = () => {},
  containerClassName = "",
  labelClassName = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-full bg-orange w-max min-w-[12rem] ${containerClassName}`}
    >
      <p
        className={`font-extrabold text-xl uppercase text-white ${labelClassName}`}
      >
        {label}
      </p>
    </button>
  );
};

export default CustomButton;
