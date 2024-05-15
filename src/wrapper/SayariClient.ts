import { SayariAnalyticsApiClient as FernClient } from "../Client"; // alias the Fern generated client

export class SayariClient extends FernClient { // extend the Fern generated client

  public myHelper(): void {
    return console.log("Hello world! This is being printed from the client wrapper.");
  }

}
