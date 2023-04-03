import authRouter from './auth'
import sinhvienRouter from './sinhvien'

const initRoutes = (app) => {
   app.use('/api/v1/auth', authRouter)
   app.use('/sinhviens', sinhvienRouter)
   return app.use('/', (req, res) => {
      res.send('Server on....')
   })
}
export default initRoutes
