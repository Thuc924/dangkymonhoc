import {
	Home,
	Contact,
	Chitietgioithieu,
	LoginAdmin,
	Dangkymonhoc,
	XemHocPhi,
	Thongtincanhan,
	ThongTinSinhVien,
	Quenmatkhau,
	ResetMatkhau,
	SuaMatkhau,
	PageNotFound404,
	CartSave,
	CartUnSaved,
} from "../../containers/PublicPage"
import LoginUser from "../../containers/PublicPage/LoginUser"
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
} from "../../containers/SystemPage"
import AddLophoc from "../../containers/SystemPage/AddLophoc"
import ThongtinQTV from "../../containers/SystemPage/ThongtinQuanTriVien"
export const linkRoute = {
	HOME_SV: "/",
	DKMH_SV: "/dangkymonhoc",
	THONGTIN_SV: "/thongtin",
	QUEN_MK: "/forgotpass",
	HOCPHI_SV: "/hocphi",
	CAPNHAT_SV: "/capnhattaikhoan",
	LOGIN_SV: "/login",
	CARTSAVED_SV: "/cart-saved",
	CARTUNSAVE_SV: "/cart-unsave",
	SUA_MK: "/suamatkhau",
	RESET_MK: "/resetpass",
	PAGE_NOT_FOUND: "/404",
	HOME_ADMIN: "/admin",
	LOGIN_AD: "/admin/login",
	SINHVIEN_AD: "/admin/sinhviens",
	SINHVIEN_ADD_AD: "/admin/sinhviens/add",
	MONHOC_ADMIN: "/admin/monhocs",
	MONHOC_ADD_AD: "/admin/monhocs/add",
	KHOA_ADMIN: "/admin/khoas",
	KHOA_ADD_AD: "/admin/khoas/add",
	LOP_ADMIN: "/admin/lops",
	LOP_ADD_AD: "/admin/lops/add",
	MHTC_ADMIN: "/admin/monhoctochucs",
	MHTC_ADD_AD: "/admin/monhoctochucs/add",
	HOCKY_ADMIN: "/admin/hockies",
	HOCKY_ADD_AD: "/admin/hockies/add",
	DS_SV: "/admin/danhsachsvdangky",
	TT_ADMIN: "/admin/thongtinadmin",
	DS_NV: "/admin/danhsachnguyenvong",
}
export const pathRoutes = [
	{
		path: linkRoute.HOME_SV,
		component: Home,
	},
	{
		path: linkRoute.LOGIN_SV,
		component: LoginUser,
	},
	{
		path: `${linkRoute.LOGIN_SV}${linkRoute.PAGE_NOT_FOUND}`,
		component: PageNotFound404,
	},
	{
		path: "/contact",
		component: Contact,
	},
	{
		path: linkRoute.DKMH_SV,
		component: Dangkymonhoc,
	},
	{
		path: "/gioithieu",
		component: Chitietgioithieu,
	},
	{
		path: linkRoute.HOCPHI_SV,
		component: XemHocPhi,
	},
	{
		path: linkRoute.CAPNHAT_SV,
		component: Thongtincanhan,
	},
	{
		path: linkRoute.THONGTIN_SV,
		component: ThongTinSinhVien,
	},
	{
		path: linkRoute.CARTSAVED_SV,
		component: CartSave,
	},
	{
		path: linkRoute.CARTUNSAVE_SV,
		component: CartUnSaved,
	},
	{
		path: linkRoute.QUEN_MK,
		component: Quenmatkhau,
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
		layout: "Admin",
	},
	{
		path: linkRoute.SINHVIEN_AD,
		component: Sinhvien,
		layout: "Admin",
	},
	{
		path: "/admin/sinhviens/page=:page",
		component: Sinhvien,
		layout: "Admin",
	},
	{
		path: linkRoute.SINHVIEN_ADD_AD,
		component: AddSinhVien,
		layout: "Admin",
	},
	{
		path: "/admin/sinhviens/remove/mssv=:mssv",
		component: Sinhvien,
		layout: "Admin",
	},
	{
		path: linkRoute.MONHOC_ADMIN,
		component: Monhoc,
		layout: "Admin",
	},
	{
		path: linkRoute.MONHOC_ADD_AD,
		component: AddMonHoc,
		layout: "Admin",
	},
	{
		path: "/admin/khoas/edit/msmh=:msmh",
		component: Khoa,
		layout: "Admin",
	},
	{
		path: `${linkRoute.MONHOC_ADMIN}/remove/msmh=:msmh`,
		component: Monhoc,
		layout: "Admin",
	},
	{
		path: `${linkRoute.MONHOC_ADMIN}/page=:page`,
		component: Monhoc,
		layout: "Admin",
	},
	{
		path: linkRoute.KHOA_ADMIN,
		component: Khoa,
		layout: "Admin",
	},
	{
		path: linkRoute.KHOA_ADD_AD,
		component: AddKhoa,
		layout: "Admin",
	},
	{
		path: `${linkRoute.KHOA_ADMIN}/remove/mskhoa=:mskhoa`,
		component: Khoa,
		layout: "Admin",
	},
	{
		path: linkRoute.LOP_ADMIN,
		component: Lop,
		layout: "Admin",
	},
	{
		path: linkRoute.LOP_ADD_AD,
		component: AddLophoc,
		layout: "Admin",
	},
	{
		path: linkRoute.MHTC_ADMIN,
		component: Monhoctochuc,
		layout: "Admin",
	},
	{
		path: linkRoute.MHTC_ADD_AD,
		component: AddMonhoctochuc,
		layout: "Admin",
	},
	{
		path: linkRoute.HOCKY_ADMIN,
		component: Hocky,
		layout: "Admin",
	},
	{
		path: linkRoute.HOCKY_ADD_AD,
		component: AddHocky,
		layout: "Admin",
	},
	{
		path: `${linkRoute.HOCKY_ADMIN}/remove/mshocky=:mshocky`,
		component: Hocky,
		layout: "Admin",
	},
	{
		path: linkRoute.DS_SV,
		component: DanhsachSVDKMH,
		layout: "Admin",
	},
	{
		path: `${linkRoute.DS_SV}/all/mssv=:mssv`,
		component: DanhsachSVDKMH,
		layout: "Admin",
	},
	{
		path: `${linkRoute.DS_NV}`,
		component: DanhsachSVDKNguyenVong,
		layout: "Admin",
	},
	{
		path: linkRoute.TT_ADMIN,
		component: ThongtinQTV,
		layout: "Admin",
	},
	{
		path: `${linkRoute.TT_ADMIN}/getone/msqtv=:msqtv`,
		component: ThongtinQTV,
		layout: "Admin",
	},
]
