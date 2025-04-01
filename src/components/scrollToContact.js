export const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth", });
  };