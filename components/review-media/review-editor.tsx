"use client";
import {
  ReviewInputProps,
  ReviewSchema,
} from "@/lib/validations/review-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Button } from "../UI/submit-button";
import Textarea from "../UI/textarea-form";
import RatingStar from "../rating-star/rating-star";

interface ReviewEditorProps {
  mediaId: number;
  mediaTitle: string;
}

const ReviewEditor = ({ mediaId, mediaTitle }: ReviewEditorProps) => {
  const { data: session } = useSession();
  const userId = session?.user.id;

  const methods = useForm<ReviewInputProps>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: {
      rating: 0,
    },
  });

  const { control, handleSubmit, reset } = methods;

  const submitReview = (data: ReviewInputProps) => {
    const reviewData = { ...data, mediaId, userId };
    console.log(reviewData);
    reset();
  };
  return (
    <div className='w-full'>
      <FormProvider {...methods}>
        <form
          className='flex flex-col gap-2'
          onSubmit={handleSubmit(submitReview)}
        >
          <h1>
            Escreva um review para{" "}
            <span className='font-semibold'>
              &quot;<em>{mediaTitle}</em> &quot;
            </span>
          </h1>
          <Controller
            name='rating'
            control={control}
            defaultValue={0} // Valor inicial para rating
            render={({ field }) => (
              <RatingStar
                handleStarClick={(selectedStars) =>
                  field.onChange(selectedStars + 1)
                }
                selectedStars={field.value}
                name={"rating"}
              />
            )}
          />
          <Textarea name={"review"} />
          <Button text={"Enviar"} error={""} loading={false} />
        </form>
      </FormProvider>
    </div>
  );
};

export default ReviewEditor;
