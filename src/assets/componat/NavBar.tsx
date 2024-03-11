import React from "react";
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

const NavBar = () => {
  return (
    <>
      <NevBarContainer>
        <h1>Mick Dearlership</h1>
        <DropdownMenu />
      </NevBarContainer>
      <Outlet />
    </>
  );
};

export default NavBar;
