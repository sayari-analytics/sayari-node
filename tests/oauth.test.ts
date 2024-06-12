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

const client = new SayariClient({
    clientId: clientID,
    clientSecret: clientSecret,
    environment: baseURL
});

describe("OAuth", () => {
    test("entity", async () => {
        const resolution = await client.resolution.resolution({
            name: "Victoria Beckham",
        });

        const entityDetails = await client.entity.getEntity(resolution.data[0].entityId);
        expect(entityDetails.id).toEqual(resolution.data[0].entityId);

        const again = await client.entity.getEntity(resolution.data[0].entityId);
        expect(again.id).toEqual(resolution.data[0].entityId);
    });
});
