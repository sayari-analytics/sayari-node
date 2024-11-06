// smoke-test.mjs
import { SayariClient } from "../dist/index.js";
import config from "./config.mjs";

// Initialize the Sayari client
const client = new SayariClient({
    clientId: config.clientID,
    clientSecret: config.clientSecret,
    environment: config.baseURL,
});

// Utility functions for each API action
async function listSources() {
    try {
        const sources = await client.source.listSources();
        config.logInfo("Found sources", sources.data.length);
        return sources.data;
    } catch (error) {
        config.logError("Error listing sources", error);
    }
}

async function getSource(sourceId) {
    try {
        const source = await client.source.getSource(sourceId);
        config.logInfo("First source:", source.label);
        return source;
    } catch (error) {
        config.logError("Error fetching source", error);
    }
}

async function searchEntity(name) {
    try {
        const results = await client.search.searchEntity({ q: name });
        config.logInfo(`Found ${results.data.length} entity results for`, name);
        return results.data[0]?.id;
    } catch (error) {
        config.logError("Error searching for entity", error);
    }
}

// Main execution function
async function main() {
    // List sources
    const sources = await listSources();
    if (!sources || sources.length === 0) return;

    // Get first source if available
    const firstSourceId = sources[0]?.id;
    if (firstSourceId) {
        await getSource(firstSourceId);
    }

    // Entity Search and Details
    const searchTerm = "victoria beckham limited";
    const entityId = await searchEntity(searchTerm);
    if (!entityId) return;

    // Fetch and log entity details if needed
    config.logInfo("Entity ID found:", entityId);
}

// Run the main function and catch any unhandled errors
main().catch((error) => config.logError("Fatal error during execution", error));
