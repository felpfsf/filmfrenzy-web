import clsx from "clsx";
import { Star } from "lucide-react";
import { useFormContext } from "react-hook-form";

interface RatingStarProps {
  selectedStars: number;
  handleStarClick: (index: number) => void;
  name: string;
}

const RatingStar = ({
  name,
  handleStarClick,
  selectedStars,
}: RatingStarProps) => {

  const ARR_STAR_LENGTH = 5;
  const array = Array.from({ length: ARR_STAR_LENGTH }, (_, i) => i + 1);

  const {
    formState: { errors },
  } = useFormContext();

  const messageErrors = errors[name]?.message as string;
  
  return (
    <div className='flex gap-2'>
      {array.map((star, index) => (
        <label
          tabIndex={0}
          key={`${star}_${index}`}
          aria-label={`nota ${index + 1}`}
          className='flex flex-col items-center'
        >
          <input
            type='radio'
            id={name}
            checked={index < selectedStars}
            onClick={() => handleStarClick(index)}
            onChange={() => handleStarClick(index)}
          />
          <Star className={clsx({ "fill-accent": index < selectedStars })} />
        </label>
      ))}
      {messageErrors && <p className='text-red-500'>{messageErrors}</p>}
    </div>
  );
};

export default RatingStar;
