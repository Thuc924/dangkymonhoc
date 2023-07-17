import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { linkRoute } from '../../ultils/Common/constant'
import * as actions from '../../store/actions'

function Home() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)
   const { token, msg } = useSelector((state) => state.sinhvien)
   useEffect(() => {
      isLoggedInSinhvien &&
         setTimeout(() => {
            dispatch(actions.getSinhvienByMSSV())
         }, 100)
      if (msg === 'Hết hạn đăng nhập...!') {
         toast.error(msg)
         dispatch(actions.getSinhvienByMSSV())
      }
      dispatch(actions.getListMonhoctochuc())
      dispatch(actions.getListMonhoc())
      // dispatch(actions.getAllDSNguyenVong())
      // isLoggedInSinhvien &&
      // 	setTimeout(() => {
      // 		dispatch(actions.getSinhvienByMSSV())
      // 	}, 100)
      dispatch(actions.getListMonhocByMSSV(sinhvien?.mssv))

      !isLoggedInSinhvien && navigate(linkRoute.LOGIN_SV)
   }, [isLoggedInSinhvien, token, msg])

   return (
      <main className="min-h-[550px]">
         {/* <div>
				<div className='bg-gradient-to-r from-sky-500 to-indigo-500 rounded h-[30px] bg-[#2D8ECE] flex items-center'>
					{language === "VI" ? (
						<span className='p-2 uppercase text-white font-bold text-[12px]'>
							Thông báo
						</span>
					) : (
						<span className='p-2 uppercase text-white font-bold text-[12px]'>
							Notification
						</span>
					)}
				</div>
				<div>
					<Gioithieu />
					<Thongbao />
				</div>
			</div> */}
         <div>
            <img className="w-full min-h-[350px] rounded-sm cover" src={require('../../assets/images/banner.jpeg')} />
         </div>
         <div>
            <h2>Liên hệ</h2>
            <div></div>
         </div>
      </main>
   )
}

export default Home
