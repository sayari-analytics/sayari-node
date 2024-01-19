import { SayariApiClient }  from 'sayari-node-sdk'

let clientID = process.env.CLIENT_ID
let clientSecretID = process.env.CLIENT_SECRET_ID

const sayari = new SayariApiClient({
  credentials: {
    clientId: clientID,
    clientSecret: clientSecretID,
    }
  }
)

await sayari.conn.connect().catch(e => {console.log(e.message)})

const resp = await sayari.entity.entitySummary("z_7vomqYZ8-8tEZqSVN6Lg")
    .then(resp => {
        return resp})
    .catch(err=> {
        console.log("hi")
        return err
    })

console.log(resp)
