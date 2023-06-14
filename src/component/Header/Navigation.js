import LinkButton from "../UI/LinkButton";
import {styled} from "@mui/system";

const NavigationWrapper = styled('nav')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(3),
}));

const Navigation = ({ links }) => {
    return (
        <NavigationWrapper>
            {links.map((link) => (
                <LinkButton key={link.href} component="a" href={link.href}>
                    {link.label}
                </LinkButton>
            ))}
        </NavigationWrapper>
    );
};

export default Navigation