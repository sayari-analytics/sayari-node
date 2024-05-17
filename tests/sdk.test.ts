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

const longTimeout = 30000 // 30s

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
        let done = false;
        while (!done) {
            const randString = generateRandomString(3)

            // Test POST
            const entitySearchResults = await client.search.searchEntity({q: randString});
            if (entitySearchResults.data.length == 0) {
                continue
            }
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

            done = true
        }

    }, longTimeout);

    test("resolution", async () => {
        let done = false;
        while (!done) {
            const randString = generateRandomString(3)

            const resolution = await client.resolution.resolution({name: randString});
            if (resolution.data.length == 0) {
                continue
            }
            expect(resolution.data.length).toBeGreaterThan(0)
            expect(resolution.fields.name).toEqual([randString])

            done = true
        }
    });

    test("records", async () => {
        let done = false;
        while (!done) {
            const randString = generateRandomString(3)

            // Test POST
            const records = await client.search.searchRecord({q: randString});
            if (records.data.length == 0) {
                continue
            }
            expect(records.data.length).toBeGreaterThan(0)

            // Test GET
            const recordsGet = await client.search.searchRecordGet({q: randString});
            expect(recordsGet.data.length).toBeGreaterThan(0)

            // results should match
            expect(records.data.length).toEqual(recordsGet.data.length)

            // Use first record for testing
            const firstRecord = records.data[0]
            console.log(firstRecord.id)
            console.log(firstRecord.label)

            // Get record details
            const recordDetails = await client.record.getRecord(firstRecord.id);
            expect(recordDetails.label).toEqual(firstRecord.label)
            expect(recordDetails.source).toEqual(firstRecord.source)
            expect(recordDetails.publicationDate).toEqual(firstRecord.publicationDate)
            expect(recordDetails.recordUrl).toEqual(firstRecord.recordUrl)
            expect(recordDetails.referencesCount).toEqual(firstRecord.referencesCount)
            expect(recordDetails.sourceUrl).toEqual(firstRecord.sourceUrl)

            done = true
        }
    }, longTimeout);

    // Test traversals

    // Test shipment search

    // Test supplier search

    // Test buyer search

    // Test usage

    // Test history

});

function generateRandomString(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    while (result.length < length) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
