import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Testimonial = () => {
  const testimonials = [
    {
      quote: "קפה מעולה טעם עדין וניחוח נפלא \n קניתי שני סוגים. אהבתי את שניהם",
    },
    {
      quote: "איזה יופי איזה איכות ואיזה סטייל קפה משובח ביותר עלו והצליחו.",
    },
    {
      quote: "קפה נפלא ומי שמכין אותו פלא בעצמו"
    },
    {
      quote: "אח שלי קנה לנו את היואננט, קפה מושלם! \n יוזמה מרגשת לזכרו של ברסאו ז\"ל. אהבנו מאוד "
    },{
      quote: "טעים ממש אהבתי"
    },{
      quote: "אין על הקפה האתיופי! ייארגצ'ף וסידמו הכי טעימים בעולם "
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.4
      }
    }
  };

  const titleVariants = {
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

  const carouselVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const testimonialVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <Element name="testimonial">
      <section ref={sectionRef} className="py-28 bg-brand-light shadow-md">
        <motion.div 
          className="container"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <motion.h1 
              className="text-4xl font-bold mb-12 text-brand-dark font-varela"
              variants={titleVariants}
            >
              לקוחות ממליצים
            </motion.h1>
            <motion.div 
              className="relative h-48 w-full overflow-hidden"
              variants={carouselVariants}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className={`absolute top-0 left-0 w-full ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: index === currentIndex ? 1 : 0,
                    x: index === currentIndex ? 0 : 50,
                    transition: {
                      opacity: { duration: 0.5 },
                      x: { type: "spring", stiffness: 100, damping: 15 }
                    }
                  }}
                >
                  <p className="text-3xl mb-8 font-varela leading-relaxed text-brand-dark">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <div>
                      <p className="font-semibold text-lg text-brand-dark">{testimonial.name} </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex mt-8 space-x-2"
              variants={carouselVariants}
            >
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    index === currentIndex ? 'bg-brand-dark' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </Element>
  )
}

export default Testimonial 