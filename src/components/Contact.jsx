import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Element } from "react-scroll";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  // Add error states
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Validation functions
  const validateName = (value) => {
    if (!value.trim()) return "שם מלא הוא שדה חובה";
    if (value.length < 2) return "שם חייב להכיל לפחות 2 תווים";
    return "";
  };

  const validateEmail = (value) => {
    if (!value.trim()) return "אימייל הוא שדה חובה";
    // Email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "כתובת אימייל לא תקינה";
    return "";
  };

  const validatePhone = (value) => {
    if (!value.trim()) return "מספר טלפון הוא שדה חובה";
    // Israeli phone number regex (supports formats like: 050-1234567, 0501234567)
    const phoneRegex = /^0(5\d|[2-4]\d|[8-9]\d)-?\d{7}$/;
    if (!phoneRegex.test(value)) return "מספר טלפון לא תקין";
    return "";
  };

  const validateMessage = (value) => {
    if (!value.trim()) return "הודעה היא שדה חובה";
    if (value.length < 10) return "הודעה חייבת להכיל לפחות 10 תווים";
    return "";
  };

  // Handle input changes with validation
  const handleInputChange = (e, setter, validator) => {
    const { name, value } = e.target;
    setter(value);
    
    // Validate on change
    const errorMessage = validator(value);
    setErrors(prev => ({
      ...prev,
      [name]: errorMessage
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const messageError = validateMessage(message);
    
    // Update all errors
    setErrors({
      name: nameError,
      email: emailError,
      phone: phoneError,
      message: messageError
    });
    
    // Check if there are any errors
    if (nameError || emailError || phoneError || messageError) {
      return; // Don't submit if there are errors
    }
    
    // emails
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    //new object
    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        // Clear errors on successful submission
        setErrors({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("Error sending email", error);
      });
  };

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
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    focus: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#8A5D42", // Slightly darker brand-brown
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <Element name="contact">
      <section ref={sectionRef} id="contact" className="py-16 md:py-28 bg-white">
        <motion.div
          className="container mx-auto px-4 md:px-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div className="mb-8 md:mb-12" variants={titleVariants}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 font-varela leading-tight tracking-tighter text-brand-dark">
                יצירת קשר
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-brand-dark">
                {" "}
                השאירו פרטים ונחזור אליכם 📩
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="w-full max-w-lg px-4 sm:px-0"
              variants={formVariants}
              noValidate
            >
              <motion.div className="mb-4 md:mb-6" variants={inputVariants}>
                <label
                  htmlFor="name"
                  className="block text-base md:text-lg text-brand-dark text-right mb-2"
                >
                  שם מלא *
                </label>
                <motion.input
                  value={name}
                  name="name"
                  onChange={(e) => handleInputChange(e, setName, validateName)}
                  type="text"
                  id="name"
                  required
                  minLength="2"
                  className={`w-full p-2 md:p-3 bg-brand-dark/5 rounded-xl text-right focus:outline-none focus:ring-2 ${
                    errors.name ? "border-2 border-red-500 focus:ring-red-500" : "focus:ring-brand-brown"
                  }`}
                  whileFocus="focus"
                  variants={inputVariants}
                  onBlur={(e) => handleInputChange(e, setName, validateName)}
                />
                {errors.name && (
                  <p className="text-right text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </motion.div>

              <motion.div className="mb-4 md:mb-6" variants={inputVariants}>
                <label
                  htmlFor="phone"
                  className="block text-base md:text-lg text-brand-dark text-right mb-2"
                >
                  פלאפון *
                </label>
                <motion.input
                  value={phone}
                  name="phone"
                  onChange={(e) => handleInputChange(e, setPhone, validatePhone)}
                  type="tel"
                  id="phone"
                  required
                  pattern="^0(5\d|[2-4]\d|[8-9]\d)-?\d{7}$"
                  className={`w-full p-2 md:p-3 bg-brand-dark/5 rounded-xl text-right focus:outline-none focus:ring-2 ${
                    errors.phone ? "border-2 border-red-500 focus:ring-red-500" : "focus:ring-brand-brown"
                  }`}
                  whileFocus="focus"
                  variants={inputVariants}
                  onBlur={(e) => handleInputChange(e, setPhone, validatePhone)}
                  placeholder="050-1234567"
                />
                {errors.phone && (
                  <p className="text-right text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </motion.div>

              <motion.div className="mb-4 md:mb-6" variants={inputVariants}>
                <label
                  htmlFor="email"
                  className="block text-base md:text-lg text-brand-dark text-right mb-2"
                >
                  אימייל *
                </label>
                <motion.input
                  value={email}
                  name="email"
                  onChange={(e) => handleInputChange(e, setEmail, validateEmail)}
                  type="email"
                  id="email"
                  required
                  className={`w-full p-2 md:p-3 bg-brand-dark/5 rounded-xl text-right focus:outline-none focus:ring-2 ${
                    errors.email ? "border-2 border-red-500 focus:ring-red-500" : "focus:ring-brand-brown"
                  }`}
                  whileFocus="focus"
                  variants={inputVariants}
                  onBlur={(e) => handleInputChange(e, setEmail, validateEmail)}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-right text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </motion.div>

              <motion.div className="mb-6" variants={inputVariants}>
                <label
                  htmlFor="message"
                  className="block text-base md:text-lg text-brand-dark text-right mb-2"
                >
                  הודעה *
                </label>
                <motion.textarea
                  name="message"
                  value={message}
                  onChange={(e) => handleInputChange(e, setMessage, validateMessage)}
                  id="message"
                  rows="4"
                  required
                  minLength="10"
                  placeholder="אני מעוניין ב.."
                  className={`w-full p-2 md:p-3 bg-brand-dark/5 rounded-xl text-right focus:outline-none focus:ring-2 ${
                    errors.message ? "border-2 border-red-500 focus:ring-red-500" : "focus:ring-brand-brown"
                  }`}
                  whileFocus="focus"
                  variants={inputVariants}
                  onBlur={(e) => handleInputChange(e, setMessage, validateMessage)}
                ></motion.textarea>
                {errors.message && (
                  <p className="text-right text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </motion.div>

              <div className="flex justify-center sm:justify-start">
                <motion.button
                  type="submit"
                  className="bg-brand-brown text-white py-2 px-5 sm:py-2.5 sm:px-6 rounded-xl text-base sm:text-lg font-medium transition-colors"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  שלח
                </motion.button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Contact;