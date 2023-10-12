import {
  SayariAnalyticsApiClient,
  SayariAnalyticsApiEnvironment,
} from '../generated/node/index.js';

void main();

async function main() {
  const client = new SayariAnalyticsApiClient({
    environment: SayariAnalyticsApiEnvironment.Production,
    token: 'MY-TOKEN',
  });

  const plant = await client.source.get('ef19fe7b-c4c9-4631-81d7-a83aba610a7d');

  console.log('Received plant!', plant);
}
