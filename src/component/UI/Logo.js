import {styled} from "@mui/system";

const LogoImage = styled('img')({
    display: 'inline-block',
});

const Logo = ({ src, alt, height }) => {
    return <a href={'/'}> <LogoImage src={src} alt={alt} height={height} /> </a>
};

export default Logo