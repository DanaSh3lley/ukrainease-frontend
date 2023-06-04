import {styled} from "@mui/system";
import Button from "@mui/material/Button";

const LinkButton = styled(Button)(({theme}) => ({
    ...theme.typography.button.regular,
    color: theme.palette.common.white,
    textDecoration: 'none',
    marginLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    margin: 0,
    '&:hover': {
        backgroundColor: theme.palette.primary['600'],
    },
    '&:focus': {
        backgroundColor: theme.palette.primary['700'],
        border: '2px solid ' + theme.palette.gray['0']
    },
}));

export default LinkButton