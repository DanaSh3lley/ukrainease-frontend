import {Box} from "@mui/material";
import AwardCard from "./AwardCard";

const AwardsList = ({ awards, displayRandom }) => {
    const completedAwards = awards.filter((award) => {
        const completedLevels = award.status
            .filter((status) => status.status === 'completed')
            .map((status) => status.level);

        const filteredLevels = award.award.criteria.levels.filter((level) =>
            completedLevels.includes(level.level)
        );
        return filteredLevels.length > 0; // Include award if it has completed levels
    });

    const displayAwards = displayRandom
        ? completedAwards.sort(() => 0.5 - Math.random()).slice(0, 1)
        : awards;

    return (
        <Box sx={{alignItems: 'start'}}>
            {displayAwards.map((award) => (
                <Box key={award.award._id} sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    {award.award.criteria.levels.map((level) => {
                        const levelStatus = award.status.find((status) => status.level === level.level);
                        if (levelStatus) {
                            return (
                                <Box key={level._id} sx={{ ml: 2 }}>
                                    <AwardCard award={award} levelStatus={levelStatus} />
                                </Box>
                            );
                        }
                        return null;
                    })}
                </Box>
            ))}
        </Box>
    );
};


export default AwardsList