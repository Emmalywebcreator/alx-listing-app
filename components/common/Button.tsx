import { FC } from 'react';
import { ButtonProps } from '../../interfaces';

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {label}
    </button>
  );
};

export default Button;
