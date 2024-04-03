const Button = ({ type = 'button', label, variant, size, className }) => {
  return (
    <button className={`flexCenter gap-3 rounded-full w-50 ${variant} ${size} ${className}`}
            type={type}>
      <label className='bold-16 whitespace-nowrap'>{label}</label>
    </button>
  );
};

export default Button;