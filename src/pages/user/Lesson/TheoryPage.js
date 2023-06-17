import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Step, StepLabel, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { getLesson } from "../../../actions/singleLessonActions";
import { useNavigate, useParams } from "react-router-dom";
import CustomStepper from "../../../component/UI/CustomStepper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CustomButton from "../../../component/UI/CustomButton";

const RootContainer = styled(Container)({
  margin: "60px auto",
  padding: "16px",
  display: "flex",
  flex: 1,
});

const StyledBadge = styled("span")(({ theme }) => ({
  ...theme.typography.body.tiny["300"],
  backgroundColor: theme.palette.primary["600"],
  color: theme.palette.gray["0"],
  padding: "8px 12px",
  borderRadius: theme.spacing(2),
}));

const StyledPaper = styled(Paper)(() => ({
  padding: "32px",
  elevation: 3,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flex: "1",
}));

const TheoryText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body.regular["400"],
  width: "100%", // Take up all available width
}));
styled(Step)(({ theme }) => ({
  width: "100%",
  backgroundColor: "transparent",
  border: "none",
}));
styled(StepLabel)(({ theme }) => ({
  "& .MuiStepIcon-root": {
    color: theme.palette.primary.main,
    fontSize: "1.2rem",
    "&.MuiStepIcon-active": {
      color: theme.palette.secondary.main,
    },
    "&.MuiStepIcon-completed": {
      color: theme.palette.text.disabled,
    },
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.heading["02"],
  display: "flex",
  gap: "8px",
  alignItems: "center",
  justifyContent: "center",
}));

const getTheory = (lesson) => {
  return { __html: lesson?.theory }
};

const TheoryPage = () => {
  const theory = useSelector((state) => state.lesson.lesson);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const { lesson, lessonProgress, isLoading } = useSelector(
    (state) => state.lesson
  );
  useEffect(() => {
    if (!isLoading) {
      dispatch(getLesson(lessonId));
    }
  }, [dispatch]);

  console.log(theory);
  const handleNextStep = () => {
    navigate(`/question/${lessonId}`);
  };

  return (
    <RootContainer maxWidth={"xl"}>
      <Grid sx={{ flex: 1 }}>
        <Title component="h1" gutterBottom>
          {lesson?.name} <StyledBadge>Theory</StyledBadge>
        </Title>
        <StyledPaper>
          <TheoryText dangerouslySetInnerHTML={getTheory(lesson)} />
          <CustomButton
            sx={{ marginTop: "16px" }}
            variant="contained"
            color="primary"
            onClick={handleNextStep}
          >
            Далі
          </CustomButton>
        </StyledPaper>
      </Grid>
      <CustomStepper activeStep={1} />
    </RootContainer>
  );
};

export default TheoryPage;
