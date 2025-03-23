import { useState, useEffect } from 'react'

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-28 bg-brand-light shadow-md">
      <div className="container">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-12 text-brand-dark font-varela">לקוחות ממליצים</h1>
          <div className="relative h-48 w-full overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute top-0 left-0 w-full transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-3xl mb-8 font-varela leading-relaxed text-brand-dark">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex flex-col items-center">
                  <div>
                    <p className="font-semibold text-lg text-brand-dark">{testimonial.name} </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-brand-dark' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial 