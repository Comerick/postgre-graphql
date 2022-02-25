import 'reflect-metadata'
import { config } from 'dotenv'
config()
import express from 'express'
import postgraphile from 'postgraphile';

import { connectToDatabase } from './api/common/database'
import { initializeRoutes } from './api/routes'

const app = express()

async function start(): Promise<void> {
  const port = process.env.PORT || 3000;

  await connectToDatabase()

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())


  initializeRoutes(app)

  app.use(postgraphile(
    process.env.DATABASE_URL,
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
    }
  ))

  app.listen(port, () =>{
    console.log('App is listening on port: ', port)
  })
}
start()
