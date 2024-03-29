import {
   Home,
   Contact,
   Chitietgioithieu,
   LoginAdmin,
   Dangkymonhoc,
   XemHocPhi,
   ThongTinSinhVien,
   Quenmatkhau,
   ResetMatkhau,
   SuaMatkhau,
   PageNotFound404,
   PhieuDKMH,
   KetQuaDKMH,
   XemDiem,
   Hoadon,
   Chitiethoadon,
} from '../../containers/PublicPage'
import LoginUser from '../../containers/PublicPage/LoginUser'
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
   DanhsachSVDKNguyenVong,
   Lophoc,
   Giangvien,
   AddGiangvien,
   Hocphi,
   LopHocKyHe,
} from '../../containers/SystemPage'
import AddLophoc from '../../containers/SystemPage/AddLophoc'
import ThongtinQTV from '../../containers/SystemPage/ThongtinQuanTriVien'
export const linkRoute = {
   HOME_SV: '/',
   DKMH_SV: '/dangkymonhoc',
   THONGTIN_SV: '/thongtin',
   QUEN_MK: '/forgotpass',
   HOCPHI_SV: '/hocphi',
   LOGIN_SV: '/login',
   KQ_DKMH: '/ketquadangky',
   PHIEU_DKMH: '/phieudangky',
   DIEM_SV: '/xemdiem',
   SUA_MK: '/suamatkhau',
   RESET_MK: '/resetpass',
   PAGE_NOT_FOUND: '/404',
   HOADON: '/hoadon',
   CHITIET_HOADON: '/chitiethoadon',
   HOME_ADMIN: '/admin',
   LOGIN_AD: '/admin/login',
   SINHVIEN_AD: '/admin/sinhviens',
   SINHVIEN_ADD_AD: '/admin/sinhviens/add',
   MONHOC_ADMIN: '/admin/monhocs',
   MONHOC_ADD_AD: '/admin/monhocs/add',
   KHOA_ADMIN: '/admin/khoas',
   KHOA_ADD_AD: '/admin/khoas/add',
   GV_ADMIN: '/admin/giangvien',
   ADD_GV_ADMIN: '/admin/giangvien/add',
   LOP_ADMIN: '/admin/lops',
   LOP_ADD_AD: '/admin/lops/add',
   MHTC_ADMIN: '/admin/monhoctochucs',
   MHTC_ADD_AD: '/admin/monhoctochucs/add',
   HOCKY_ADMIN: '/admin/hockies',
   HOCKY_ADD_AD: '/admin/hockies/add',
   DS_SV: '/admin/danhsachsvdangky',
   TT_ADMIN: '/admin/thongtinadmin',
   DS_NV: '/admin/danhsachnguyenvong',
   LOPHOC_AD: '/admin/lophocs',
   HOCPHI_AD: '/admin/hocphis',
   HKHE_AD: '/admin/lophoche',
}
export const pathRoutes = [
   {
      path: linkRoute.HOME_SV,
      component: Home,
   },
   {
      path: linkRoute.LOGIN_SV,
      component: LoginUser,
      layout: null,
   },
   {
      path: `${linkRoute.LOGIN_SV}${linkRoute.PAGE_NOT_FOUND}`,
      component: PageNotFound404,
   },
   {
      path: '/contact',
      component: Contact,
   },
   {
      path: linkRoute.DKMH_SV,
      component: Dangkymonhoc,
   },
   {
      path: '/gioithieu',
      component: Chitietgioithieu,
   },
   {
      path: linkRoute.HOCPHI_SV,
      component: XemHocPhi,
   },
   {
      path: linkRoute.THONGTIN_SV,
      component: ThongTinSinhVien,
   },
   {
      path: linkRoute.KQ_DKMH,
      component: KetQuaDKMH,
   },
   {
      path: linkRoute.PHIEU_DKMH,
      component: PhieuDKMH,
   },
   {
      path: linkRoute.DIEM_SV,
      component: XemDiem,
   },
   {
      path: linkRoute.HOADON,
      component: Hoadon,
   },
   {
      path: linkRoute.CHITIET_HOADON,
      component: Chitiethoadon,
   },
   {
      path: linkRoute.QUEN_MK,
      component: Quenmatkhau,
      layout: null,
   },
   {
      path: linkRoute.SUA_MK,
      component: SuaMatkhau,
   },

   {
      path: linkRoute.RESET_MK,
      component: ResetMatkhau,
      layout: null,
   },
   {
      path: `${linkRoute.RESET_MK}?email=email`,
      component: ResetMatkhau,
      layout: null,
   },
   {
      path: linkRoute.LOGIN_AD,
      component: LoginAdmin,
      layout: null,
   },
   {
      path: linkRoute.HOME_ADMIN,
      component: Admin,
      layout: 'Admin',
   },
   {
      path: linkRoute.SINHVIEN_AD,
      component: Sinhvien,
      layout: 'Admin',
   },
   {
      path: '/admin/sinhviens/page=:page',
      component: Sinhvien,
      layout: 'Admin',
   },
   {
      path: linkRoute.SINHVIEN_ADD_AD,
      component: AddSinhVien,
      layout: 'Admin',
   },
   {
      path: '/admin/sinhviens/remove/mssv=:mssv',
      component: Sinhvien,
      layout: 'Admin',
   },
   {
      path: linkRoute.MONHOC_ADMIN,
      component: Monhoc,
      layout: 'Admin',
   },
   {
      path: linkRoute.MONHOC_ADD_AD,
      component: AddMonHoc,
      layout: 'Admin',
   },
   {
      path: '/admin/khoas/edit/msmh=:msmh',
      component: Khoa,
      layout: 'Admin',
   },
   {
      path: `${linkRoute.MONHOC_ADMIN}/remove/msmh=:msmh`,
      component: Monhoc,
      layout: 'Admin',
   },
   {
      path: `${linkRoute.MONHOC_ADMIN}/page=:page`,
      component: Monhoc,
      layout: 'Admin',
   },
   {
      path: linkRoute.KHOA_ADMIN,
      component: Khoa,
      layout: 'Admin',
   },
   {
      path: linkRoute.KHOA_ADD_AD,
      component: AddKhoa,
      layout: 'Admin',
   },
   {
      path: linkRoute.GV_ADMIN,
      component: Giangvien,
      layout: 'Admin',
   },
   {
      path: linkRoute.ADD_GV_ADMIN,
      component: AddGiangvien,
      layout: 'Admin',
   },
   {
      path: `${linkRoute.KHOA_ADMIN}/remove/mskhoa=:mskhoa`,
      component: Khoa,
      layout: 'Admin',
   },
   {
      path: linkRoute.LOP_ADMIN,
      component: Lop,
      layout: 'Admin',
   },
   {
      path: linkRoute.LOP_ADD_AD,
      component: AddLophoc,
      layout: 'Admin',
   },
   {
      path: linkRoute.MHTC_ADMIN,
      component: Monhoctochuc,
      layout: 'Admin',
   },
   {
      path: linkRoute.MHTC_ADD_AD,
      component: AddMonhoctochuc,
      layout: 'Admin',
   },
   {
      path: linkRoute.HOCKY_ADMIN,
      component: Hocky,
      layout: 'Admin',
   },
   {
      path: linkRoute.HOCKY_ADD_AD,
      component: AddHocky,
      layout: 'Admin',
   },
   {
      path: `${linkRoute.HOCKY_ADMIN}/remove/mshocky=:mshocky`,
      component: Hocky,
      layout: 'Admin',
   },
   {
      path: linkRoute.DS_SV,
      component: DanhsachSVDKMH,
      layout: 'Admin',
   },
   {
      path: `${linkRoute.DS_SV}/all/mssv=:mssv`,
      component: DanhsachSVDKMH,
      layout: 'Admin',
   },
   {
      path: `${linkRoute.DS_NV}`,
      component: DanhsachSVDKNguyenVong,
      layout: 'Admin',
   },
   {
      path: linkRoute.TT_ADMIN,
      component: ThongtinQTV,
      layout: 'Admin',
   },
   {
      path: `${linkRoute.TT_ADMIN}/getone/msqtv=:msqtv`,
      component: ThongtinQTV,
      layout: 'Admin',
   },
   {
      path: linkRoute.LOPHOC_AD,
      component: Lophoc,
      layout: 'Admin',
   },
   {
      path: linkRoute.HOCPHI_AD,
      component: Hocphi,
      layout: 'Admin',
   },
   {
      path: linkRoute.HKHE_AD,
      component: LopHocKyHe,
      layout: 'Admin',
   },
]
