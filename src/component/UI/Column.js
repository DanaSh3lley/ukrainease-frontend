import React from 'react';
import { styled } from '@mui/system';
import LinkButton from '../UI/LinkButton';

const ColumnWrapper = styled('div')(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

const Title = styled('h3')(({ theme }) => ({
    ...theme.typography.heading['06'],
    marginBottom: theme.spacing(1),
    marginTop: 0
}));

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
});

const ListItem = styled('li')({
    marginBottom: 0,
});

const Column = ({ title, links }) => {
    return (
        <ColumnWrapper>
            <Title>{title}</Title>
            <List>
                {links.map((link) => (
                    <ListItem key={link.href}>
                        <LinkButton component="a" href={link.href} size="small">
                            {link.label}
                        </LinkButton>
                    </ListItem>
                ))}
            </List>
        </ColumnWrapper>
    );
};

export default Column;
