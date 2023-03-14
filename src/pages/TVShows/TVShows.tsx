import { Hero } from "../../components/Hero/Hero";
import { motion } from "framer-motion";

export const TVShows = () => {
  return (
    <motion.div
      className='w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Hero type='tvshows' />
    </motion.div>
  );
};
