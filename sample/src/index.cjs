const sdk = require('sayari-node-sdk')

var clientID = process.env.CLIENT_ID
var clientSecretID = process.env.CLIENT_SECRET_ID

const sayari = new sdk.SayariApiClient({
  credentials: {
    clientId: clientID,
    clientSecret: clientSecretID,
    }
  }
)

sayari.conn.connect()
  .then(() => {
    sayari.entity.entitySummary("z_7vomqYZ8-8tEZqSVN6Lg")
      .then(resp => console.log(resp))
  })
