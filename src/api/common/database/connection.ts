import {Connection, createConnection, getConnection,} from 'typeorm'

export async function connectToDatabase(): Promise<Connection> {
    const connection = await createConnection();

    return connection
}

export async function close(name?: string): Promise<void> {
    const connectionToClose = getConnection(name);

    connectionToClose.close()
}
