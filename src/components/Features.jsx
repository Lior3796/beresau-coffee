import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { scrollToContact } from "./scrollToContact";
import { Element } from "react-scroll";

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
      backgroundColor: "rgba(255, 255, 255, 1)",
      color: "#080604",
      transition: {
        duration: 0.3
      }
    }
  };
  
  return (
    <Element name="features">
      <motion.section 
        ref={sectionRef} 
        className="py-16 md:py-28 bg-brand-brown"
      >
        <motion.div
          className="container mx-auto px-4 md:px-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-20">
            {/* Image - Full width on mobile, half on desktop */}
            <motion.div 
              className="flex-1 order-2 md:order-1 mt-8 md:mt-0"
              variants={itemVariants}
            >
              <img
                src="/images/derese-coffee.jpeg"
                alt="קפה ברסאו"
                className="w-full h-auto md:h-full object-cover rounded-2xl md:rounded-[40px] shadow-md"
              />
            </motion.div>

            {/* Content - Full width on mobile, half on desktop */}
            <div className="flex-1 flex flex-col justify-between items-end order-1 md:order-2">
              <div className="w-full text-right mb-6 md:mb-8">
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-varela leading-tight tracking-tight text-white"
                  variants={itemVariants}
                >
                  למה לבחור בקפה
                  <br className="hidden xs:inline" /> ברסאו לעסק שלך
                </motion.h2>
                
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-white mt-4 md:mt-6"
                  variants={itemVariants}
                >
                  לפני שקפה הפך להיות חלק מהיומיום שלנו, הוא היה טקס.
                  <br className="hidden md:inline" /> באתיופיה, הכנת קפה היא אמנות, רגע של חיבור בין אנשים.
                  <br className="hidden md:inline" /> אנחנו מביאים את אותה הרוח, עם קפה שלא רק מעיר – אלא
                  <br className="hidden md:inline" /> גם מזכיר מאיפה הכל התחיל.
                </motion.p>
              </div>

              <motion.div className="w-full mb-6 md:mb-8">
                <motion.ul 
                  variants={listVariants} 
                  className="space-y-2 md:space-y-4 text-right"
                >
                  <motion.li 
                    variants={listItemVariants} 
                    className="text-base md:text-lg text-white"
                  >
                    חוויית טעם ייחודית – טעמים עמוקים וארומטיים
                  </motion.li>
                  <motion.li 
                    variants={listItemVariants} 
                    className="text-base md:text-lg text-white"
                  >
                    מותאם לעסקים – פתרונות קפה לעסקים וארגונים
                  </motion.li>
                  <motion.li 
                    variants={listItemVariants} 
                    className="text-base md:text-lg text-white"
                  >
                    איכות פרימיום – פולים טריים ומובחרים
                  </motion.li>
                </motion.ul>
              </motion.div>

              <div className="self-center md:self-start">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  onClick={scrollToContact}
                  className="bg-white/10 text-white py-2 md:py-2.5 px-4 md:px-6 rounded-lg md:rounded-xl text-base md:text-lg font-medium hover:bg-white hover:text-brand-dark transition-colors"
                >
                  צור קשר להזמנה
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </Element>
  );
};

export default Features;