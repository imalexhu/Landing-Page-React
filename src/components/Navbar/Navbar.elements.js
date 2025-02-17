import styled from 'styled-components';
import { Container } from '../../globalStyles'
import {  FaTag } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`

export const NavLogo = styled(Link)`
  color: ${({ lightBg }) => (lightBg ? "#101522" : "#fff")};
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;


export const Logo = styled.img`
  width: 240px;
  height: 80px;
`;

export const NavIcon = styled(FaTag)`
    margin-right: 0.5rem;
`

export const HamburgerIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;   
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    
  
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        opacity: 1;
        transition: all 0.5s ease;
        background-color: #101522;
        left: ${({ click }) => (click ? 0 : '-100%')};
    }
`
export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  border-radius: 2px;

  &:hover {
    border-bottom: 4px solid;
    border-bottom-color: ${({ lightBg }) => (lightBg ? "#101522" : "#fff")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border-bottom: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: ${({ lightBg }) => (lightBg ? "#101522" : "#fff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  &:hover {
    border-bottom-color: ${({ lightBg }) => (lightBg ? "red" : "black")};
  }

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;