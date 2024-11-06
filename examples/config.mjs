// config.mjs
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import { SayariError } from "@sayari/sdk";

// Define potential paths for the .env file
const currentPath = path.resolve(".env");
const parentPath = path.resolve("../.env");

// Load environment variables from the appropriate .env file
if (fs.existsSync(currentPath)) {
    dotenv.config({ path: currentPath });
} else if (fs.existsSync(parentPath)) {
    dotenv.config({ path: parentPath });
} else {
    console.warn("Warning: .env file not found in current or parent directory.");
}

const config = {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    baseURL: process.env.BASE_URL || "https://api.sayari.com",

    logInfo(message, data = null) {
        console.log(`[INFO]: ${message}`, data || "");
    },

    logError(message, error = null) {
        if (error instanceof SayariError) {
            console.error(`[ERROR]: ${message}`);
            console.error(`Status Code: ${error.statusCode}`);
            console.error(`Message: ${error.message}`);
            console.error(`Body: ${error.body}`);
        } else {
            console.error(`[ERROR]: ${message}`, error || "");
        }
    },
};

// CLIENT_ID and CLIENT_SECRET - check if present
if (!config.clientID || !config.clientSecret) {
    config.logError(
        "Error: CLIENT_ID and CLIENT_SECRET must be set in the environment variables. \n" +
            "Please refer to Sayari documentation!"
    );
    process.exit(1);
}

export default config;
