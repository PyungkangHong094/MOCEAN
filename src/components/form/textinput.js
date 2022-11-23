import TextField from "@mui/material/TextField";

import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";

const TextInput = styled(TextField)({
    [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "#121828"
    },
    [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "#121828"
    },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "#121828"
    },
    [`& .${outlinedInputClasses.input}`]: {
        color: "#121828"
    },
    [`&:hover .${outlinedInputClasses.input}`]: {
        color: "#121828"
    },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]: {
        color: "#121828"
    },
});

export default TextInput;