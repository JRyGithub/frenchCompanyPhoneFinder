import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { errorCatcher } from './src/middleware/errorCatcher.js'
import { errorHandler } from './src/handlers/errorHandler.js'
import getBusinessPhoneNumber from './src/Components/getBusinessPhoneNumber.js'
dotenv.config()

export const api = express()
api.use(cors({ origin: true }))
api.use(express.json())


api.get(`/getPhoneNumber`,errorCatcher(async(req,res) => {
  try {
  const { query } = req
  if(Object.entries(query).length === 0) return res.status(400).send({error: `No query string present. Please see documentation.`})
  const {phoneNumber,error} = await getBusinessPhoneNumber(query)
  if(error) return res.status(400).send({error})
  if(!phoneNumber) return res.status(404).send(`Could not find that company number`)
  return res.send({phoneNumber})
  }
  catch(error){
    res.status(error?.status || 404).send(error.message)
  }
}))

api.use(errorHandler)