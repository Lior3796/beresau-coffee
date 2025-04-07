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
    <section ref={sectionRef} className="py-28 bg-white">
      <motion.div
        className="container"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row gap-20">

          <motion.div 
            className="flex-1 flex items-center"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <motion.h2 
                className="w-full text-5xl mb-6 font-varela leading-tight tracking-tight text-brand-dark"
                variants={itemVariants}
              >
                "אם אשכח אותו"<br /><br />
                הסיפור של אברהם אובגן ז"ל
              </motion.h2>
              <motion.p 
                className="text-xl text-brand-dark"
                variants={itemVariants}
              >
                ברסאו נולד מתוך סיפור משפחתי מרגש ומחויבות להמשיך את מורשתו של אברהם ז"ל. כל כוס קפה מספרת את הסיפור של אתיופיה, עם פולי קפה מובחרים שנבחרו בקפידה.
              </motion.p>
              <motion.p 
                className="text-xl text-brand-dark mt-6"
                variants={itemVariants}
              >
                קפה ברסאו הינו מיזם משפחתי להנצחת אברהם אובגן ז"ל - צעיר ישראלי-אתיופי, ערכי, לוחם, אח בן וחבר
                
                <br />אשר נפל בשירות החובה בצה"ל במלחמת חרבות ברזל
              </motion.p>
            </div>
          </motion.div>
          <motion.div 
            className="flex-1 h-screen"
            variants={itemVariants}
          >
            <img 
              src="/images/Avraham.jpeg" 
              alt="קפה ברסאו" 
              className="w-full h-full object-cover rounded-[40px] shadow-md"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>

    </Element>

  )
}

export default Story 