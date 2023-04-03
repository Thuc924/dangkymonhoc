import SidebarAdmin from '../../components/SidebarAdmin'

function AdminLayout({ children }) {
   return (
      <>
         <SidebarAdmin />
         <div>{children}</div>
      </>
   )
}
export default AdminLayout
