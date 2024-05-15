import { SayariAnalyticsApiClient as FernClient } from "../client"; // alias the Fern generated client

export class SayariClient extends FernClient { // extend the Fern generated client

  public myHelper(): void {
    return console.log("Hello world!");
  }

}
