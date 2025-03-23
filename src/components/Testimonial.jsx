const Testimonial = () => {
  return (
    <section className="py-28 bg-brand-light shadow-md">
      <div className="container">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <p className="text-3xl mb-8 font-varela leading-relaxed text-brand-dark">
            "הקפה של ברסאו הפך להיות הבחירה הראשונה במשרד שלנו – איכות ללא תחרות!"
          </p>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
              <img 
                src="/images/avatar.jpg" 
                alt="יוסי" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-lg text-brand-dark">יוסי</p>
              <p className="text-lg text-brand-dark">בעל בית קפה</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial 