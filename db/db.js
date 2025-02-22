const mongoDB = require("mongoose")

const connectDB = async () => {
    try {
        await mongoDB.connect("mongodb+srv://saadabbas594:WUSpb7xdKW5hMaV9@firstcluster.wfbvt.mongodb.net/?retryWrites=true&w=majority&appName=firstCluster")
            .then(() => console.log("MONGO DB CONNECTED"))
            .catch((err) => console.log(err, "DB Connection Error"))
    }
    catch (error) {
        console.log(error, "MONGO DB CONNECTION ERROR")
    }
}
module.exports = connectDB;
// connectDB()