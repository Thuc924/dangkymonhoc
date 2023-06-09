import authRouter from "./auth"
import sinhvienRouter from "./sinhvien"
import adminRouter from "./admin"
import khoaRouter from "./khoa"
import monhocRouter from "./monhoc"
import lopRouter from "./lop"
import hockyRouter from "./hocky"
import monhoctochucRouter from "./monhoctochuc"
import dangkymonhocRouter from "./dangkymonhoc"
import dangkynguyenvongRouter from "./monhocnguyenvong"
import lophocRouter from "./lophoc"
import giangvienRouter from "./giangvien"
import hocphiRouter from "./hocphi"
import diemRouter from "./diem"

const initRoutes = (app) => {
	app.use("/api/v1/auth", authRouter)
	app.use("/sinhviens", sinhvienRouter)
	app.use("/monhocs", monhocRouter)
	app.use("/khoas", khoaRouter)
	app.use("/admin", adminRouter)
	app.use("/lops", lopRouter)
	app.use("/hockies", hockyRouter)
	app.use("/monhoctochucs", monhoctochucRouter)
	app.use("/dangkymonhocs", dangkymonhocRouter)
	app.use("/dangkynguyenvong", dangkynguyenvongRouter)
	app.use("/lophoc", lophocRouter)
	app.use("/giangvien", giangvienRouter)
	app.use("/hocphi", hocphiRouter)
	app.use("/diem", diemRouter)
	return app.use("/", (req, res) => {
		res.send("Server on....")
	})
}
export default initRoutes
