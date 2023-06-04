import React from 'react';
import {Box, styled} from '@mui/system';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import logoImage from "../../assets/logo-2.svg";
import LinkButton from "../UI/LinkButton";
import Logo from "../UI/Logo";
import Column from "../UI/Column";
import {At} from "phosphor-react";

const StyledContainer = styled(Container)(({theme}) => ({
    padding: theme.spacing(4),
}));

const FooterContainer = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
}));

const Description = styled('span')(({theme}) => ({
    ...theme.typography.body.tiny['400'],
    color: theme.palette.grey[0],
}));

const ColTitle = styled('h3')(({theme}) => ({
    ...theme.typography.heading['06'],
    marginTop: 0,
    marginBottom: theme.spacing(1),
}));

const ContactDescription = styled('span')(({theme}) => ({
    ...theme.typography.body.tiny[400],
    color: theme.palette.grey[0],
    marginButton: theme.spacing(0.5),
}));

const ContactInfo = styled('span')(({theme}) => ({
    ...theme.typography.body.smalls[400],
    color: theme.palette.grey[0],
    display: 'flex',
    gap: 8,
    alignItems: 'center'
}));

const Link = styled(LinkButton)(({theme}) => ({
    ...theme.typography.button.small,
}))

const Footer = () => {
    const aboutUsLinks = [
        {label: 'Посилання 1', href: '/link1'},
        {label: 'Посилання 2', href: '/link2'},
        {label: 'Посилання 3', href: '/link3'},
    ];

    const supportLinks = [
        {label: 'Посилання 4', href: '/link4'},
        {label: 'Посилання 5', href: '/link5'},
        {label: 'Посилання 6', href: '/link6'},
    ];

    return (
        <FooterContainer>
            <StyledContainer maxWidth="xl" component="footer">
                <Grid container justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={3} lg={2} mr={36}>
                        <Logo src={logoImage} alt="Logo"/>
                        <Description variant="body2">
                            Зручний, простий та ефективний додаток для вивчення української мови
                        </Description>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Column title="Про нас" links={aboutUsLinks}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Column title="Підтримка" links={supportLinks}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <ColTitle>
                            Контакти
                        </ColTitle>
                        <ContactDescription>Маєте запитання чи відгук? Ми будемо раді почути вас!</ContactDescription>
                        <ContactInfo><At size={24}/> example@example.com</ContactInfo>
                    </Grid>
                </Grid>
            </StyledContainer>
        </FooterContainer>
    );
};

export default Footer;
