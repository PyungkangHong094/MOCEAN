import { useState } from "react";
import TextInput from "./textinput";

const { Container, TextField, Box } = require("@mui/material")

const FormProfile = ({ profile = {} }) => {
  const { name: initialName, birth: initialBirth, email: initialEmail, phone: initialPhone } = profile;

  const [name, setName] = useState(initialName);
  const [birth, setBirth] = useState(initialBirth);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);

  return <Box ml={4} maxWidth={500}>
    <TextInput
      fullWidth
      placeholder="Input full name"
      variant="outlined"
      value={name}
      onChange={(e) => setName(e.target.value ?? '')}
    />
    <TextInput
      fullWidth
      sx={{ my: 2 }}
      placeholder="Input birth (yyyyMMdd)"
      variant="outlined"
      value={birth}
      onChange={(e) => setBirth(e.target.value ?? '')}
    />
    <TextInput
      fullWidth
      placeholder="Input E-mail"
      variant="outlined"
      value={email}
      onChange={(e) => setEmail(e.target.value ?? '')}
    />
    <TextInput
      fullWidth
      sx={{ my: 2 }}
      placeholder="Input mobile phone number with out '-'"
      variant="outlined"
      value={phone}
      onChange={(e) => setPhone(e.target.value ?? '')}
    />
  </Box>
}

export default FormProfile;