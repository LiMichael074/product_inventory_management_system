import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";

const NevBarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #282c34;
  color: white;
`;

const Title = styled.h1`
  font-family: "Impact", fantasy;
  color: #ffcc00;
  font-weight: 100;
  letter-spacing: 5px;
`;

const NavBar = () => {
  return (
    <>
      <NevBarContainer>
        <Title>Mick Dearlership</Title>
        <DropdownMenu />
      </NevBarContainer>
      <Outlet />
    </>
  );
};

export default NavBar;
