import * as dotenv from "dotenv";
import { SayariClient } from "../dist/index.js";

// INSTRUCTIONS FOR RUNNING THIS SCRIPT:
// 1. Create .env file at project root that include 'CLIENT_ID' and 'CLIENT_SECRET'
// 2. Build the client module `yarn build`

// Pull Client creds from ENV file
dotenv.config({ path: '../.env' });
dotenv.config();
var clientID = process.env.CLIENT_ID;
var clientSecret = process.env.CLIENT_SECRET;

// Create an authenticated sayari client
const sayari = new SayariClient({ clientId: clientID, clientSecret: clientSecret })

// Call the hello world helper function to make sure the wrapper is working
sayari.myHelper()

// Attempt to get an entity summary
const resp = await sayari.entity.entitySummary("mGq1lpuqKssNWTjIokuPeA")
    .then(resp => {
        return resp})
    .catch(err=> {
        console.log("Error!!")
        return err
    })

console.log(resp)

