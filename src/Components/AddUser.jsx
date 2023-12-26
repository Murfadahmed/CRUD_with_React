import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

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
  telephone: "",
};
function AddUser() {
  const [user, setUser] = useState(initialValue);
  const navigate = useNavigate();
  // console.log(user);
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };
  const addUserDetails = async () => {
    await addUser(user);
    navigate('/alluser')
    // console.log("btn hit hogya", Date.now());
  };
  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>First Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="FirstName" />
      </FormControl>
      <FormControl>
        <InputLabel>Last Name </InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="LastName" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Email" />
      </FormControl>
      <FormControl>
        <InputLabel>Telephon</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="telephone" />
      </FormControl>
      <Button onClick={() => addUserDetails()} variant="contained">
        Add User
      </Button>
    </Container>
  );
}

export default AddUser;
