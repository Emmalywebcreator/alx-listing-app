import { FC } from 'react';
import { CardProps } from '../../interfaces';

const Card: FC<CardProps> = ({ title, image }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <img src={image} alt={title} className="mb-2 rounded" />
      <h2 className="font-semibold">{title}</h2>
    </div>
  );
};

export default Card;
