import React from 'react';
import {Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material';
import {styled} from "@mui/system";

const FilterSectionWrapper = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    borderRadius: 16,
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems:'flex-start',
    justifyContent: 'space-between',
}));

const FilterFormControl = styled('div')(({ theme }) => ({
    marginRight: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
}));

const FilterLabel = styled('div')(({ theme }) => ({
    ...theme.typography.heading['06'],
}));

const FilterCheckbox = styled(Checkbox)(({ theme }) => ({
    ...theme.typography.body['regular.400'],
}));


const FilterRadioGroup = styled(RadioGroup)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
}));
const FilterSection = ({
                           levelFilter,
                           setLevelFilter,
                           categoryFilter,
                           setCategoryFilter,
                           tagsFilter,
                           setTagsFilter,
                           applyFilters,
                           categories,
                           tags
                       }) => {
    const handleLevelFilterChange = (event) => {
        setLevelFilter(event.target.value);
    };

    const handleCategoryFilterChange = (event) => {
        const {value, checked} = event.target;
        if (checked) {
            setCategoryFilter((prevFilters) => [...prevFilters, value]);
        } else {
            setCategoryFilter((prevFilters) => prevFilters.filter((filter) => filter !== value));
        }
    };

    const handleTypeFilterChange = (event) => {
        const {value, checked} = event.target;
        if (checked) {
            setTagsFilter((prevFilters) => [...prevFilters, value]);
        } else {
            setTagsFilter((prevFilters) => prevFilters.filter((filter) => filter !== value));
        }
    };

    const handleApplyFilters = () => {
        applyFilters();
    };

    return (
        <FilterSectionWrapper>
            <FilterRadioGroup
                aria-label="level"
                name="level"
                value={levelFilter}
                onChange={handleLevelFilterChange}
            >
                <FilterLabel>Level</FilterLabel>
                {['1', '2', '3'].map((level) => (
                    <FormControlLabel
                        key={level}
                        value={level}
                        control={<Radio />}
                        label={`Рівень ${level}`}
                    />
                ))}
            </FilterRadioGroup>
            <FilterFormControl>
                <FilterLabel>Category Filter</FilterLabel>
                {categories.map((category) => (
                    <FormControlLabel
                        key={category}
                        control={
                            <FilterCheckbox
                                checked={categoryFilter.includes(category)}
                                onChange={handleCategoryFilterChange}
                                value={category}
                            />
                        }
                        label={category}
                    />
                ))}
            </FilterFormControl>
            <FilterFormControl>
                <FilterLabel>Type Filter</FilterLabel>
                {tags.map((tag) => (
                    <FormControlLabel
                        key={tag}
                        control={
                            <FilterCheckbox
                                checked={tagsFilter.includes(tag)}
                                onChange={handleTypeFilterChange}
                                value={tag}
                            />
                        }
                        label={tag}
                    />
                ))}
            </FilterFormControl>
            <Button variant="contained" color="primary" onClick={handleApplyFilters}>
                Apply Filters
            </Button>
        </FilterSectionWrapper>
    );
};

export default FilterSection;
