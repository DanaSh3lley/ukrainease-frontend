import {Button} from "@mui/material";
import {styled} from "@mui/system";

const CustomButton = styled(Button)(({theme}) => ({
    ...theme.typography.button.regular,
    borderRadius: '8px',
    padding: '12px 32px'
}))

export default CustomButton