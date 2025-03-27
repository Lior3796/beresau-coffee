import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.4
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 1)",
      color: "#080604",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="hero-section flex items-center justify-center">
      <motion.div 
        className="container max-w-3xl text-center"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="text-white mb-8">
          <motion.h1 
            className="text-7xl mb-6 font-varela leading-tight tracking-tighter"
            variants={titleVariants}
          >
            ברסאו – קפה אתיופי משובח
          </motion.h1>
          <motion.p 
            className="text-xl"
            variants={subtitleVariants}
          >
            קפה איכותי המשלב מסורת, תרבות ואיכות בלתי מתפשרת
          </motion.p>
        </div>
        <motion.div variants={buttonVariants}>
          <motion.button 
            className="bg-transparent border border-white text-white py-2.5 px-6 rounded-xl text-lg font-medium transition-colors"
            variants={buttonVariants}
            whileHover="hover"
          >
            צור קשר
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 