import { ReactNode } from "react";

type Btn = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};

const Button = ({ onClick, children, className }: Btn) => {
  return (
    <>
      <button onClick={onClick} className={className}>{children}</button>
    </>
  );
};

export default Button;
