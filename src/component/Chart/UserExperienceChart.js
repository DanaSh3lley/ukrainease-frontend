import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, registerables } from 'chart.js';
import { styled } from '@mui/system';
import CustomButton from "../UI/CustomButton";

Chart.register(CategoryScale, ...registerables);

const ChartContainer = styled('div')({
    width: '800px',
    height: '400px',
    margin: '0 auto',
});

const ButtonContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
});



const UserExperienceChart = ({ dailyExperiences }) => {
    const [currentWeek, setCurrentWeek] = useState(0);

    const data = {
        dailyExperiences,
    };

    const getWeekStartAndEndDates = (weekIndex) => {
        const today = new Date();
        const weekStart = new Date(today);
        weekStart.setDate(weekStart.getDate() - ((weekStart.getDay() + 6) % 7) + weekIndex * 7);
        const weekEnd = new Date(today);
        weekEnd.setDate(weekEnd.getDate() - ((weekEnd.getDay() + 6) % 7) + 6 + weekIndex * 7);
        return { weekStart, weekEnd };
    };

    const { weekStart, weekEnd } = getWeekStartAndEndDates(currentWeek);
    const labels = [];
    const points = [];

    data.dailyExperiences.forEach((experience) => {
        const experienceDate = new Date(experience.date);
        if (new Date(experienceDate).setHours(24, 0, 0, 0) >= new Date(weekStart).setHours(24, 0, 0, 0) && new Date(experienceDate).setHours(24, 0, 0, 0) <= new Date(weekEnd).setHours(24, 0, 0, 0)) {
            const options = { weekday: 'short', month: 'short', day: 'numeric' };
            labels.push(experienceDate.toLocaleDateString('en-US', options));
            points.push(experience.points);
        }
    });

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Points',
                data: points,
            },
        ],
    };

    const goToPreviousWeek = () => {
        setCurrentWeek((prevWeek) => prevWeek - 1);
    };

    const goToCurrentWeek = () => {
        setCurrentWeek(0);
    };

    const chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            filler: {
                propagate: true, // Fill the area beneath the line
            },
        },
        scales: {
            x: {
                grid: {
                    display: true,
                },
            },
            y: {
                grid: {
                    display: true,
                },
                beginAtZero: true,
            },
        },
        elements: {
            point: {
                radius: 0, // Disable data points
            },
            line: {
                tension: 0.2, // Make the line more rounded
                borderColor: '#7A5AF8',
                borderWidth: 3,
                borderCapStyle: 'round', // Rounded line caps
                borderJoinStyle: 'round', // Rounded line joins
            },
        },
    };

    return (
        <ChartContainer>
            <Line data={chartData} options={chartOptions} />
            <ButtonContainer>
                <CustomButton color={'primary'} variant="text" onClick={goToPreviousWeek}>Previous Week</CustomButton>
                <CustomButton color={'primary'} variant="contained" onClick={goToCurrentWeek}>Current Week</CustomButton>
            </ButtonContainer>
        </ChartContainer>
    );
};

export default UserExperienceChart;