import { Box } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";
import TextInput from "./textinput";

const initProfile = {
  name: "",
  birthday: "",
  email: "",
  phone_number: "",
};

export const profileContext = createContext({
  isUpdated: false,
  profile: initProfile,
  setName: (v) => {},
  setBirth: (v) => {},
  setEmail: (v) => {},
  setPhone: (v) => {},
});

export const ProfileProvider = ({ children }) => {
  const [updated, setUpdated] = useState(false);
  const [profile, setProfile] = useState(initProfile);

  useEffect(() => {
    if (!updated) {
      setUpdated(true);
    }
  }, [profile]);

  const setName = (v) => {
    const newData = {
      ...profile,
      name: v,
    };
    setProfile(newData);
  };
  const setBirth = (v) => {
    const newData = {
      ...profile,
      birthday: v,
    };
    setProfile(newData);
  };
  const setEmail = (v) => {
    const newData = {
      ...profile,
      email: v,
    };
    setProfile(newData);
  };
  const setPhone = (v) => {
    const newData = {
      ...profile,
      phone_number: v,
    };
    setProfile(newData);
  };

  return (
    <profileContext.Provider
      value={{
        isUpdated: updated,
        profile,
        setName,
        setBirth,
        setEmail,
        setPhone,
      }}
    >
      {children}
    </profileContext.Provider>
  );
};

const FormProfile = ({ profile = {} }) => {
  const {
    name: initialName,
    birthday: initialBirth,
    email: initialEmail,
    phone_number: initialPhone,
  } = profile;

  const {
    profile: front_profile,
    setName,
    setBirth,
    setEmail,
    setPhone,
  } = useContext(profileContext);

  useEffect(() => {
    setName(initialName);
    setBirth(initialBirth);
    setEmail(initialEmail);
    setPhone(initialPhone);
  }, []);

  return (
    <Box ml={4} maxWidth={500}>
      <TextInput
        fullWidth
        placeholder="Input full name"
        variant="outlined"
        value={front_profile.name}
        onChange={(e) => setName(e.target.value ?? "")}
      />
      <TextInput
        fullWidth
        sx={{ my: 2 }}
        placeholder="Input birth (yyyyMMdd)"
        variant="outlined"
        value={front_profile.birthday}
        onChange={(e) => setBirth(e.target.value ?? "")}
      />
      <TextInput
        fullWidth
        placeholder="Input E-mail"
        variant="outlined"
        value={front_profile.email}
        onChange={(e) => setEmail(e.target.value ?? "")}
      />
      <TextInput
        fullWidth
        sx={{ my: 2 }}
        placeholder="Input mobile phone number with out '-'"
        variant="outlined"
        value={front_profile.phone_number}
        onChange={(e) => setPhone(e.target.value ?? "")}
      />
    </Box>
  );
};

export default FormProfile;
