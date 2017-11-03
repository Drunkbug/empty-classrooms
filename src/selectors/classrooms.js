// get visible classrooms
const getVisibleClassrooms = (classrooms, {text, startDate, endDate}) => {
    return classrooms.filter((classroom) => {
        const startDateMatch = typeof startDate !== 'number' || 
            classroom.schedule.every(s => s.startDate < startDate); // TODO check 
        const endDateMatch = typeof endDate !== 'number' ||
            !classroom.schedule.every(s => s.endDate > endDate);
        const textMatch = classroom.name.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    });
};

export default getVisibleClassrooms;