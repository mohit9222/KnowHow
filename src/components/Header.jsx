import React from "react";

/**
 * Header Component should hold the menu trigger button.
 * onClick of this button we need to show or hide the sidebar navigation
 * The Menu Toggle state is maintained in the App Component.
 */
const Header = (props) => {
  const { menuState, setMenuState } = props;
  return (
    <header className="site-header">
      <div className="brand-icon">
        <div className="icon">
          <i className="fab fa-react"></i>
        </div>
        <span>KnowHow</span>
      </div>
      <div>
        <button
          className={`menu-trigger ${menuState ? "menu-close" : ""}`}
          onClick={() => setMenuState(!menuState)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
export default Header;
