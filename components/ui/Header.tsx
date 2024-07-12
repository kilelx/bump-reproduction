import Button from "./Button";

const Header = () => {
  return (
    <header className="container mx-auto sticky top-0 pt-3 z-50">
      <nav className="flex justify-between items-center">

        <p>Logo</p>

        <ul className="flex justify-normal items-center text-lg font-semibold font-clash-display">

        <div className="absolute btn-shadow py-2 px-6 bg-primary-orange"></div>
          <li>
            <a href="#" className="py-2 px-6">Accueil</a>
          </li>
          <li>
            <a href="#" className="py-2 px-6">Découvrir</a>
          </li>
          <li>
            <a href="#" className="py-2 px-6">Créateurs</a>
          </li>
          <li>
            <a href="#" className="py-2 px-6">Expertise</a>
          </li>
        </ul>
        <Button title="Contactez-nous" btnStyles="bg-primary-orange" link="#" />
      </nav>
    </header>
  );
};

export default Header;
