import { SayariClient } from "../dist/index.js";

// NOTE: To connect you most provide your client ID and client secret. To avoid accidentally checking these into git,
// it is recommended to use ENV variables
var clientID = process.env.CLIENT_ID;
var clientSecret = process.env.CLIENT_SECRET;

// Create an authenticated sayari client
const client = new SayariClient({ clientId: clientID, clientSecret: clientSecret })

// resolve an entity
const resolution = await client.resolution.resolution({name: "Victoria Beckham"});

// Get the entity details for the best match
const entityDetails = await client.entity.getEntity(resolution.data[0].entityId)
console.log(entityDetails)
