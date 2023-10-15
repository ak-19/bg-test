import React, { useState } from 'react';

import { AppBar, Box, Button, InputBase, Toolbar } from '@mui/material';

import InputWrapper from './InputWrapper';

export default function PrimarySearchAppBar(props) {
    const [search, setSearch] = useState('');

    const handleKeyPress = (e) => e.charCode === 13 && props.searchMovies(search)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <InputWrapper>
                        <InputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={search}
                            onKeyPress={handleKeyPress}
                            onChange={(e) => { setSearch(e.target.value) }}
                        />
                    </InputWrapper>
                    <Button variant="contained" onClick={() => props.searchMovies(search)}>
                        Search
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}