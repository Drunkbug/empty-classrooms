const mongoose = require('mongoose');
const Building = mongoose.model('buildings');

module.exports = (app) => {
    app.post('/api/buildings', (req, res) => {
        const { name } = req.body;

        const building = new Building({
            name,
            classrooms: [],
        });
        return building;
    });
};