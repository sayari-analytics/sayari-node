// trade-search.mjs
import { SayariClient } from "../dist/index.js";
import config from "./config.mjs";

// Initialize the Sayari client
const client = new SayariClient({
    clientId: config.clientID,
    clientSecret: config.clientSecret,
    environment: config.baseURL,
});

// Search functions with error handling and logging
async function searchShipments(query) {
    try {
        const shipments = await client.trade.searchShipments({ q: query });
        config.logInfo(`Found ${shipments.data.length} shipments for query:`, query);
        return shipments.data;
    } catch (error) {
        config.logError("Error searching shipments", error);
    }
}

async function searchSuppliers(query) {
    try {
        const suppliers = await client.trade.searchSuppliers({ q: query });
        config.logInfo(`Found ${suppliers.data.length} suppliers for query:`, query);
        return suppliers.data;
    } catch (error) {
        config.logError("Error searching suppliers", error);
    }
}

async function searchBuyers(query) {
    try {
        const buyers = await client.trade.searchBuyers({ q: query });
        config.logInfo(`Found ${buyers.data.length} buyers for query:`, query);
        return buyers.data;
    } catch (error) {
        config.logError("Error searching buyers", error);
    }
}

// Main execution function
async function main() {
    const query = "microcenter";

    // Execute searches and log results
    await searchShipments(query);
    await searchSuppliers(query);
    await searchBuyers(query);
}

// Run the main function and catch any unhandled errors
main().catch((error) => config.logError("Fatal error during execution", error));
