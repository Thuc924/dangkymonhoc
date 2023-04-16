import { Footer, Header, Nav } from '../PublicPage'

function DefaultLayout({ children }) {
   return (
      <div className="w-1100 container p-0 m-auto shadow-xl">
         <Header />
         <Nav />
         <div>{children}</div>
         <Footer />
      </div>
   )
}
export default DefaultLayout
