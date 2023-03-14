import { motion } from "framer-motion";
import { FormController } from "../../components/Form/FormController";
import {
  MOTION_OPACITY_ANIMATE,
  MOTION_OPACITY_INITIAL,
  MOTION_TRANSITION_DURATION,
} from "../../utils";

export const SignUp = () => {
  return (
    <motion.div
      className=' h-full min-h-screen w-full'
      initial={{ opacity: MOTION_OPACITY_INITIAL }}
      animate={{ opacity: MOTION_OPACITY_ANIMATE }}
      exit={{
        opacity: 0,
        transition: { duration: MOTION_TRANSITION_DURATION },
      }}
    >
      <img
        className='absolute hidden h-full w-full bg-cover md:block'
        src='/bg-signup.jpg'
        alt=''
      />
      <div className='absolute top-0 left-0 h-screen w-full bg-black/60'></div>
      <div className='fixed mt-20 w-full px-4 md:mt-32'>
        <FormController page='register' title='Registar' />
      </div>
    </motion.div>
  );
};
