# Sayari Node Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://buildwithfern.com/)
[![npm shield](https://img.shields.io/npm/v/@mergeapi/merge-node-client)](https://www.npmjs.com/package/@mergeapi/merge-node-client)

The Sayari Node.js library provides convenient access to the Sayari API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://documentation.sayari.com/api/api-reference).

## Installation

```bash
npm install --save @sayari/sdk
# or
yarn add @sayari/sdk
```

## Usage

```typescript
import { SayariClient, Sayari } from '@sayari/sdk';

const sayari = new SayariClient({
  clientId: "YOUR_CLIENT_ID",
  clientSecret: "YOUR_CLIENT_SECRET",
});

const response = await sayari.project.getProjects({
  archived: false,
  limit: 8
});
```

## Request and Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply 
import them under the `Sayari` namespace: 

```ts
import { Sayari } from "@sayari/sdk"; 

const dataSource: Sayari.DataSource = {
  id: "...",
  label: "..."
}
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), 
a subclass of [SayariError](./src/errors/SayariError.ts) will be thrown:

```ts
import { SayariError } from '@sayari/sdk';

try {
  await sayari.project.getProjects(...);
} catch (err) {
  if (err instanceof SayariError) {
    console.log(err.statusCode); 
    console.log(err.message);
    console.log(err.body); 
  }
}
```

## Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be
retried as long as the request is deemed retriable and the number of retry attempts has not grown larger
than the configured retry limit (default: 2).

A request is deemed retriable when any of the following HTTP status codes is returned:

- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)
  
Use the `maxRetries` request option to configure this behavior. 

```ts
const response = await sayari.project.getProjects(..., {
  maxRetries: 0 // override maxRetries at the request level
});
```

## Timeouts

The SDK defaults to a 60 second timout. Use the `timeoutInSeconds` option to 
configure this behavior. 

```ts
const response = await sayari.project.getProjects(..., {
  timeoutInSeconds: 30 // override timeout to 30s
});
```

## Runtime compatiblity

The SDK defaults to `node-fetch` but will use the global fetch client if present. The SDK 
works in the following runtimes: 

The following runtimes are supported:

- Node.js 18+ 
- Vercel 
- Cloudflare Workers
- Deno v1.25+
- Bun 1.0+

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. 
Therefore, we recommend pinning the package version to a specific version in your package.json file. 
This way, you can install the same version each time without breaking changes unless you are 
intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. 
Additions made directly to this library would have to be moved over to our generation code, 
otherwise they would be overwritten upon the next generated release. Feel free to open a 
PR as a proof of concept, but know that we will not be able to merge it as-is. 

We suggest opening an issue first to discuss with us!
