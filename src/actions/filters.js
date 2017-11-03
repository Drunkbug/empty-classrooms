// SET_TEXT_FILTER
export const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text,
});

// SET_DATE_RANGE_FILTER
export const setDateRangeFilter = (startDate, endDate) => ({
    type: 'SET_DATE_RANGE_FILTER',
    startDate,
    endDate,
});