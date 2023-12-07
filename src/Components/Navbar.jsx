import React from "react";
import { Toolbar, AppBar, Typography, styled, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  text-decoration:none;
  color:white;
`;

function Navbar() {
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Tabs  to='/'>Admin</Tabs>
          <Tabs to='alluser'>All User</Tabs>
          <Tabs to='adduser'>Add User</Tabs>
          {/* <Tabs to='edituser/:id'>Edit User</Tabs> */}
          {/* <Button   to='Admin' variant="soft" color="neutral">
            Adin pannel
          </Button> */}
        </Toolbar>
      </Header>
    </>
  );
}

export default Navbar;
