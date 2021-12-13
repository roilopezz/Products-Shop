const Footer = () => {
  return (
    <p className="border-top text-center pt-3">
      <span className="ms-1">&copy;</span>
      <span className="ms-1">{new Date().getFullYear()}</span>
    </p>
  );
};

export default Footer;
