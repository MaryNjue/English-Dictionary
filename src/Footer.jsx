import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Dictionary App. All Rights Reserved.</p>
      <p>Made by <a href="https://github.com/MaryNjue">Mary Njue</a></p>
    </footer>
  );
};

export default Footer;
