export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="rounded-xl bg-btn py-4" {...props}>
      {children}
    </button>
  );
};
export default Button;
