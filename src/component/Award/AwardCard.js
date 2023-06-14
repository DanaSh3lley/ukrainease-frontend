import {Box, Typography} from '@mui/material';
import config from "../../config";
const imagesPath = `${config[process.env.NODE_ENV].images}`

const AwardCard = ({ award, levelStatus }) => {
    const { name, description, icon } = award.award;
    const { level } = levelStatus;
    const { levels } = award.award.criteria;

    const targetQuantity = levels.find((lvl) => lvl.level === level)?.targetQuantity;

    let opacity = 1;
    if (levelStatus.status === 'in progress') {
        opacity = 0.8;
    } else if (levelStatus.status === 'not started') {
        opacity = 0.5;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                padding: '24px',
                maxWidth: '250px',
                borderRadius: '16px',
                mt: 2,
                opacity: opacity,
            }}
        >
            <img src={`${imagesPath}/awards/${icon}`} alt={name} style={{ width: '80px', height: '80px', marginBottom: '16px' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {name} (Рівень {level})
            </Typography>
            {targetQuantity && (
                <Typography variant="body1" sx={{ mb: 1 }}>
                    Необхідна кількість: {targetQuantity}
                </Typography>
            )}
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
                {description}
            </Typography>
        </Box>
    );
};


export default AwardCard
