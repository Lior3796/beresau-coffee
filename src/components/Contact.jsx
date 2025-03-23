const Contact = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl mb-6 font-varela leading-tight tracking-tighter text-brand-dark">יצירת קשר</h2>
            <p className="text-xl text-brand-dark">📩 השאירו פרטים ונחזור אליכם</p>
          </div>
          
          <form className="w-full max-w-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg text-brand-dark text-right mb-2">שם מלא</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-3 bg-brand-dark/5 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-brand-brown"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="phone" className="block text-lg text-brand-dark text-right mb-2">פלאפון</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full p-3 bg-brand-dark/5 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-brand-brown"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg text-brand-dark text-right mb-2">אימייל</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-3 bg-brand-dark/5 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-brand-brown"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg text-brand-dark text-right mb-2">הודעה</label>
              <textarea 
                id="message" 
                rows="4" 
                placeholder="אני מעוניין ב.."
                className="w-full p-3 bg-brand-dark/5 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-brand-brown"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-brand-brown text-white py-2.5 px-6 rounded-xl text-lg font-medium hover:bg-brand-brown/90 transition-colors"
            >
              שלח
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact 