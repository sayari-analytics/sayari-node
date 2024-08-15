import { SayariClient } from "../src/index";

const clientID = String(process.env.CLIENT_ID);
const clientSecret = String(process.env.CLIENT_SECRET);
const baseURL = process.env.BASE_URL ||  'https://api.sayari.com'

expect(clientID).not.toBe('');
expect(baseURL).not.toBe('');

const longTimeout = 100000

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
        while (true) {
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

            break
        }

    }, longTimeout);

    test("resolution", async () => {
        while (true) {
            const randString = generateRandomString(3)

            const resolution = await client.resolution.resolution({name: randString});
            if (resolution.data.length == 0) {
                continue
            }
            expect(resolution.data.length).toBeGreaterThan(0)
            expect(resolution.fields.name).toEqual([randString])

            break
        }
    }, longTimeout);

    test("records", async () => {
        while (true) {
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

            break
        }
    }, longTimeout);

    // Test traversals
    test("traversal", async () => {
        while (true) {
            const randString = generateRandomString(3)

            // get an entity
            const entitySearchResults = await client.search.searchEntity({q: randString});
            if (entitySearchResults.data.length == 0) {
                console.log("no result, will retry with a different search term")
                continue
            }
            expect(entitySearchResults.data.length).toBeGreaterThan(0)

            // use the first one for testing
            const entity = entitySearchResults.data[0]

            // do traversal
            console.log("Attempting Ownership traversal w/ entity: ", entity.id)
            const traversal = await client.traversal.ownership(entity.id)
            if (traversal.data.length == 0) {
                console.log("no ownership result, will retry with a different entity")
                continue
            }
            expect(traversal.data.length).toBeGreaterThan(0)
            expect(traversal.data[0].source).toEqual(entity.id)

            // do UBO traversal
            console.log("Attempting UBO traversal w/ entity: ", entity.id)
            const ubo = await client.traversal.ubo(entity.id)
            if (ubo.data.length == 0) {
                console.log("no ubo result, will retry with a different entity")
                continue
            }
            expect(ubo.data.length).toBeGreaterThan(0)
            const uboID = ubo.data[0].target.id

            // do ownership traversal from ubo
            console.log("Attempting Ownership traversal w/ UBO entity: ", uboID)
            const downstream = await client.traversal.ownership(uboID)
            expect(downstream.data.length).toBeGreaterThan(0)

            // shortest path
            const shortestPath = await client.traversal.shortestPath({entities: [entity.id, uboID]})
            expect(shortestPath.data[0].path.length).toBeGreaterThan(0)

            // TODO: figure out good test for watchlist traversal

            break
        }
    }, longTimeout);

    // Test shipment search
    test("shipment search", async () => {
        while (true) {
            const randomString = generateRandomString(3)

            const randShipments = await client.trade.searchShipments({q: randomString})
            if (randShipments.data.length == 0) {
                await new Promise(f => setTimeout(f, 1000));
                continue
            }
            expect(randShipments.data.length).toBeGreaterThan(0)

            // test field and multi-filter
            const buyerName = "HANSOLL TEXTILE LTD"
            const buyerID = "ZxL0IrGu9KNKx3NJjN0aeA"
            const hsCode = "600410"
            const shipments = await client.trade.searchShipments({q: buyerName, filter: {hsCode: [hsCode], buyerId: [buyerID]}})
            expect(shipments.data.length).toBeGreaterThan(0)

            for (var shipment of shipments.data) {
                 expect(shipment.productDescriptions.length).toBeGreaterThan(0)
                 let hsFound = false
                 for (var shipmentHScode of shipment.hsCodes) {
                    if (shipmentHScode.code.startsWith(hsCode)) {
                        hsFound = true
                        break
                    }
                 }
                 expect(hsFound).toEqual(true)

                 expect(shipment.buyer.length).toBeGreaterThan(0)
                 let entityFound = false
                 for (var buyer of shipment.buyer) {
                    if (buyer.id == buyerID) {
                        entityFound = true
                        break
                    }
                 }
                 expect(entityFound).toEqual(true)
            }

            break
        }
    }, longTimeout);

    // Test supplier search
    test("supplier search", async () => {
        while (true) {
            const randomString = generateRandomString(3)

            const suppliers = await client.trade.searchSuppliers({q: randomString})
            if (suppliers.data.length == 0) {
                await new Promise(f => setTimeout(f, 1000));
                continue
            }
            expect(suppliers.data.length).toBeGreaterThan(0)

            break
        }
    }, longTimeout);

    // Test buyer search
    test("buyer search", async () => {
        while (true) {
            const randomString = generateRandomString(3)

            const buyers = await client.trade.searchBuyers({q: randomString})
            if (buyers.data.length == 0) {
                await new Promise(f => setTimeout(f, 1000));
                continue
            }
            expect(buyers.data.length).toBeGreaterThan(0)

            break
        }
    }, longTimeout);

    // Test usage
    test("usage", async () => {
        if (baseURL == 'https://api.sayari.com') {
            const usage = await client.info.getUsage()
            expect(usage.usage.entity).toBeGreaterThan(0)
            expect(usage.usage.entitySummary).toBeGreaterThan(0)
            expect(usage.usage.record).toBeGreaterThan(0)
            expect(usage.usage.resolve).toBeGreaterThan(0)
            expect(usage.usage.searchEntities).toBeGreaterThan(0)
            expect(usage.usage.searchRecords).toBeGreaterThan(0)
            expect(usage.usage.searchTrade).toBeGreaterThan(0)
            expect(usage.usage.traversal).toBeGreaterThan(0)
        }
    }, longTimeout);

    // Test history
    test("history", async () => {
        const history = await client.info.getHistory({size: 10})
        expect(history.size).toEqual(history.events.length)
    }, longTimeout);

});

function generateRandomString(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    while (result.length < length) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
