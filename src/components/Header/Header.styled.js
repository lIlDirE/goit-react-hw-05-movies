import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavHeader = styled.nav`
background-color: black;
margin-bottom: 20px;

`

export const UlHeader = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  top: 0;
  width: 100%;
  margin: 0px 100px 40px 0px;
`;

export const LiHeader = styled.li`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 20px 20px;
  text-decoration: none;
`;

export const Link = styled(NavLink)`
  display: block;
  color: white;
  text-align: center;
  border-radius: 10px;
  padding: 14px 16px;
  text-decoration: none;
  
  transition: background-color 0.3s ease;

  &.active {
    color: white;
    background-color: #04aa6d;
  }

  &:hover {
    color: black;
    background-color: white;
  }
`;