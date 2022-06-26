import React, { useContext, useState } from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { MdSearch, MdMenu, MdClose } from 'react-icons/md';
import HeaderStyles from '../styles/HeaderStyles';
import { menu } from '../constants/menu';
import Logo from './logo';
import ActionButton from './buttons/ActionButton';
import { SearchModalContext } from '../context/SearchModalContext';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { openSearchModal } = useContext(SearchModalContext);

  const handleSearchModalOpen = () => {
    openSearchModal();
  };

  const handleNavitemClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header__container">
          <div className="logo">
            <Logo />
          </div>
          <div className={clsx('nav__wrapper', isNavOpen && 'open')}>
            <div className="mobileIcon">
              <div className="searchIcon">
                <div
                  className="searchIcon__wrapper"
                  onClick={handleSearchModalOpen}
                  onKeyDown={handleSearchModalOpen}
                  role="button"
                  tabIndex={0}
                >
                  <MdSearch />
                </div>
              </div>

              <ActionButton
                className="mobileMenuBtn"
                onClick={() => setIsNavOpen(true)}
                onKeyDown={() => setIsNavOpen(true)}
              >
                <MdMenu />
              </ActionButton>
            </div>
            {isNavOpen && (
              <div
                className="mobileNavBg"
                aria-label="close menu"
                role="button"
                tabIndex={0}
                onClick={() => setIsNavOpen(false)}
                onKeyDown={() => setIsNavOpen(false)}
              />
            )}
            <nav>
              <ActionButton
                className="mobileMenuCloseBtn"
                onClick={() => setIsNavOpen(false)}
                onKeyDown={() => setIsNavOpen(false)}
              >
                <MdClose />
              </ActionButton>
              <ul>
                {menu.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={handleNavitemClick}>
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="searchIcon">
                  <div
                    className="searchIcon__wrapper"
                    onClick={handleSearchModalOpen}
                    onKeyDown={handleSearchModalOpen}
                    role="button"
                    tabIndex={0}
                  >
                    <MdSearch />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
