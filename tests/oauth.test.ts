import { SayariClient } from "../src/index";

var clientID = String(process.env.CLIENT_ID);
var clientSecret = String(process.env.CLIENT_SECRET);

expect(clientID).not.toBe('');

const client = new SayariClient({
    clientId: clientID,
    clientSecret: clientSecret
});

describe("OAuth", () => {
    test("entity", async () => {
        const resolution = await client.resolution.resolution({
            name: "Victoria Beckham",
        });

        const entityDetails = await client.entity.getEntity(resolution.data[0].entityId);
        expect(entityDetails.type).toEqual("intellectual_property");

        const again = await client.entity.getEntity(resolution.data[0].entityId);
        expect(again.type).toEqual("intellectual_property");
    });
});
