import { parentPort } from 'worker_threads';
import { Conn } from './conn';

parentPort?.on('message', (workerData: {conn: Conn, expiresIn: number}) => {
    let { conn, expiresIn } = workerData;
    let refreshIn = expiresIn //- 3600 < 3600 ? 0 : expiresIn - 3600
    Object.setPrototypeOf(conn, Conn.prototype);

    conn.refreshToken(refreshIn)
})
