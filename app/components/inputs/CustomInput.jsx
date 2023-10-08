const CustomInput = ({
  name = "",
  type = "text",
  placeholder = "",
  className = "",
}) => {
  return (
    <input
      name={name}
      className={`bg-white p-4 rounded-xl text-black ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
