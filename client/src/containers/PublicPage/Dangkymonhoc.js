import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as actions from '../../store/actions'
import { toast } from 'react-toastify'

function Dangkymonhoc() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { isLoggedIn, sinhvien } = useSelector((state) => state.auth)

   const { monhoctochucs, token } = useSelector((state) => state.monhoctochuc)

   const { danhsachsvdk } = useSelector((state) => state.dangkymonhoc)

   const [msmh, setMSMH] = useState('')

   const [listMH, setListMH] = useState([])

   const [dsMHDK, setDSMHDK] = useState([])
   useEffect(() => {
      dispatch(actions.getListMonhoctochuc())
      dispatch(actions.getListMonhocInDSDKMH(sinhvien.mssv))

      !isLoggedIn && navigate('/')
   }, [isLoggedIn, msmh, dsMHDK.length, token])

   const handleLocMonHoc = () => {
      const list = monhoctochucs.filter((i) => i.msmh === msmh)
      setListMH(list)
   }
   const handleAddMHDK = (mh) => {
      const search = danhsachsvdk.find((i) => i.msmh === mh.msmh) || dsMHDK.find((i) => i.msmh === mh.msmh)
      !search
         ? setDSMHDK((prev) => [
              ...prev,
              {
                 msmh: mh.msmh,
                 tenmh: mh?.monhoc.tenmh,
                 sotinchi: mh?.monhoc.sotinchi,
                 hocphi: mh?.monhoc.sotinchi * 613000,
              },
           ])
         : toast.error('Đã có môn học...!')
   }

   const sumSTC = (a) => {
      let kq = 0
      for (let i = 0; i < a.length; i++) {
         kq = +kq + (+a[i].sotinchi || +a[i].monhocDK?.sotinchi)
      }
      return kq
   }

   const sumHocPhi = (a) => {
      let kq = 0
      for (let i = 0; i < a.length; i++) {
         kq = +kq + +a[i].hocphi
      }
      return kq
   }

   const handleRemoveDSDKMH = (mh) => {
      const newDS = dsMHDK.filter((i) => i.msmh !== mh.msmh)
      setDSMHDK(newDS)
   }

   const handleAddMHVaoDSDKMH = () => {
      dsMHDK.map((i) =>
         dispatch(actions.addMonhoc({ mssv: sinhvien.mssv, msmh: i.msmh, hocphi: i.hocphi ? i.hocphi : '0' }))
      )
      setDSMHDK([])
   }
   console.log(danhsachsvdk)
   return (
      <div className="m-1 p-[4px] border-[1px] text-[12px]">
         <div>
            <label htmlFor="msmh" className="p-2 font-bold">
               Lọc theo mã môn học
            </label>
            <input
               id="msmh"
               type="text"
               className="border-2 border-black border-none p-2 bg-white"
               onChange={(e) => setMSMH(e.target.value)}
            />
            <button
               type="submit"
               className="border-1 border-inherit py-2 px-1 bg-[#F0F0F0] font-bold rounded-sm"
               onClick={handleLocMonHoc}
            >
               Lọc môn học tự chọn
            </button>
         </div>
         <div className="h-[300px]">
            <table>
               <thead className="bg-[#F0F0F0]">
                  <tr>
                     <th width={10}>
                        <input type="checkbox" id="all" />
                     </th>
                     <th>Mã môn học</th>
                     <th>Mã môn học</th>
                     <th>Số tín chỉ</th>
                     <th>Học phí</th>
                  </tr>
               </thead>
               <tbody>
                  {listMH.length > 0 ? (
                     listMH.map((item) => {
                        return (
                           <tr key={item.id}>
                              <td width={10}>
                                 <input
                                    type="checkbox"
                                    name="check1"
                                    defaultValue={1}
                                    onClick={() => handleAddMHDK(item)}
                                 />
                              </td>
                              <td>{item.msmh}</td>
                              <td>{item?.monhoc.tenmh}</td>
                              <td>{item?.monhoc.sotinchi}</td>
                              <td>{item?.monhoc.sotinchi * 613000}</td>
                           </tr>
                        )
                     })
                  ) : (
                     <td colSpan={5} style={{ textAlign: 'center' }}>
                        Data rổng
                     </td>
                  )}
               </tbody>
            </table>
         </div>
         <div>
            <table>
               <thead className="bg-[#F0F0F0]">
                  <tr>
                     <th width={10}>
                        <input type="checkbox" id="all" />
                     </th>
                     <th>Mã môn học</th>
                     <th>Tên môn học</th>
                     <th>Số tín chỉ</th>
                     <th>Học phí</th>
                     <th>Tình trạng</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {danhsachsvdk.length > 0 &&
                     danhsachsvdk.map((item) => {
                        return (
                           <tr key={item.id}>
                              <td width={10}>
                                 <input type="checkbox" id="all" />
                              </td>
                              <td>{item.msmh}</td>
                              <td>{item?.monhocDK.tenmh}</td>
                              <td>{item?.monhocDK.sotinchi}</td>
                              <td>{item.hocphi}</td>
                              <td>Đã lưu vào CSDL</td>
                              <td>
                                 <button
                                    className="bg-[#F0F0F0] p-2 w-[100px] hover:font-bold"
                                    onClick={() => handleRemoveDSDKMH(item)}
                                 >
                                    Xoá
                                 </button>
                              </td>
                           </tr>
                        )
                     })}
                  {dsMHDK &&
                     dsMHDK.length > 0 &&
                     dsMHDK.map((item) => {
                        return (
                           <tr key={item.id}>
                              <td width={10}>
                                 <input type="checkbox" id="all" />
                              </td>
                              <td>{item.msmh}</td>
                              <td>{item.tenmh}</td>
                              <td>{item.sotinchi}</td>
                              <td>{item.hocphi}</td>
                              <td>Chưa lưu vào CSDL</td>
                              <td>
                                 <button
                                    className="bg-[#F0F0F0] p-2 w-[100px] hover:font-bold"
                                    onClick={() => handleRemoveDSDKMH(item)}
                                 >
                                    Xoá
                                 </button>
                              </td>
                           </tr>
                        )
                     })}
                  {dsMHDK.length > 0 ? (
                     <>
                        <tr>
                           <td colSpan={2} className="font-bold">
                              Tổng số tín chỉ
                           </td>
                           <td colSpan={5} className="font-bold">
                              {sumSTC(dsMHDK) + sumSTC(danhsachsvdk)}
                           </td>
                        </tr>
                        <tr>
                           <td colSpan={2} className="font-bold">
                              Tổng tiền
                           </td>
                           <td colSpan={5} className="font-bold">
                              {sumHocPhi(dsMHDK)} đ
                           </td>
                        </tr>
                     </>
                  ) : (
                     <>
                        <tr>
                           <td colSpan={2} className="font-bold">
                              Tổng số tín chỉ
                           </td>
                           <td colSpan={5} className="font-bold">
                              {sumSTC(danhsachsvdk)}
                           </td>
                        </tr>
                        <tr>
                           <td colSpan={2} className="font-bold">
                              Tổng tiền
                           </td>
                           <td colSpan={5} className="font-bold">
                              {sumHocPhi(danhsachsvdk)} đ
                           </td>
                        </tr>
                     </>
                  )}
                  <tr>
                     <td colSpan={7} className="w-[150px] text-center">
                        <button className="bg-[#F0F0F0] p-2 hover:font-bold float-right" onClick={handleAddMHVaoDSDKMH}>
                           Lưu lại trong cơ sở dử liệu
                        </button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}
export default Dangkymonhoc
