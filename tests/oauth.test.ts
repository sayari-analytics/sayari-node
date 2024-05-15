import { SayariClient } from "../src/index";

const client = new SayariClient({
    clientId: process.env.SAYARI_CLIENT_ID,
    clientSecret: process.env.SAYARI_CLIENT_SECRET
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
