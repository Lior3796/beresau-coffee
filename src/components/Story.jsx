import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";

const Story = () => {
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

  return (
    <Element name="story"> 
      <section ref={sectionRef} className="py-16 md:py-28 bg-white">
        <motion.div
          className="container mx-auto px-4 md:px-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-20">
            {/* Text content - will be on top for mobile, left for desktop */}
            <motion.div 
              className="flex-1 flex items-center order-2 md:order-1 mt-8 md:mt-0"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center md:items-end text-center md:text-right w-full">
                <motion.h2 
                  className="w-full text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 font-varela leading-tight tracking-tight text-brand-dark"
                  variants={itemVariants}
                >
                  "אם אשכח אותו"
                  <br className="hidden sm:block" /><br />
                  הסיפור של אברהם אובגן ז"ל 
                </motion.h2>
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-brand-dark"
                  variants={itemVariants}
                >
                  ברסאו נולד מתוך סיפור משפחתי מרגש ומחויבות להמשיך את מורשתו של אברהם ז"ל. כל כוס קפה מספרת את הסיפור של אתיופיה, עם פולי קפה מובחרים שנבחרו בקפידה.
                </motion.p>
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-brand-dark mt-4 md:mt-6"
                  variants={itemVariants}
                >
                  קפה ברסאו הינו מיזם משפחתי להנצחת אברהם אובגן ז"ל - צעיר ישראלי-אתיופי, ערכי, לוחם, אח בן וחבר
                  <br className="hidden md:block" />
                  אשר נפל בשירות החובה בצה"ל במלחמת חרבות ברזל
                </motion.p>
              </div>
            </motion.div>

            {/* Image - will be on bottom for mobile, right for desktop */}
            <motion.div 
              className="flex-1 h-64 sm:h-96 md:h-screen order-1 md:order-2"
              variants={itemVariants}
            >
              <img 
                src="/images/Avraham.jpeg" 
                alt="קפה ברסאו" 
                className="w-full h-full object-cover rounded-2xl md:rounded-[40px] shadow-md"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Story;