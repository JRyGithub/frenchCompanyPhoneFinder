import axios from 'axios'
import dotenv from 'dotenv' 

dotenv.config()

export const apiRequest = ({ method,url,data,token,auth }) => {
  const config = {
    method,
    url,
    headers: { 'Content-Type': `application/json` },
  }
  if(token) config.headers = { Authorization: `Bearer ${token}` }
  if(data) config.data = data
  if(auth) config.auth = auth
  return axios(config)
}