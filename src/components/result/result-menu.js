import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/system';
import Image from 'next/image';

export const Program = {
    M: 'Musculoskeletal System',
    O: 'Organ System',
    C: 'Circulatory System',
    E: 'Emotion',
    A: 'Articular Joint',
    N: 'Circulatory System',
}

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

export const ResultMenu = ({ onSelectMenu }) => {
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
                        src={"/static/images/avatars/m.png"}
                        width={60}
                        height={60} />
                    <Box height={'8px'} />
                </>}
                label={Program.M}
                wrapped />
            <TabItem
                icon={<>
                    <Image
                        src={"/static/images/avatars/o.png"}
                        width={60}
                        height={60} />
                    <Box height={'8px'} />
                </>}
                label={`${Program.O} (digestion)`}
                wrapped />
            <TabItem icon={<>
                <Image
                    src={"/static/images/avatars/c.png"}
                    width={60}
                    height={60} />
                <Box height={'8px'} />
            </>}
                label={Program.C}
                wrapped />
            <TabItem
                icon={<>
                    <Image
                        src={"/static/images/avatars/e.png"}
                        width={60}
                        height={60} />
                    <Box height={'8px'} />
                </>} label={`${Program.E} (energy)`} wrapped />
            <TabItem
                icon={<>
                    <Image
                        src={"/static/images/avatars/a.png"}
                        width={60}
                        height={60} />
                    <Box height={'8px'} />
                </>} label={`${Program.A} (joint)`} disabled wrapped />
            <TabItem
                icon={<>
                    <Image
                        src={"/static/images/avatars/n.png"}
                        width={60}
                        height={60} />
                    <Box height={'8px'} />
                </>} label={Program.N} disabled wrapped />
        </TabRow>
    );
}
