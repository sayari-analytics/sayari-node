// Import necessary modules and initialize environment configuration
import { SayariClient } from "../dist/index.js";

// Dynamically import `dotenv` and load environment variables only once
const dotenv = await import("dotenv");
dotenv.config();

// Load and validate credentials from environment variables
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// CLIENT_ID and CLIENT_SECRET - check if present
if (!clientID || !clientSecret) {
    console.error(
        "Error:   CLIENT_ID and CLIENT_SECRET must be set in the environment variables \n \
        Please refer to Sayari documentation!"
    );
    process.exit(1);
}

/**
 * Initializes and returns an authenticated Sayari client
 * @returns {SayariClient} - Authenticated Sayari client instance
 */
function createSayariClient() {
    try {
        return new SayariClient({ clientId: clientID, clientSecret: clientSecret });
    } catch (error) {
        console.error("Failed to initialize SayariClient:", error.message);
        process.exit(1);
    }
}

/**
 * Resolves an entity and fetches its details
 * @param {string} name - The name of the entity to resolve
 */
async function resolveEntityDetails(name) {
    const client = createSayariClient();
    try {
        // Resolve entity
        const resolution = await client.resolution.resolution({ name });
        if (!resolution.data || resolution.data.length === 0) {
            console.log(`No entity found for the name: ${name}`);
            return;
        }

        // Fetch details of the best match
        const entityDetails = await client.entity.getEntity(resolution.data[0].entityId);
        console.log("Entity Details:", entityDetails);
    } catch (error) {
        console.error(`Error resolving entity "${name}":`, error.message);
    }
}

// Main execution
const entityName = "Victoria Beckham";
resolveEntityDetails(entityName);
