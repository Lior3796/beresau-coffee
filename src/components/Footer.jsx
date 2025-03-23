const Footer = () => {
  return (
    <footer className="py-20 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16 mb-20">
          <div className="flex flex-col items-start gap-8">
            <img 
              src="/images/logo-beraso.png" 
              alt="קפה ברסאו" 
              className="h-10"
            />
            
            <div className="flex flex-col items-start w-full">
              <div className="mb-6">
                <h3 className="text-base font-semibold text-brand-dark mb-1">כתובת</h3>
                <p className="text-base text-brand-dark">שדרות ירושלים 62 נתיבות</p>
              </div>
              
              <div>
                <h3 className="text-base font-semibold text-brand-dark mb-1">צור קשר</h3>
                <p className="text-base text-brand-dark">03-1234567</p>
                <p className="text-base text-brand-dark">info@beresau.co.il</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook">
                <img src="/images/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src="/images/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <hr className="border-brand-dark/15 mb-8" />
          <div className="flex justify-center">
            <p className="text-base text-brand-dark">© כל הזכויות שמורות לקפה ברסאו 2025 | עוצב ופותח ע"י Solid Software</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 