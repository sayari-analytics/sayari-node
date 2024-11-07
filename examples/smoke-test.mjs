import * as dotenv from "dotenv";
import { SayariClient } from "../dist/index.js";

// INSTRUCTIONS FOR RUNNING THIS SCRIPT:
// 1. Install the sayari SDK:
//    - Build the client module `yarn build`
//        or
//    - Install (`npm install --save @sayari/sdk` or `yarn add @sayari/sdk`) and update above import statement to import from "@sayari/sdk"
// 2. Provide credentials in the form of clientID and clientSecret in one of two ways.
//    - Export 'CLIENT_ID' and 'CLIENT_SECRET' values into the environment where this is to be run.
//        or
//    - Create .env file at project root that include 'CLIENT_ID' and 'CLIENT_SECRET'

// Pull Client creds from ENV file
dotenv.config({ path: '../.env' });
dotenv.config();
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const baseURL = process.env.BASE_URL ||  'https://api.sayari.com'

// Create an authenticated sayari client
const client = new SayariClient({ clientId: clientID, clientSecret: clientSecret, environment: baseURL })

// list sources
const sources = await client.source.listSources();
console.log("Found", sources.data.length, "sources")

// get the first source
const firstSource = await client.source.getSource(sources.data[0].id)
console.log("First source is:", firstSource.label)

// search for an entity
const search_term = "victoria beckham limited"
const entitySearchResults = await client.search.searchEntity({q: search_term})
console.log("Found", entitySearchResults.data.length, "entity results for ", search_term)

const firstEntityResult = entitySearchResults.data[0].id

// get entity summary
const entitySummary = await client.entity.entitySummary(firstEntityResult)
console.log("Has address:", entitySummary.addresses[0])


// get the full entity
const entityDetails = await client.entity.getEntity(firstEntityResult)
console.log("Is referenced by", entityDetails.referencedBy.data.length, "sources") // type: ignore

// resolve
const resolution = await client.resolution.resolution({name: search_term})
console.log("Resolved to", resolution.data.length, "entities")

// search for record
const recordSearch = await client.search.searchRecord({q: search_term})
console.log("Found", recordSearch.data.length, "records.")

// get record
console.log(recordSearch.data[0].id)
const record = await client.record.getRecord(recordSearch.data[0].id)
console.log("Found record:", record.label)

// do traversal
const traversal = await client.traversal.traversal(firstEntityResult)
console.log("Did traversal of entity", firstEntityResult, "Found", traversal.data.length, "related things.")

// do UBO traversal
const ubo = await client.traversal.ubo(firstEntityResult)
console.log("Found", ubo.data.length, "beneficial owners")

// ownership
const downstream = await client.traversal.ownership(ubo.data[0].target.id)
console.log("Found", downstream.data.length, "downstream things owned by the first UBO of", search_term)

// Fetch an entity likely to be associated with watch lists
const putinResult = await client.search.searchEntity({q: "putin"})
// Check watchlist
const watchlist = await client.traversal.watchlist(putinResult.data[0].id)
console.log("Found", watchlist.data.length, "watchlist results for entity", putinResult.data[0].id)

// shortest path
const shortestPath = await client.traversal.shortestPath({entities: [firstEntityResult, ubo.data[0].target.id]})
console.log("Found path with", shortestPath.data[0].path.length, "hops")

// Usage
const usage = await client.info.getUsage()
console.log("Entity summary usage: ", usage.usage.entitySummary)

// History
const history = await client.info.getHistory({size: 10000, from_: "2024-04-20", to: "2024-04-21"})
console.log("Found", history.events.length, "events from 2024-04-20 to 2024-04-21")

