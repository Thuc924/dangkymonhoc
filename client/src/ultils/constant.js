import { Home, Login, Contact } from '../containers/PublicPage'
import { AddSinhVien, Admin, Sinhvien } from '../containers/SystemPage'

export const pathRoutes = [
   {
      path: '/',
      component: Home,
   },
   {
      path: '/contact',
      component: Contact,
   },
   {
      path: '/login',
      component: Login,
      layout: null,
   },
   {
      path: '/admin',
      component: Admin,
      layout: 'Admin',
   },
   {
      path: '/sinhviens',
      component: Sinhvien,
      layout: 'Admin',
   },
   {
      path: '/sinhviens/add',
      component: AddSinhVien,
      layout: 'Admin',
   },
]
