import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;
const Thead = styled(TableRow)`
  background: darkgray;
  & > th {
    color: yellow;
    font-size: 20px;
  }
`;
const Tbody = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;
function AllUser() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUsersDetail();
  }, []);

  const getUsersDetail = async () => {
    let response = await getUsers();
    // console.log(response);
    setData(response.data);
  };
  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getUsersDetail();
  };
  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>last Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Telephone</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {data.map((user, index) => (
          <Tbody key={index}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.FirstName}</TableCell>
            <TableCell>{user.LastName}</TableCell>
            <TableCell>{user.Email}</TableCell>
            <TableCell>{user.telephone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                onClick={()=>deleteUserDetails(user.id)}
              >
                Delete
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to={`/edituser/${user.id}`}
              >
                Edit
              </Button>
            </TableCell>
          </Tbody>
        ))}
      </TableBody>
    </StyledTable>
  );
}

export default AllUser;
