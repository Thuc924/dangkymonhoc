import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { getListMonhoc } from '../store/actions'

function ModelMonhoc({ setShowModel, mskhoa }) {
   const dispatch = useDispatch()
   const { monhocs } = useSelector((state) => state.monhoc)
   console.log(monhocs)
   useEffect(() => {
      dispatch(getListMonhoc())
   }, [])
   return (
      <div className="fixed z-[1] pt-[100px] left-0 top-0 w-[100%] h-[100%] bg-[#0006]">
         <div className="fixed z-[1] pt-[100px] left-0 top-0 w-[100%] h-[100%] bg-[#0006]">
            <div className="absolute w-[1000px] h-[670px] bg-white left-[50%] right-[50%] translate-x-[-50%] p-[10px] rounded-xl overflow-scroll">
               <div className="text-[14px] font-bold flex justify-end">
                  <span className="cursor-pointer p-2 hover:opacity-80" onClick={() => setShowModel(false)}>
                     X
                  </span>
               </div>
               <div className="row">
                  <div className="form-group col-md-12">
                     <span className="thong-tin-thanh-toan">
                        <h5 className="text-center uppercase pt-0">Danh sách các môn học</h5>
                     </span>
                  </div>
               </div>
               <div>
                  <div className="mt-2">
                     <table>
                        <thead>
                           <tr>
                              <th>Mã môn học</th>
                              <th>Tên môn học</th>
                              <th>Số tín chỉ</th>
                              <th>Học phí</th>
                           </tr>
                        </thead>
                        <tbody>
                           {monhocs &&
                              monhocs.length > 0 &&
                              monhocs
                                 .filter((i) => i.mskhoa === mskhoa)
                                 .map((i, index) => {
                                    return (
                                       <tr key={index}>
                                          <td className="italic">{i.msmh}</td>
                                          <td>{i.tenmh}</td>
                                          <td>{i.sotinchi}</td>
                                          <td>{i.sotinchi * 613000}</td>
                                       </tr>
                                    )
                                 })}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default ModelMonhoc
