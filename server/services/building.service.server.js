module.exports = (app, buildingModel) => {
    const createBuilding = (req, res) => {
        const building = req.body.building;
        buildingModel
            .createBuilding(building)
            .then(
                (building) => {
                    res.json(building);
                },
                (err) => {
                    res.status(400).send("Something went wrong");
                }
            );
    };
    app.post("/api/ec/building/create", createBuilding);
};