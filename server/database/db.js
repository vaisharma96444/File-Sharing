import mongoose from "mongoose";




const DBConnection = async () => {
   

    const MONGO_URI =`mongodb://user:ploploplo@ac-8js11sq-shard-00-00.xrokjl5.mongodb.net:27017,ac-8js11sq-shard-00-01.xrokjl5.mongodb.net:27017,ac-8js11sq-shard-00-02.xrokjl5.mongodb.net:27017/?ssl=true&replicaSet=atlas-ufkisg-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;