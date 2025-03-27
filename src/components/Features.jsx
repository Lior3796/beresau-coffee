import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Features = () => {
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
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
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

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 1.2
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.25)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-28 bg-brand-brown">
      <motion.div
        className="container mx-auto px-4 md:px-16"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row gap-20">
          <motion.div 
            className="flex-1 order-1 md:order-1"
            variants={itemVariants}
          >
            <img 
              src="/images/derese-coffee.jpeg" 
              alt="קפה ברסאו" 
              className="w-full h-full object-cover rounded-[40px] shadow-md"
            />
          </motion.div>

          <div className="flex-1 flex flex-col justify-between items-end order-2 md:order-2">
            <div className="w-full text-right mb-8">
              <motion.h2 
                className="text-sxl md:text-6xl font-varela leading-tight tracking-tight text-white"
                variants={itemVariants}
              >
                למה לבחור בקפה
              </motion.h2>
              <motion.h2 
                className="text-5xl md:text-6xl font-varela leading-tight tracking-normal text-white"
                variants={itemVariants}
              >
                ברסאו לעסק שלך
              </motion.h2>
              
              <motion.p 
                className="text-xl text-white mt-6"
                variants={itemVariants}
              >
                לפני שקפה הפך להיות חלק מהיומיום שלנו, הוא היה טקס. באתיופיה, הכנת קפה היא אמנות, רגע של חיבור בין אנשים. אנחנו מביאים את אותה הרוח, עם קפה שלא רק מעיר – אלא גם מזכיר מאיפה הכל התחיל.
              </motion.p>
            </div>
            
            <motion.div 
              className="w-full py-2 mb-8"
              variants={listVariants}
            >
              <motion.ul className="space-y-4 text-right">
                <motion.li 
                  className="text-lg md:text-xl text-white"
                  variants={listItemVariants}
                >
                  חוויית טעם ייחודית – טעמים עמוקים וארומטיים
                </motion.li>
                <motion.li 
                  className="text-lg md:text-xl text-white"
                  variants={listItemVariants}
                >
                  מותאם לעסקים – פתרונות קפה לעסקים וארגונים
                </motion.li>
                <motion.li 
                  className="text-lg md:text-xl text-white"
                  variants={listItemVariants}
                >
                  איכות פרימיום – פולים טריים ומובחרים
                </motion.li>
              </motion.ul>
            </motion.div>
            
            <div className="self-start">
              <motion.button 
                className="bg-white/15 text-white py-2.5 px-6 rounded-xl text-lg font-medium transition-colors"
                variants={buttonVariants}
                whileHover="hover"
              >
                צור קשר להזמנה
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Features