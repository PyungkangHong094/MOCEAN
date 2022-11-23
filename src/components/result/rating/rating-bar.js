import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

const Bar = ({ color, enable = false }) => {
    const bgColor = enable ? color : '#E6E6E6';
    return (
        <Box sx={{ flex: 1, height: 8, mx: 0.5, backgroundColor: bgColor, borderRadius: 1 }} />);
}

const RatingBar = ({ title, rating }) => {
    return (
        <Box my={2}>
            <Typography m={0.5}>
                {title}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', minWidth: 350 }}>
                <Bar color='#C1282D' enable={rating > 0} />
                <Bar color='#F7931F' enable={rating > 1} />
                <Bar color='#FCEE21' enable={rating > 2} />
                <Bar color='#8CC63F' enable={rating > 3} />
            </Box>
        </Box>);
}

export default RatingBar;