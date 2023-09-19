

interface ButtonType {
  label: string
  onClick?: () => void
}

const Button: React.FC<ButtonType> = ({ label, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className={`w-[172px] h-[53px] text-center 
      text-sm button-gradient rounded hover:opacity-80 duration-200`}
    >
      {label}
    </button>
  );
};

export default Button;
