import styled from '@emotion/styled';

export const SharedHeader = styled.div`
  position: fixed;
  z-index: 9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  left: 0;
  height: 48px;
  gap: 24px;
  padding: 16px 42px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #d84343;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 40px;
`;

export const HeaderNavList = styled.ul`
  display: flex;
  gap: 40px;
`;

export const HeaderNavItem = styled.li`
  box-sizing: border-box;
`;

export const HeaderLogo = styled.h1`
  color: #e44848;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.17;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding-top: 24px;
  padding-bottom: 24px;
  margin-right: ${props => (props.width < 768 ? '76px' : '120px')};

  @media not (hover: hover) {
    :active {
      background-color: #d84343;
    }
  }
`;

export const HeaderLogoAccent = styled.span`
  ${HeaderLogo};
  color: #e44848;
`;

export const HeaderBtn = styled.button`
  min-width: ${props => (props.width > 768 ? '40px' : 'none')};
  min-height: ${props => (props.width > 768 ? '40px' : 'none')};
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: #e44848;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  padding: ${props => (props.width > 768 ? '0' : 'inherit')};
  margin-left: auto;
  transition: background-color
    ${props =>
      props.width > 768 ? '250ms cubic-bezier(0.4, 0, 0.2, 1);' : 'none'};

  :hover {
    background-color: #d84343;
  }
`;

export const HeaderContacts = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderContactsLink = styled.a`
  display: block;
  padding: 0;
  font-size: 12px;
`;

export const HeaderContactsList = styled.ul`
  display: flex;
  gap: ${props => (props.width < 768 ? '40px' : '12px')};

  ${props =>
    props.width < 768
      ? ''
      : `
    margin-top: ${props => (props.width > 768 ? '16px' : 'inherit')};
    margin-bottom: ${props => (props.width > 768 ? '16px' : 'inherit')};
  `};
`;

export const HeaderNavItemLink = styled.a`
  font-weight: 600;
  display: block;
  padding-top: ${props => (props.width > 768 ? '24px' : 'inherit')};
  padding-bottom: ${props => (props.width > 768 ? '24px' : 'inherit')};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.current {
    position: relative;
    color: #d84343;
  }

  &::after {
    content: '';
    position: absolute;
    display: flex;
    left: 0;
    width: 100%;
    height: ${props => (props.width > 768 ? '4px' : 'inherit')};
    bottom: -1px;
    border-radius: ${props => (props.width > 768 ? '2px' : 'inherit')};
    background-color: #d84343;
  }
`;

export const SharedPageCtnr = styled.section`
  flex: 1;
  padding: 1rem;
`;
