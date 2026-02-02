import { ASSETS } from '../config/assets';

const Header = () => {
  return (
    <div className="header">
      <div className="top">
        <div className="advertoriall logo">
          <img src={ASSETS.logos.siteLogo} alt="Site Logo" className="center" />
        </div>
      </div>
      <div className="top_2"></div>
    </div>
  );
};

export default Header;
