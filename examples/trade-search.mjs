import * as dotenv from "dotenv";
import { SayariClient } from "../dist/index.js";

// Pull Client creds from ENV file
dotenv.config({ path: '../.env' });
dotenv.config();
var clientID = process.env.CLIENT_ID;
var clientSecret = process.env.CLIENT_SECRET;
var baseURL = 'https://api.sayari.com';

// use BASE_URL if provided
if (process.env.BASE_URL) {
    baseURL = String(process.env.BASE_URL)
}

// Create an authenticated sayari client
const client = new SayariClient({ clientId: clientID, clientSecret: clientSecret, environment: baseURL })

// Search for shipments
const shipments = await client.trade.searchShipments({q:"microcenter"})
console.log("Found", shipments.data.length, "shipments.")

// Search for suppliers
const suppliers = await client.trade.searchSuppliers({q:"microcenter"})
console.log("Found", suppliers.data.length, "suppliers.")

// Search for buyers
const buyers = await client.trade.searchBuyers({q:"microcenter"})
console.log("Found", buyers.data.length, "buyers.")
