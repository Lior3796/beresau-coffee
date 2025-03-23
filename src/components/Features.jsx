const Features = () => {
  return (
    <section className="py-28 bg-brand-brown">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="flex-1 flex flex-col justify-between items-start">
            <div className="text-right mb-8">
              <h2 className="text-5xl mb-6 font-varela leading-tight tracking-tight text-white">למה לבחור בברסאו לעסק שלך</h2>
              <p className="text-xl text-white">
                לפני שקפה הפך להיות חלק מהיומיום שלנו, הוא היה טקס. באתיופיה, הכנת קפה היא אמנות, רגע של חיבור בין אנשים. אנחנו מביאים את אותה הרוח, עם קפה שלא רק מעיר – אלא גם מזכיר מאיפה הכל התחיל.
              </p>
            </div>
            
            <div className="w-full mb-8">
              <ul className="space-y-4 text-right">
                <li className="text-lg text-white">חוויית טעם ייחודית – טעמים עמוקים וארומטיים</li>
                <li className="text-lg text-white">מותאם לעסקים – פתרונות קפה לעסקים וארגונים</li>
                <li className="text-lg text-white">איכות פרימיום – פולים טריים ומובחרים</li>
              </ul>
            </div>
            
            <div>
              <button className="bg-white/10 text-white py-2.5 px-6 rounded-xl text-lg font-medium hover:bg-white hover:text-brand-dark transition-colors">
                צור קשר להזמנה
              </button>
            </div>
          </div>
          
          <div className="flex-1">
            <img 
              src="/images/derese-coffee.jpeg" 
              alt="קפה ברסאו" 
              className="w-full h-full object-cover rounded-[40px] shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features 