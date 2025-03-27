import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const footerRef = useRef(null);
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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#A86E4F",
      transition: { duration: 0.2 }
    }
  };

  const socialVariants = {
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
      scale: 1.2,
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer ref={footerRef} className="py-20 bg-white">
      <motion.div 
        className="container"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row gap-16 mb-20">
          <motion.div 
            className="flex flex-col items-start gap-8"
            variants={itemVariants}
          >
            <motion.img 
              src="/images/logo-beraso.png" 
              alt="קפה ברסאו" 
              className="h-10"
              variants={logoVariants}
            />
            
            <motion.div 
              className="flex flex-col items-start w-full"
              variants={itemVariants}
            >
              <motion.div 
                className="mb-6"
                variants={itemVariants}
              >
                <h3 className="text-base font-semibold text-brand-dark mb-1">כתובת</h3>
                <p className="text-base text-brand-dark">
                  <motion.a 
                    href="https://www.google.com/maps/place/%D7%A4%D7%99%D7%A0%D7%A1%D7%A7%D7%A8+57,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91%E2%80%AD/@32.0767117,34.7727295,3a,75y,280.73h,90t/data=!3m4!1e1!3m2!1snp2JRQqFYp8hG-SfF25k1w!2e0!4m2!3m1!1s0x151d4c7f0cb688dd:0xc40e6f6688f55246?sa=X&ved=1t:3780&ictx=111"
                    whileHover="hover"
                    variants={linkVariants}
                  >
                    תל גיבורים 5 תל אביב
                  </motion.a>
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <h3 className="text-base font-semibold text-brand-dark mb-1">צור קשר</h3>
                <p className="text-base text-brand-dark">
                  <motion.a 
                    href="tel:053-3790590"
                    whileHover="hover"
                    variants={linkVariants}
                  >
                    053-3790590
                  </motion.a>
                </p>
                <p className="text-base text-brand-dark">
                  <motion.a 
                    href="mailto:info@beresau.co.il"
                    whileHover="hover"
                    variants={linkVariants}
                  >
                    info@beresau.co.il
                  </motion.a>
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex gap-3"
              variants={itemVariants}
            >
              <motion.a 
                href="#" 
                aria-label="Facebook"
                whileHover="hover"
                variants={socialVariants}
              >
                <img src="/images/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="Instagram"
                whileHover="hover"
                variants={socialVariants}
              >
                <img src="/images/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex flex-col"
          variants={itemVariants}
        >
          <hr className="border-brand-dark/15 mb-8" />
          <div className="flex justify-center">
            <p className="text-base text-brand-dark">
              © כל הזכויות שמורות לקפה ברסאו 2025 | עוצב ופותח ע"י <motion.a 
                href="https://www.solid-software.solutions/"
                whileHover="hover"
                variants={linkVariants}
              >סוליד</motion.a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer 