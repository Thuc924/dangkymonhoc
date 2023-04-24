import {
   Home,
   Contact,
   Chitietgioithieu,
   LoginAdmin,
   Dangkymonhoc,
   XemHocPhi,
   Thongtincanhan,
} from '../../containers/PublicPage'
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
   DanhsachSVDKMH,
} from '../../containers/SystemPage'
import AddLophoc from '../../containers/SystemPage/AddLophoc'
import ThongtinQTV from '../../containers/SystemPage/ThongtinQuanTriVien'

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
      path: '/dangkymonhoc',
      component: Dangkymonhoc,
   },
   {
      path: '/gioithieu',
      component: Chitietgioithieu,
   },
   {
      path: '/hocphi',
      component: XemHocPhi,
   },
   {
      path: '/thongtincanhan',
      component: Thongtincanhan,
   },
   // {
   //    path: '/thongtincanhan',
   //    component: Thongtincanhan,
   // },
   {
      path: '/login',
      component: LoginAdmin,
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
   {
      path: '/admin/danhsachsvdangky',
      component: DanhsachSVDKMH,
      layout: 'Admin',
   },
   {
      path: '/admin/danhsachsvdangky/all/mssv=:mssv',
      component: DanhsachSVDKMH,
      layout: 'Admin',
   },
   {
      path: '/admin/thongtinadmin',
      component: ThongtinQTV,
      layout: 'Admin',
   },
   {
      path: '/admin/thongtinadmin/getone/msqtv=:msqtv',
      component: ThongtinQTV,
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
   DS_SV: '/admin/danhsachsvdangky',
   TT_ADMIN: '/admin/thongtinadmin',
}
