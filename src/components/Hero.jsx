import { scrollToContact } from "./scrollToContact";
const Hero = () => {
  return (
    <section className="hero-section flex items-center justify-center">
      <div className="container max-w-3xl text-center">
        <div className="text-white mb-8">
          <h1 className="text-7xl mb-6 font-varela leading-tight tracking-tighter">
            ברסאו – קפה אתיופי משובח
          </h1>
          <p className="text-xl">
            קפה איכותי המשלב מסורת, תרבות ואיכות בלתי מתפשרת
          </p>
        </div>
        <div>
          <button
            href="#container"
            onClick={scrollToContact}
            className="bg-transparent border border-white text-white py-2.5 px-6 rounded-xl text-lg font-medium hover:bg-white hover:text-brand-dark transition-colors"
          >
            צור קשר
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
