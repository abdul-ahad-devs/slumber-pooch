const CustomTextareaInput = ({
  rows = 6,
  name = "",
  placeholder = "",
  className = "",
}) => {
  return (
    <textarea
      name={name}
      className={`bg-white p-4 rounded-xl text-black ${className}`}
      rows={rows}
      placeholder={placeholder}
    />
  );
};

export default CustomTextareaInput;
