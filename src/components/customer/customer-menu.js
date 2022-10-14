import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon, Typography, Divider, Tab, Tabs,
} from '@mui/material';
import { useDialog } from '../dialogs/context';
import { useState } from 'react';
import { styled } from '@mui/system';
import Image from 'next/image';

const TabRow = styled(Tabs)({
    backgroundColor: '#F7F7F7',
    borderBottom: 'none',
    '& .MuiTabs-indicator': {
        backgroundColor: '#333',
    },
});

const TabItem = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    maxWidth: 120,
    [theme.breakpoints.up('sm')]: {
        minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(2),
    color: '#404040',
    fontFamily: theme.typography.fontFamily,
    '&:hover': {
        backgroundColor: '#DDD',
        opacity: 1,
    },
    '&.Mui-selected': {
        color: '#404040',
        backgroundColor: '#DDD',
        fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#DDD',
    },
}));

export const CustomerMenu = ({ onSelectMenu }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        onSelectMenu(newValue);
    };

    return (
        <TabRow value={value} onChange={handleChange} centered>
            <TabItem
                icon={<>
                    <Image
                        src={"/static/images/avatars/avatar_1.png"}
                        width={60}
                        height={60} />
                    <Box height={'8px'} />
                </>}
                label="Musculoskeletal system"
                wrapped />
            <TabItem
                icon={<>
                    <Image
                        src={"/static/images/avatars/avatar_2.png"}
                        width={60}
                        height={60} />
                    <Box height={'8px'} />
                </>}
                label="Organ system (digestion)"
                wrapped />
            <TabItem icon={<>
                <Image
                    src={"/static/images/avatars/avatar_3.png"}
                    width={60}
                    height={60} />
                <Box height={'8px'} />
            </>}
                label="Circulatory system"
                wrapped />
            <TabItem
                icon={<>
                    <Image
                        src={"/static/images/avatars/avatar_4.png"}
                        width={60}
                        height={60} />
                    <Box height={'8px'} />
                </>} label="Emotion (energy)" wrapped />
            <TabItem
                icon={<>
                    <Image
                        src={"/static/images/avatars/avatar_5.png"}
                        width={60}
                        height={60} />
                    <Box height={'8px'} />
                </>} label="Articular joint (joint)" disabled wrapped />
            <TabItem
                icon={<>
                    <Image
                        src={"/static/images/avatars/avatar_6.png"}
                        width={60}
                        height={60} />
                    <Box height={'8px'} />
                </>} label="Nervous system" disabled wrapped />
        </TabRow>
    );
}
