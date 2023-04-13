import { Routes, Route } from 'react-router-dom'
import { pathRoutes } from './ultils/Common/constant'
import { Fragment } from 'react'

import DefaultLayout from './containers/layouts/DefaultLayout'
import AdminLayout from './containers/layouts/AdminLayout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
   return (
      <div className="p-0 m-0">
         <Routes>
            {pathRoutes.map((route, index) => {
               const Page = route.component
               let Layout = DefaultLayout
               if (route.layout === 'Admin') Layout = AdminLayout
               if (route.layout === null) Layout = Fragment
               return (
                  <Route
                     key={index}
                     path={route.path}
                     element={
                        <Layout>
                           <Page />
                        </Layout>
                     }
                  />
               )
            })}
         </Routes>
         <ToastContainer />
      </div>
   )
}

export default App
