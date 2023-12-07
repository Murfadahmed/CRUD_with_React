import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { editUser, getUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
const initialValue = {
  FirstName: "",
  LastName: "",
  Email: "",
  Password: "",
};
function EditUser() {
  const [user, setUser] = useState(initialValue);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(user);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let respons = await getUser(id);
    setUser(respons ? respons.data : "");
    // console.log(respons);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };
  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/alluser");
    console.log("btn hit hogya", Date.now());
  };
  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>First Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="FirstName"
          value={user.FirstName}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Last Name </InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="LastName"
          value={user.LastName}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="Email"
          value={user.Email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Password</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="Password"
          value={user.Password}
        />
      </FormControl>
      <Button onClick={() => editUserDetails()} variant="contained">
        Edit User
      </Button>
    </Container>
  );
}

export default EditUser;
