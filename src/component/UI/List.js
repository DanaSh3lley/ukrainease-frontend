import {styled} from "@mui/system";

const StyledList = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
});

const List = ({ children }) => {
    return <StyledList>{children}</StyledList>;
};

export default List