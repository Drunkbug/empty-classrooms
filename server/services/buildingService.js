const buildingService = (app, buildingModel) => {
    const createBuilding = (req, res) => {
        const buildingName = req.body.buildingName;
        const building = {buildingName: buildingName, clasrooms: []};
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

export default buildingService;