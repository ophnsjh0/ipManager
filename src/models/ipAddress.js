import mongoose from "mongoose";

const ipSchema = new mongoose.Schema({
    area: {type: String, require: true, trim: true, maxLength: 20},
    scourt: {type: String, require: true, trim: true, maxLength: 20},
    switchip: {type: String, require: true, trim: true, minlength: 7, maxLength: 15 },
    community: {type: String, require: true },
    network: [{type: String, require: true, trim: true, minlength: 7, maxLength: 15 }],
    subnet: {type: String, require: true, trim: true, minlength: 7, maxLength: 15 },
});

const IpSchema = mongoose.model("IP", ipSchema);

export default IpSchema;
