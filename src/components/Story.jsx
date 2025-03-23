const Story = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-20">

          <div className="flex-1 flex items-center">
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <h2 className=" w-full text-5xl mb-6 font-varela leading-tight tracking-tight text-brand-dark">
                "אם אשכח אותו"<br /><br />
                הסיפור של אברהם אובגן ז"ל
              </h2>
              <p className="text-xl text-brand-dark">
                ברסאו נולד מתוך סיפור משפחתי מרגש ומחויבות להמשיך את מורשתו של אברהם ז"ל. כל כוס קפה מספרת את הסיפור של אתיופיה, עם פולי קפה מובחרים שנבחרו בקפידה.
              </p>
            </div>
          </div>
          <div className="flex-1 h-screen">
            <img 
              src="/images/Avraham.jpeg" 
              alt="קפה ברסאו" 
              className="w-full h-full object-cover rounded-[40px] shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story 