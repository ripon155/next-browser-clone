import Country from "./Country";

function Footer() {
  return (
    <footer className=" absolute bottom-0 w-full">
      <div className=" border-b px-8 py-3">
        <Country />
      </div>
      <div className=" flex justify-between items-center px-8 py-3 space-x-6">
        <ul className=" flex items-center space-x-6">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Business</li>
          <li className="link">How Search works</li>
        </ul>
        <ul className=" flex items-center space-x-6">
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Settings</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
