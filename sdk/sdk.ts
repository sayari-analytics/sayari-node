import { SayariAnalyticsApiClient } from './generated';


function Connect(clientID, clientSecret) {
    var token = "placeholder"

    const client = new SayariAnalyticsApiClient({
        token: token,
    });

    return client
}

