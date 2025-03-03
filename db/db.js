const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://saadabbas594:WUSpb7xdKW5hMaV9@firstcluster.wfbvt.mongodb.net/?retryWrites=true&w=majority&appName=firstCluster")
        .catch((err) => console.log(err, "DB Connection Error"))
            console.log("MONGO DB CONNECTED")
    }
    catch (error) {
        console.log(error, "MONGO DB CONNECTION ERROR")
    }
}
module.exports = connectDB;
// connectDB()