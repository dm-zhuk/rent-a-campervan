import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  SharedHeader,
  HeaderContainer,
  HeaderNav,
  HeaderLogo,
  HeaderLogoAccent,
  HeaderNavList,
  HeaderNavItem,
  HeaderContacts,
  HeaderContactsList,
  HeaderNavItemLink,
  HeaderContactsLink,
  SharedPageCtnr,
} from './index';

const SharedLayout = () => {
  return (
    <>
      <SharedHeader>
        <HeaderContainer>
          <HeaderNav>
            <img
              src="../img//favicon.png"
              alt="Logo"
              width="30"
              height="24"
            ></img>
            <HeaderLogo to="/">
              RENT-A-<HeaderLogoAccent>CAMPER</HeaderLogoAccent>
            </HeaderLogo>

            <HeaderNavList>
              <HeaderNavItem>
                <NavLink to="/" className={HeaderNavItemLink}>
                  Home
                </NavLink>
              </HeaderNavItem>
              <HeaderNavItem>
                <NavLink to="/catalog" className={HeaderNavItemLink}>
                  Catalog
                </NavLink>
              </HeaderNavItem>
              <HeaderNavItem>
                <NavLink to="/favorites" className={HeaderNavItemLink}>
                  Favorites
                </NavLink>
              </HeaderNavItem>
            </HeaderNavList>
          </HeaderNav>

          <HeaderContacts>
            <HeaderContactsList>
              <li>
                <a
                  className={HeaderContactsLink}
                  href="mailto:info@camperrental.com"
                >
                  info@camperrental.com
                </a>
              </li>
              <li>
                <a className={HeaderContactsLink} href="tel:+380631234567">
                  +380 (63) 123-45-67
                </a>
              </li>
            </HeaderContactsList>
          </HeaderContacts>
        </HeaderContainer>
      </SharedHeader>

      <SharedPageCtnr>
        <Outlet />
      </SharedPageCtnr>
    </>
  );
};

export default SharedLayout;
