import { Home, Login, Contact } from '../../containers/PublicPage'
import {
   AddSinhVien,
   Admin,
   Sinhvien,
   Monhoc,
   AddMonHoc,
   Khoa,
   AddKhoa,
   Lop,
   Monhoctochuc,
   Hocky,
   AddHocky,
   AddMonhoctochuc,
} from '../../containers/SystemPage'
import AddLophoc from '../../containers/SystemPage/AddLophoc'

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
      path: '/admin/khoas/edit/msmh=:msmh',
      component: Khoa,
      layout: 'Admin',
   },
   {
      path: '/admin/monhocs/remove/msmh=:msmh',
      component: Monhoc,
      layout: 'Admin',
   },
   {
      path: '/admin/monhocs/page=:page',
      component: Monhoc,
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
      path: '/admin/khoas/remove/mskhoa=:mskhoa',
      component: Khoa,
      layout: 'Admin',
   },
   {
      path: '/admin/lops',
      component: Lop,
      layout: 'Admin',
   },
   {
      path: '/admin/lops/add',
      component: AddLophoc,
      layout: 'Admin',
   },
   {
      path: '/admin/monhoctochucs',
      component: Monhoctochuc,
      layout: 'Admin',
   },
   {
      path: '/admin/monhoctochucs/add',
      component: AddMonhoctochuc,
      layout: 'Admin',
   },
   {
      path: '/admin/hockies',
      component: Hocky,
      layout: 'Admin',
   },
   {
      path: '/admin/hockies/add',
      component: AddHocky,
      layout: 'Admin',
   },
   {
      path: '/admin/hockies/remove/mshocky=:mshocky',
      component: Hocky,
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
   LOP_ADMIN: '/admin/lops',
   LOP_ADD: '/admin/lops/add',
   MHTC_ADMIN: '/admin/monhoctochucs',
   MHTC_ADD: '/admin/monhoctochucs/add',
   HOCKY_ADMIN: '/admin/hockies',
   HOCKY_ADD: '/admin/hockies/add',
}
