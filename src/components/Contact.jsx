import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.15
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    focus: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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
      backgroundColor: "#8A5D42", // Slightly darker brand-brown
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section ref={sectionRef} className="py-28 bg-white">
      <motion.div 
        className="container"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div 
            className="mb-12"
            variants={titleVariants}
          >
            <h2 className="text-5xl mb-6 font-varela leading-tight tracking-tighter text-brand-dark">יצירת קשר</h2>
            <p className="text-xl text-brand-dark"> השאירו פרטים ונחזור אליכם 📩</p>
          </motion.div>
          
          <motion.form 
            className="w-full max-w-lg"
            variants={formVariants}
          >
            <motion.div 
              className="mb-6"
              variants={inputVariants}
            >
              <label htmlFor="name" className="block text-lg text-brand-dark text-right mb-2">שם מלא</label>
              <motion.input 
                type="text" 
                id="name" 
                className="w-full p-3 bg-brand-dark/5 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-brand-brown"
                whileFocus="focus"
                variants={inputVariants}
              />
            </motion.div>
            
            <motion.div 
              className="mb-6"
              variants={inputVariants}
            >
              <label htmlFor="phone" className="block text-lg text-brand-dark text-right mb-2">פלאפון</label>
              <motion.input 
                type="tel" 
                id="phone" 
                className="w-full p-3 bg-brand-dark/5 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-brand-brown"
                whileFocus="focus"
                variants={inputVariants}
              />
            </motion.div>
            
            <motion.div 
              className="mb-6"
              variants={inputVariants}
            >
              <label htmlFor="email" className="block text-lg text-brand-dark text-right mb-2">אימייל</label>
              <motion.input 
                type="email" 
                id="email" 
                className="w-full p-3 bg-brand-dark/5 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-brand-brown"
                whileFocus="focus"
                variants={inputVariants}
              />
            </motion.div>
            
            <motion.div 
              className="mb-6"
              variants={inputVariants}
            >
              <label htmlFor="message" className="block text-lg text-brand-dark text-right mb-2">הודעה</label>
              <motion.textarea 
                id="message" 
                rows="4" 
                placeholder="אני מעוניין ב.."
                className="w-full p-3 bg-brand-dark/5 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-brand-brown"
                whileFocus="focus"
                variants={inputVariants}
              ></motion.textarea>
            </motion.div>
            
            <motion.button 
              type="submit" 
              className="bg-brand-brown text-white py-2.5 px-6 rounded-xl text-lg font-medium transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              שלח
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact 