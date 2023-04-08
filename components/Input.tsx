interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <label className="flex flex-col">
      <span className="font-semibold leading-6 text-label text-base mb-2">
        {label}
      </span>
      <input
        {...props}
        className="bg-transparent border-2 border-gray rounded-xl py-3 pl-4 focus:outline-none text-white"
      />
    </label>
  );
};

export default Input;
