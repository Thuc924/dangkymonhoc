import { Home, Login, Contact } from '../../containers/PublicPage'
import {
   AddSinhVien,
   Admin,
   Sinhvien,
   Monhoc,
   AddMonHoc,
   Khoa,
   AddKhoa,
} from '../../containers/SystemPage'

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
      path: '/admin/sinhviens',
      component: Sinhvien,
      layout: 'Admin',
   },
   {
      path: '/admin/sinhviens/page=:page',
      component: Sinhvien,
      layout: 'Admin',
   },
   {
      path: '/admin/sinhviens/add',
      component: AddSinhVien,
      layout: 'Admin',
   },
   {
      path: '/admin/sinhviens/remove/mssv=:mssv',
      component: Sinhvien,
      layout: 'Admin',
   },
   {
      path: '/admin/monhocs',
      component: Monhoc,
      layout: 'Admin',
   },
   {
      path: '/admin/monhocs/add',
      component: AddMonHoc,
      layout: 'Admin',
   },
   {
      path: '/admin/khoas',
      component: Khoa,
      layout: 'Admin',
   },
   {
      path: '/admin/khoas/add',
      component: AddKhoa,
      layout: 'Admin',
   },
   {
      path: '/admin/khoas//remove/mskhoa=:mskhoa',
      component: Khoa,
      layout: 'Admin',
   },
]
export const linkRoute = {
   HOME_ADMIN: '/admin',
   SINHVIEN: '/admin/sinhviens',
   SINHVIEN_ADD: '/admin/sinhviens/add',
   MONHOC_ADMIN: '/admin/monhocs',
   MONHOC_ADD: '/admin/monhocs/add',
   KHOA_ADMIN: '/admin/khoas',
   KHOA_ADD: '/admin/khoas/add',
}
