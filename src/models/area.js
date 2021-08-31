import mongoose from "mongoose";

const areaSchema = new mongoose.Schema({
    area: {type: String, require: true, trim: true, maxLength: 20},
    scourt: {type: String, require: true, trim: true, maxLength: 20},
    switchip: {type: String, require: true, trim: true, minlength: 7, maxLength: 15 },
    community: {type: String, require: true },
    network: [{type: String, require: true, trim: true, minlength: 7, maxLength: 15 }],
    subnet: {type: String, require: true, trim: true, minlength: 7, maxLength: 15 },
});

const Area = mongoose.model("Area", areaSchema);

export default Area;


// input(placeholder="Area", required, type="text", name="area" maxlength="20")
// input(placeholder="Scourt", required, type="text", name="scourt" maxlength="20")
// input(placeholder="switchip", required, type="text" name="switchip", maxlength="15")
// input(placeholder="Community", required, type="text" name="community")
// input(placeholder="Network", required, type="text", name="network" maxlength="15")
// input(placeholder="Subnet", required, type="text", name="subnet",maxlength="15")
