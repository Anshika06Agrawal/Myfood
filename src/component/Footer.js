const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <a href="https://www.linkedin.com/in/anshikaagrawal2002/" target="_blank">
        Anshika Agrawal
      </a>
      <span>❤</span>
      <span>&copy;</span>
      {year}
      <strong>
        Food <span>Ustaad</span>
      </strong>
    </div>
  );
};

export default Footer;
//   first give than take(fgtt) phle export than import
