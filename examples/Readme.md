# Node SDK Documentation

This repository contains several scripts designed to interact with the Sayari API for entity resolution and trade data searches. Each file serves a specific purpose, from basic API client configuration to various test scripts.

## Files Overview

### 1. `hello-world.mjs`

This script demonstrates a basic entity resolution process with the Sayari API. It loads the necessary environment variables, initializes the API client, and resolves an entity.

- **Steps**:
  - Loads environment variables using `dotenv`.
  - Validates `CLIENT_ID` and `CLIENT_SECRET`.
  - Initializes a Sayari API client with these credentials.
  - Resolves an entity by name and retrieves its details.

- **Execution**:
  - The script resolves an entity (default name: "Victoria Beckham") and logs the entity details.

### 2. `config.mjs`

This file manages configuration and loading environment variables required by the other scripts. It uses the `dotenv` library to load variables from a `.env` file, checking both the current directory and the parent directory if the file is not found.

- **Environment Variables**:
  - `CLIENT_ID`: The client ID required for authentication with the Sayari API.
  - `CLIENT_SECRET`: The client secret required for authentication.
  - `BASE_URL`: The base URL for the API, defaulting to `https://api.sayari.com`.

- **Functions**:
  - `logInfo(message, data)`: Logs informational messages.
  - `logError(message, error)`: Logs error messages with enhanced error details for `SayariError`.

- **Enhanced Error Handling**:
  - If an error is an instance of `SayariError`, `logError` will log additional details such as `statusCode`, `message`, and `body` to help diagnose API issues.
  - Checks if `CLIENT_ID` and `CLIENT_SECRET` are set. If missing, the program exits with an error message.

### 3. `smoke-test.mjs`

This file is a test script that performs a series of basic API calls to ensure that essential functionalities of the Sayari API are working correctly.

- **Functions**:
  - `listSources()`: Lists available sources from the API.
  - `getSource(sourceId)`: Retrieves details of a specific source.
  - `searchEntity(name)`: Searches for an entity by name.

- **Main Execution**:
  - The `main()` function coordinates the calls, listing sources, retrieving the first source, and searching for a specific entity ("victoria beckham limited").
  - Each action is logged, with robust error handling using `config.logError` for detailed logging in case of `SayariError`.

### 4. `trade-search.mjs`

This script is tailored for performing trade-related searches within the Sayari API. It allows users to search for shipments, suppliers, and buyers based on a query.

- **Functions**:
  - `searchShipments(query)`: Searches for shipments with the provided query and logs the results.
  - `searchSuppliers(query)`: Searches for suppliers with the provided query.
  - `searchBuyers(query)`: Searches for buyers with the provided query.

- **Main Execution**:
  - The script searches for entities related to the query `"microcenter"` in each of the categories (shipments, suppliers, buyers).
  - Each search result is logged, and errors are managed with enhanced `SayariError` handling.

## Requirements

- Node.js installed on your system.
- The `dotenv` package for environment variable management.
- Ensure that a `.env` file is present either in the current or parent directory with valid credentials (`CLIENT_ID`, `CLIENT_SECRET`, and optionally `BASE_URL`).

## Usage

1. Install dependencies:
   ```bash
   npm install dotenv
   ```

2. Set up your `.env` file with the necessary credentials.

3. Run any of the scripts with Node.js. For example:
   ```bash
   node smoke-test.mjs
   ```
   The scripts can also be executed from the root of the repository.
   ```bash
   node examples/smoke-test.mjs
   ```

## Notes

- These scripts are designed for testing and validation of Sayari API endpoints.
- Ensure that API credentials are kept secure and not shared.
  - Please contact Sayari for credentials if you do not have them.
