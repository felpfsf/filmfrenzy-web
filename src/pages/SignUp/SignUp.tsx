import { motion } from "framer-motion";
import {
  MOTION_OPACITY_ANIMATE,
  MOTION_OPACITY_INITIAL,
  MOTION_TRANSITION_DURATION,
} from "../../utils";

export const SignUp = () => {
  return (
    <motion.div
      className='relative h-screen w-full bg-signBg'
      initial={{ opacity: MOTION_OPACITY_INITIAL }}
      animate={{ opacity: MOTION_OPACITY_ANIMATE }}
      exit={{
        opacity: 0,
        transition: { duration: MOTION_TRANSITION_DURATION },
      }}
    >
      <div className='absolute top-0 left-0 h-screen w-full bg-black/60'></div>
      <h1>Register</h1>
    </motion.div>
  );
};
