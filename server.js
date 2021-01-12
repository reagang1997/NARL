const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://reagan:reagan01@narl.onb9j.mongodb.net/NARLdb?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected to NARLdb")
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
const app = express();
app.use(express.json());

collection = database.collection("NARLdb");
console.log(connection)
main().catch(console.error);

const Schema= mongoose.Schema;
const ObjectId = Schema.Types.ObjectID;

const driverSchema = new Schema({
    name: String,
    careerPoints: Number,
    careerWins: Number,
    careerPodiums: Number,
    currentTeam: String,
    WDC: Number,
    WCC: Number
});


const driverModel = mongoose.model('driverModel', driverSchema );

//Create a User!
app.post('/driver', async (req, res) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
})




async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

app.listen(8080);