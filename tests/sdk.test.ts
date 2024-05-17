import { SayariClient } from "../src/index";

var clientID = String(process.env.CLIENT_ID);
var clientSecret = String(process.env.CLIENT_SECRET);
var baseURL = 'https://api.sayari.com';

// use BASE_URL if provided
if (process.env.BASE_URL) {
    baseURL = String(process.env.BASE_URL)
}

expect(clientID).not.toBe('');
expect(baseURL).not.toBe('');

const longTimeout = 10000 // 10s

const client = new SayariClient({
    clientId: clientID,
    clientSecret: clientSecret,
    environment: baseURL
});

describe("SDK", () => {
    test("sources", async () => {
        const sources = await client.source.listSources();
        expect(sources.data.length).toBeGreaterThanOrEqual(250)
    }, longTimeout);

    test("entities", async () => {
        const randString = generateRandomString(3)

        // Test POST
        const entitySearchResults = await client.search.searchEntity({q: randString});
        expect(entitySearchResults.data.length).toBeGreaterThan(0)

        // Test GET
        const entitySearchResultsGet = await client.search.searchEntityGet({q: randString});
        expect(entitySearchResultsGet.data.length).toBeGreaterThan(0)

        // results should match
        expect(entitySearchResults.data.length).toEqual(entitySearchResultsGet.data.length)

        // Use first entity for testing
        const firstEntity = entitySearchResults.data[0]
        console.log(firstEntity.id)
        console.log(firstEntity.label)

        // Test entity summary
        const entitySummary = await client.entity.entitySummary(firstEntity.id);
        expect(entitySummary.label).toEqual(firstEntity.label)
        expect(entitySummary.degree).toEqual(firstEntity.degree)
        expect(entitySummary.pep).toEqual(firstEntity.pep)
        expect(entitySummary.psaCount).toEqual(firstEntity.psaCount)
        expect(entitySummary.type).toEqual(firstEntity.type)

        // Get entity details
        const entityDetails = await client.entity.getEntity(firstEntity.id);
        expect(entityDetails.label).toEqual(firstEntity.label)
        expect(entityDetails.degree).toEqual(firstEntity.degree)
        expect(entityDetails.pep).toEqual(firstEntity.pep)
        expect(entityDetails.psaCount).toEqual(firstEntity.psaCount)
        expect(entityDetails.type).toEqual(firstEntity.type)
    });
});

function generateRandomString(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    while (result.length < length) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
