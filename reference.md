# Reference

## Attributes

<details><summary><code>client.attributes.<a href="/src/api/resources/attributes/client/Client.ts">postAttribute</a>({ ...params }) -> Sayari.AttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a new attribute to an entity in the project

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.attributes.postAttribute({
    entity: "zq04axX2dLn9tE6W6Q8Qhg",
    type: "address",
    value: {
        street1: "1600 Pennsylvania Avenue NW",
        city: "Washington DC",
        state: "Washington DC",
        postalCode: "20500",
        country: "US",
    },
    toDate: "2024-04-30",
    fromDate: "2024-01-01",
    date: "2024-02-15",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.AddAttribute`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Attributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.attributes.<a href="/src/api/resources/attributes/client/Client.ts">patchAttribute</a>(attributeId, { ...params }) -> Sayari.AttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Warning>This endpoint is in beta and is subject to change. It is provided for early access and testing purposes only.</Warning> Updates an existing Attribute

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.attributes.patchAttribute(
    "enEwNGF4WDJkTG45dEU2VzZROFFoZ3xhZGRyZXNzfDBwbEVCMHxVNzhzN21yOUVFTThIZ3pwREM3UDFB",
    {
        value: {
            street1: "1600 Pennsylvania Avenue NW",
            city: "Washington DC",
            state: "Washington DC",
            postalCode: "20500",
            country: "US",
        },
        toDate: "2024-04-30",
        fromDate: "2024-01-01",
        date: "2024-02-15",
    },
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**attributeId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.UpdateAttribute`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Attributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.attributes.<a href="/src/api/resources/attributes/client/Client.ts">deleteAttribute</a>(attributeId) -> Sayari.AttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Warning>This endpoint is in beta and is subject to change. It is provided for early access and testing purposes only.</Warning> Delete an existing Attribute

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.attributes.deleteAttribute(
    "enEwNGF4WDJkTG45dEU2VzZROFFoZ3xhZGRyZXNzfDBwbEVCMHxVNzhzN21yOUVFTThIZ3pwREM3UDFB",
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**attributeId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Attributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Auth

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">getToken</a>({ ...params }) -> Sayari.AuthResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Hit the auth endpoint to get a bearer token

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.getToken({
    clientId: "your client_id here",
    clientSecret: "your client_secret here",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetToken`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity

<details><summary><code>client.entity.<a href="/src/api/resources/entity/client/Client.ts">getEntity</a>(id, { ...params }) -> Sayari.GetEntityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Note>To retrieve a L1 Due Dilligence PDF Report. Include 'Accept: application/pdf' in request headers.</Note> Retrieve an entity profile from the database based on the entity ID. This endpoint returns the full profile, entity_summary returns the same payload minus relationships.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.getEntity("mGq1lpuqKssNWTjIokuPeA", {
    attributesNameLimit: 1,
    attributesAddressLimit: 1,
    attributesCountryLimit: 1,
    attributesAdditionalInformationLimit: 1,
    attributesBusinessPurposeLimit: 1,
    attributesCompanyTypeLimit: 1,
    attributesIdentifierLimit: 1,
    attributesStatusLimit: 1,
    relationshipsLimit: 1,
    possiblySameAsLimit: 1,
    referencedByLimit: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the entity

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.GetEntity`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.<a href="/src/api/resources/entity/client/Client.ts">entitySummary</a>(id) -> Sayari.EntitySummaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The Entity Summary endpoint returns a similar payload, minus relationships.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.entitySummary("mGq1lpuqKssNWTjIokuPeA");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the entity

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Info

<details><summary><code>client.info.<a href="/src/api/resources/info/client/Client.ts">getUsage</a>({ ...params }) -> Sayari.UsageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The usage endpoint provides a simple interface to retrieve information on usage made by your API account. This includes both views per API path and credits consumed. The time period for the usage query is also specified in the response and whether or not this includes total usage.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.info.getUsage();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetUsage`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Info.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.info.<a href="/src/api/resources/info/client/Client.ts">getHistory</a>({ ...params }) -> Sayari.HistoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The history endpoint return a user's event history.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.info.getHistory();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetHistory`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Info.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Metadata

<details><summary><code>client.metadata.<a href="/src/api/resources/metadata/client/Client.ts">metadata</a>() -> Sayari.MetadataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get metadta about the api, both its versions, which releases are present, and the identity of the authenticated user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.metadata.metadata();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Metadata.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## NegativeNews

<details><summary><code>client.negativeNews.<a href="/src/api/resources/negativeNews/client/Client.ts">negativeNews</a>({ ...params }) -> Sayari.NegativeNewsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Warning>This endpoint is in beta and subject to change</Warning>
Screens entities against news articles and public records to identify risk-relevant content.
Leverages machine learning to detect and classify risks across various domains.
Provides detailed article metadata with risk assessments and direct source references.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.negativeNews.negativeNews({
    name: "Gazprom",
    topic: "sanctions",
    until: "2024-10-01",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.NegativeNews`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NegativeNews.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Notifications

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">projectNotifications</a>(id, { ...params }) -> Sayari.ProjectNotificationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Warning>Legacy endpoint. New integrations should contact Sayari for best practices.</Warning> The Project Notifications endpoint returns a list of notifications on all entities saved to a project.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.projectNotifications("0oZnoG", {
    limit: 20,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the project

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.ProjectNotifications`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">resourceNotifications</a>(id, { ...params }) -> Sayari.ResourceNotificationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Warning>Legacy endpoint. New integrations should contact Sayari for best practices.</Warning> The Resource Notifications endpoint returns a list of notifications for a saved entity.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.resourceNotifications("03ePyj", {
    limit: 20,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the resource

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.ResourceNotifications`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">deleteProjectNotifications</a>(projectId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Warning>Legacy endpoint. New integrations should contact Sayari for best practices.</Warning> Deletes all notifications from a project.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.deleteProjectNotifications("YWmNKV");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">deleteEntityNotifications</a>(entityId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Warning>Legacy endpoint. New integrations should contact Sayari for best practices.</Warning> Deletes notifications for saved resources of an entity.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.deleteEntityNotifications("N0xLDy4wcud-M1ZtwdsvRA");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">deleteResourceNotifications</a>(resourceId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Warning>Legacy endpoint. New integrations should contact Sayari for best practices.</Warning> Deletes notifications for a saved resource.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.deleteResourceNotifications("oGxxqG");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**resourceId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ontology

<details><summary><code>client.ontology.<a href="/src/api/resources/ontology/client/Client.ts">getOntology</a>() -> Sayari.GetOntologyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get ontology data for all resource types.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ontology.getOntology();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Ontology.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ontology.<a href="/src/api/resources/ontology/client/Client.ts">getAttributes</a>({ ...params }) -> Sayari.GetOntologyAttributesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get attributes from ontology data.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ontology.getAttributes({
    id: ["additional_information"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetOntologyAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ontology.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ontology.<a href="/src/api/resources/ontology/client/Client.ts">getCountries</a>({ ...params }) -> Sayari.GetOntologyCountriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get countries from ontology data.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ontology.getCountries({
    id: ["USA"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetOntologyCountriesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ontology.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ontology.<a href="/src/api/resources/ontology/client/Client.ts">getCurrencies</a>({ ...params }) -> Sayari.GetOntologyCurrenciesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get currencies from ontology data.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ontology.getCurrencies({
    id: ["USD"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetOntologyCurrenciesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ontology.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ontology.<a href="/src/api/resources/ontology/client/Client.ts">getEntityTypes</a>({ ...params }) -> Sayari.GetOntologyEntityTypesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get entity types from ontology data.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ontology.getEntityTypes({
    id: ["aircraft"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetOntologyEntityTypesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ontology.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ontology.<a href="/src/api/resources/ontology/client/Client.ts">getEnums</a>({ ...params }) -> Sayari.GetOntologyEnumsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get enums from ontology data.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ontology.getEnums({
    id: ["address_type"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetOntologyEnumsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ontology.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ontology.<a href="/src/api/resources/ontology/client/Client.ts">getHsCodes</a>({ ...params }) -> Sayari.GetOntologyHsCodesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get HS codes from ontology data.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ontology.getHsCodes({
    code: ["1503"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetOntologyHsCodesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ontology.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ontology.<a href="/src/api/resources/ontology/client/Client.ts">getIdentifiers</a>({ ...params }) -> Sayari.GetOntologyIdentifiersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get identifiers from ontology data.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ontology.getIdentifiers({
    id: ["aer_free_zone_license"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetOntologyIdentifiersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ontology.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ontology.<a href="/src/api/resources/ontology/client/Client.ts">getLanguages</a>({ ...params }) -> Sayari.GetOntologyLanguagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get languages from ontology data.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ontology.getLanguages({
    id: ["en"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetOntologyLanguagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ontology.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ontology.<a href="/src/api/resources/ontology/client/Client.ts">getRegions</a>({ ...params }) -> Sayari.GetOntologyRegionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get regions from ontology data.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ontology.getRegions({
    id: ["usa_&_canada"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetOntologyRegionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ontology.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ontology.<a href="/src/api/resources/ontology/client/Client.ts">getRelationships</a>({ ...params }) -> Sayari.GetOntologyRelationshipsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get relationships from ontology data.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ontology.getRelationships({
    id: ["auditor_of"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetOntologyRelationshipsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ontology.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ontology.<a href="/src/api/resources/ontology/client/Client.ts">getRiskFactors</a>({ ...params }) -> Sayari.GetOntologyRiskFactorsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get risk factors from ontology data.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ontology.getRiskFactors({
    id: ["psa_owner_of_ofac_fto_sanctioned"],
    riskCategory: ["sanctions"],
    level: ["high"],
    riskType: ["network"],
    enabled: true,
    visible: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetOntologyRiskFactorsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ontology.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ontology.<a href="/src/api/resources/ontology/client/Client.ts">getSources</a>({ ...params }) -> Sayari.GetOntologySourcesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get sources from ontology data.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ontology.getSources({
    id: ["e85d865943ee6d8369307569d2ad9de0"],
    country: ["XXX"],
    sourceType: ["adverse_media_/_negative_news_data"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetOntologySourcesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ontology.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ontology.<a href="/src/api/resources/ontology/client/Client.ts">getSourceTypes</a>({ ...params }) -> Sayari.GetOntologySourceTypesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get source types from ontology data.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ontology.getSourceTypes({
    id: ["adverse_media_/_negative_news_data"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetOntologySourceTypesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ontology.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ProjectEntity

<details><summary><code>client.projectEntity.<a href="/src/api/resources/projectEntity/client/Client.ts">createProjectEntity</a>(projectId, { ...params }) -> Sayari.SingleProjectEntityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The resolution endpoints allow users to search for matching entities against a provided list of attributes. The endpoint is similar to the search endpoint, except it's tuned to only return the best match so the client doesn't need to do as much or any post-processing work to filter down results.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projectEntity.createProjectEntity("YVB88Y", {
    name: ["VTB Bank"],
    country: ["RUS"],
    address: ["Moscow"],
    identifier: ["253400V1H6ART1UQ0N98"],
    profile: "corporate",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.CreateResolvedProjectEntityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectEntity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projectEntity.<a href="/src/api/resources/projectEntity/client/Client.ts">getProjectEntities</a>(projectId, { ...params }) -> Sayari.ProjectEntitiesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of entities for a specific project with pagination support.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projectEntity.getProjectEntities("YVB88Y");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.GetProjectEntitiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectEntity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projectEntity.<a href="/src/api/resources/projectEntity/client/Client.ts">getProjectEntity</a>(projectId, projectEntityId, { ...params }) -> Sayari.SingleProjectEntityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a specific entity in a project.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projectEntity.getProjectEntity("project_id", "project_entity_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string`

</dd>
</dl>

<dl>
<dd>

**projectEntityId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.GetProjectEntityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectEntity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projectEntity.<a href="/src/api/resources/projectEntity/client/Client.ts">deleteProjectEntity</a>(projectId, projectEntityId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a project entity.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projectEntity.deleteProjectEntity("project_id", "project_entity_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string`

</dd>
</dl>

<dl>
<dd>

**projectEntityId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectEntity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projectEntity.<a href="/src/api/resources/projectEntity/client/Client.ts">deleteProjectEntityMatch</a>(projectId, projectEntityId, matchId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a specific project entity match.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projectEntity.deleteProjectEntityMatch("project_id", "project_entity_id", "match_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string`

</dd>
</dl>

<dl>
<dd>

**projectEntityId:** `string`

</dd>
</dl>

<dl>
<dd>

**matchId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectEntity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projectEntity.<a href="/src/api/resources/projectEntity/client/Client.ts">projectEntityExists</a>(projectId, { ...params }) -> Sayari.ProjectEntityIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Checks if a project entity with the given attributes already exists.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projectEntity.projectEntityExists("YVB88Y", {
    name: ["Example Company"],
    country: ["USA"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.ResolutionAttributes`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectEntity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projectEntity.<a href="/src/api/resources/projectEntity/client/Client.ts">saveProjectEntity</a>(projectId, { ...params }) -> Sayari.ProjectEntityIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Stores a project entity given entity IDs and a list of attributes.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projectEntity.saveProjectEntity("YVB88Y", {
    entityIds: ["entity_id_1", "entity_id_2"],
    attributes: {
        name: ["Example Company"],
        country: ["USA"],
    },
    profile: "corporate",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.SaveProjectEntityBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectEntity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projectEntity.<a href="/src/api/resources/projectEntity/client/Client.ts">projectEntitySupplyChain</a>(projectId, projectEntityId, { ...params }) -> Sayari.UpstreamTradeTraversalResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Execute a traversal of the upstream trade network (supply chain) for all matched entities of a project entity, returning a set of entities and edges between them.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projectEntity.projectEntitySupplyChain("Gam5qG", "GOeOE8", {
    minDate: "2023-03-15",
    product: ["3204"],
    risk: ["forced_labor_xinjiang_origin_subtier"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string` — The project Identifier

</dd>
</dl>

<dl>
<dd>

**projectEntityId:** `string` — The project entity Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.ProjectEntitySupplyChainRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectEntity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projectEntity.<a href="/src/api/resources/projectEntity/client/Client.ts">projectEntitySupplyChainSummary</a>(projectId, projectEntityId, { ...params }) -> Sayari.ProjectEntitySupplyChainSummaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Execute a traversal of the upstream trade network (supply chain) for all matched entities of a project entity, returning a summary of countries, risks, and components.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projectEntity.projectEntitySupplyChainSummary("Gam5qG", "GOeOE8", {
    minDate: "2023-03-15",
    product: ["8536", "8544", "4016"],
    riskFactors: [
        "forced_labor_xinjiang_name",
        "forced_labor_xinjiang_uflpa",
        "forced_labor_uflpa_origin_direct",
        "exports_russian_gold",
        "export_to_sanctioned",
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string` — The project Identifier

</dd>
</dl>

<dl>
<dd>

**projectEntityId:** `string` — The project entity Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.ProjectEntitySupplyChainSummaryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectEntity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Project

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">createProject</a>({ ...params }) -> Sayari.CreateProjectResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new project.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.project.createProject({
    label: "Project Alpha",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.CreateProjectRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Project.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">getProjects</a>({ ...params }) -> Sayari.GetProjectsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of projects including upload progress info.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.project.getProjects({
    archived: false,
    limit: 8,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.GetProjects`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Project.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">getProjectEntities</a>(id, { ...params }) -> Sayari.GetProjectEntitiesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Warning>This endpoint is deprecated.</Warning> Retrieve a list of entities in a project.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.project.getProjectEntities("gPq6EY", {
    accept: "application/json",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The project identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.GetProjectEntities`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Project.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.project.<a href="/src/api/resources/project/client/Client.ts">deleteProject</a>(projectId) -> Sayari.DeleteProjectResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an existing project.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.project.deleteProject("Gam5qG");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Project.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Record

<details><summary><code>client.record.<a href="/src/api/resources/record/client/Client.ts">getRecord</a>(id, { ...params }) -> Sayari.GetRecordResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a record from the database based on the ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.record.getRecord("74cf0fc2a62f9c8f4e88f8a0b3ffcca4%2FF0000110%2F1682970471254");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The unique identifier for a record in the database

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.GetRecord`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Record_.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Resolution

<details><summary><code>client.resolution.<a href="/src/api/resources/resolution/client/Client.ts">resolution</a>({ ...params }) -> Sayari.ResolutionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The resolution endpoints allow users to search for matching entities against a provided list of attributes. The endpoint is similar to the search endpoint, except it's tuned to only return the best match so the client doesn't need to do as much or any post-processing work to filter down results.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.resolution.resolution({
    name: "Thomas Bangalter",
    address: "8 AVENUE RACHEL",
    country: "FRA",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.Resolution`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Resolution.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.resolution.<a href="/src/api/resources/resolution/client/Client.ts">resolutionPost</a>({ ...params }) -> Sayari.ResolutionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The resolution endpoints allow users to search for matching entities against a provided list of attributes. The endpoint is similar to the search endpoint, except it's tuned to only return the best match so the client doesn't need to do as much or any post-processing work to filter down results.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.resolution.resolutionPost({
    limit: 1,
    body: {
        name: ["Thomas Bangalter"],
        address: ["8 AVENUE RACHEL"],
        country: ["FRA"],
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.ResolutionPost`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Resolution.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.resolution.<a href="/src/api/resources/resolution/client/Client.ts">resolutionPersisted</a>(projectId, { ...params }) -> Sayari.ResolutionPersistedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Warning>This endpoint is deprecated.</Warning> The persisted resolution endpoints allow users to search for matching entities against a provided list of attributes. The endpoint is similar to the resolution endpoint, except it also stores matched entities into user's project.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.resolution.resolutionPersisted("V03eYM", {
    limit: 1,
    body: {
        name: ["victoria beckham limited"],
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string` — Unique identifier of the project

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.ResolutionPersisted`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Resolution.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.resolution.<a href="/src/api/resources/resolution/client/Client.ts">resolutionUpload</a>(projectId, { ...params }) -> Sayari.ResolutionUploadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Warning>This endpoint is deprecated.</Warning> This endpoint allows you to upload entities in bulk.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.resolution.resolutionUpload("V03eYM", {
    filename: "vbeck.json",
    data: [
        {
            name: ["victoria beckham limited"],
            tags: ["spice girls"],
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string` — Unique identifier of the project

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.ResolutionUploadBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Resolution.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Resource

<details><summary><code>client.resource.<a href="/src/api/resources/resource/client/Client.ts">saveEntity</a>({ ...params }) -> Sayari.SaveEntityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Save an entity to a project.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.resource.saveEntity({
    type: "entity",
    project: "GNJbkG",
    entityId: "Zk0qOaM2SSYg_ZhsljykMQ",
    customFields: {
        properties: {
            custom_name: "Victoria Beckham",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.SaveEntityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Resource.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.resource.<a href="/src/api/resources/resource/client/Client.ts">deleteResource</a>(type_, resourceId) -> Sayari.DeleteResourceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an existing saved resource from a project.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.resource.deleteResource("entity", "YWmNKV");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**type\_:** `Sayari.ResourceType`

</dd>
</dl>

<dl>
<dd>

**resourceId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Resource.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Search

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">searchEntity</a>({ ...params }) -> Sayari.EntitySearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for an entity. Please note, searches are limited to a maximum of 10,000 results.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.search.searchEntity({
    limit: 1,
    q: "victoria beckham limited",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.SearchEntity`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Search.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">searchEntityGet</a>({ ...params }) -> Sayari.EntitySearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for an entity. Please note, searches are limited to a maximum of 10,000 results.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.search.searchEntityGet({
    limit: 1,
    q: "victoria beckham limited",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.SearchEntityGet`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Search.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">searchRecord</a>({ ...params }) -> Sayari.RecordSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for a record. Please note, searches are limited to a maximum of 10,000 results.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.search.searchRecord({
    limit: 1,
    q: "victoria beckham limited",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.SearchRecord`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Search.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">searchRecordGet</a>({ ...params }) -> Sayari.RecordSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for a record. Please note, searches are limited to a maximum of 10,000 results.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.search.searchRecordGet({
    q: "victoria beckham limited",
    limit: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.SearchRecordGet`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Search.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Source

<details><summary><code>client.source.<a href="/src/api/resources/source/client/Client.ts">listSources</a>({ ...params }) -> Sayari.ListSourcesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Warning>This endpoint is deprecated. Use /v1/ontology/sources instead.</Warning> Returns metadata for all sources that Sayari collects data from

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.source.listSources({
    limit: 2,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.ListSources`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Source.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.source.<a href="/src/api/resources/source/client/Client.ts">getSource</a>(id) -> Sayari.GetSourceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Warning>This endpoint is deprecated. Use /v1/ontology/sources instead.</Warning> Returns metadata for a source that Sayari collects data from

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.source.getSource("f4396e4b8a41d1fd9f09ea94d2ebedb9");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The unique identifier for a source in the database

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Source.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## SupplyChain

<details><summary><code>client.supplyChain.<a href="/src/api/resources/supplyChain/client/Client.ts">upstreamTradeTraversal</a>(id, { ...params }) -> Sayari.UpstreamTradeTraversalResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Execute a traversal of the upstream trade network (supply chain) of an entity, returning a set of entities and edges between them.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.supplyChain.upstreamTradeTraversal("ESkH7J-UCRfY5t0_JXIH3w", {
    minDate: "2023-03-15",
    product: ["3204"],
    risk: ["forced_labor_xinjiang_origin_subtier"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The root entity identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.UpstreamTradeTraversalRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SupplyChain.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Trade

<details><summary><code>client.trade.<a href="/src/api/resources/trade/client/Client.ts">searchShipments</a>({ ...params }) -> Sayari.ShipmentSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for a shipment. Please note, searches are limited to a maximum of 10,000 results.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.trade.searchShipments({
    limit: 1,
    filter: {
        departureCountry: ["DEU"],
        arrivalCountry: ["RUS"],
        hsCode: ["854231"],
        arrivalDate: ["2024-01 TO 2024-10"],
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.SearchShipments`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Trade.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.trade.<a href="/src/api/resources/trade/client/Client.ts">searchSuppliers</a>({ ...params }) -> Sayari.SupplierSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for a supplier. Please note, searches are limited to a maximum of 10,000 results.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.trade.searchSuppliers({
    limit: 1,
    filter: {
        departureCountry: ["DEU"],
        arrivalCountry: ["RUS"],
        hsCode: ["854231"],
        arrivalDate: ["2024-01 TO 2024-10"],
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.SearchSuppliers`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Trade.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.trade.<a href="/src/api/resources/trade/client/Client.ts">searchBuyers</a>({ ...params }) -> Sayari.BuyerSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for a buyer. Please note, searches are limited to a maximum of 10,000 results.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.trade.searchBuyers({
    limit: 1,
    filter: {
        departureCountry: ["DEU"],
        arrivalCountry: ["RUS"],
        hsCode: ["854231"],
        arrivalDate: ["2024-01 TO 2024-10"],
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.SearchBuyers`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Trade.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Traversal

<details><summary><code>client.traversal.<a href="/src/api/resources/traversal/client/Client.ts">traversal</a>(id, { ...params }) -> Sayari.TraversalResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The Traversal endpoint returns paths from a single target entity to up to 50 directly or indirectly-related entities. Each path includes information on the 0 to 10 intermediary entities, as well as their connecting relationships. The response's explored_count field indicates the size of the graph subset the application searched. Running a traversal on a highly connected entity with a restrictive set of argument filters and a high max depth will require the application to explore a higher number of traversal paths, which may affect performance. In cases where a traversal searches over a very large, highly-connected subgraph, a partial result set may be returned containing only the most relevant results. This will be indicated in the response by the partial_results field.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.traversal.traversal("mGq1lpuqKssNWTjIokuPeA", {
    limit: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the entity

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.Traversal`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Traversal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.traversal.<a href="/src/api/resources/traversal/client/Client.ts">ubo</a>(id, { ...params }) -> Sayari.TraversalResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The UBO endpoint returns paths from a single target entity to up to 50 beneficial owners. The endpoint is a shorthand for the equivalent traversal query.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.traversal.ubo("mGq1lpuqKssNWTjIokuPeA", {
    limit: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the entity

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.Ubo`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Traversal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.traversal.<a href="/src/api/resources/traversal/client/Client.ts">ownership</a>(id, { ...params }) -> Sayari.TraversalResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The Ownership endpoint returns paths from a single target entity to up to 50 entities directly or indirectly owned by that entity. The endpoint is a shorthand for the equivalent traversal query.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.traversal.ownership("mGq1lpuqKssNWTjIokuPeA", {
    limit: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the entity

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.Ownership`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Traversal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.traversal.<a href="/src/api/resources/traversal/client/Client.ts">watchlist</a>(id, { ...params }) -> Sayari.TraversalResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The Watchlist endpoint returns paths from a single target entity to up to 50 other entities that appear on a watchlist. The endpoint is a shorthand for the equivalent traversal query.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.traversal.watchlist("mGq1lpuqKssNWTjIokuPeA", {
    limit: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the entity

</dd>
</dl>

<dl>
<dd>

**request:** `Sayari.Watchlist`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Traversal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.traversal.<a href="/src/api/resources/traversal/client/Client.ts">shortestPath</a>({ ...params }) -> Sayari.ShortestPathResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The Shortest Path endpoint returns a response identifying the shortest traversal path connecting each pair of entities.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.traversal.shortestPath({
    entities: "H1y25N5ymnFyZ-q9Lpwm_g&entities=xthsA_jQuKn3GW8-9ILQqg",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Sayari.ShortestPath`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Traversal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
