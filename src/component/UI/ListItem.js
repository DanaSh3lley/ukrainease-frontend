import React from 'react';
import { styled } from '@mui/system';

const StyledListItem = styled('li')({
    marginBottom: 0,
});

const ListItem = ({ children }) => {
    return <StyledListItem>{children}</StyledListItem>;
};

export default ListItem;
