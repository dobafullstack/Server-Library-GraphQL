import mongoose from "mongoose";

const connect = () => {
    mongoose
        .connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("DB is connected");
        })
        .catch((err) => console.error(err.message));
};

export default connect;
