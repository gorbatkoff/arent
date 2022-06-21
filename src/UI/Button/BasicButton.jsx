import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({ text }) {
    return (
        <Button variant="contained"
        sx={{
            background: "#316BFE",
            borderRadius: "7px",
            color: "white",
            textTransform: "none",
            padding: "15px 27px",
            fontSize: "14px"
        }}
        >
            {text}
        </Button>
    );
}
