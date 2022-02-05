export function errorHandler(err,req,res,next){
  console.log(err.message)
  console.log(err.stack)
  res.status(500).send({ error: err.message })
  next()
}