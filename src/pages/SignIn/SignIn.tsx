import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MOTION_OPACITY_ANIMATE,
  MOTION_OPACITY_INITIAL,
  MOTION_TRANSITION_DURATION,
} from "../../utils";

export const SignIn = () => {
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
        className='absolute h-full w-full bg-cover'
        src='/bg-signup.jpg'
        alt=''
      />
      <div className='absolute top-0 left-0 h-screen w-full bg-black/60'></div>
      <div className='fixed mt-32 w-full px-8'>
        <div className='mx-auto w-full max-w-md bg-black/75'>
          <h1 className='text-3xl font-bold'>Login</h1>
          <form action=''>
            <div>
              <label htmlFor=''>email</label>
              <input type='text' />
            </div>
            <div>
              <label htmlFor=''>password</label>
              <input type='text' />
            </div>
            <button>Submit</button>
          </form>
          <div>
            <p>
              Don't have an account? <Link to='/signup'>Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
