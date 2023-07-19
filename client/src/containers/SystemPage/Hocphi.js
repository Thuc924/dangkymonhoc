import { linkRoute } from '../../ultils/Common/constant'
import * as actions from '../../store/actions'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { createHocphi, getListHocPhi } from '../../store/actions/hocphi'
import moment from 'moment'
import jsPDF from 'jspdf'
import 'jspdf/dist/polyfills.es'
import 'jspdf/dist/jspdf.umd'
function Hocphi() {
   const navigate = useNavigate()

   const dispatch = useDispatch()
   const { isLoggedInAdmin } = useSelector((state) => state.auth)
   const { danhsachs } = useSelector((state) => state.dangkymonhoc)
   const { dshocphi, token } = useSelector((state) => state.hocphi)

   const [list, setList] = useState()

   const [showInput, setShowInput] = useState(false)
   const [Pay, setPay] = useState({
      price: 0,
      mssv: '',
   })
   useEffect(() => {
      dispatch(actions.getAllDSMHDK())
      dispatch(getListHocPhi())
      get()
      !isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
   }, [isLoggedInAdmin, token])
   const get = () => {
      const list = danhsachs.reduce((acc, item) => {
         const currentItem = acc?.find((ac) => ac.mssv === item.mssv)
         if (!currentItem) {
            acc.push(item)
         } else {
            currentItem.hocphi = +currentItem.hocphi + +item.hocphi
         }
         return acc
      }, [])
      setList(list)
   }
   const handleSubmitHocphi = (i) => {
      dispatch(
         createHocphi({
            mshp: `HD${Math.floor(Math.random() * 10000)}`,
            mssv: i.mssv,
            mshocky: i.monhocDK?.mshocky,
            hocphi: Pay.price,
         })
      )
      toast.success('Thành công...!')
      setShowInput(false)
      setPay({ mssv: '', price: 0 })
   }
   const createPDF = () => {
      const doc = new jsPDF('p', 'px', 'a4')
      doc.setFont('courier', 'italic')
      list.map((i) => {
         doc.text(20, 20, `${i.msmh} - ${i.Sinhvien?.tensv} - ${i.hocphi}`)
      })
      doc.save('demo.pdf')
      // doc.addPage()
      const elementHTML = document.querySelector('#form')
      // console.log(elementHTML)
      // doc.html(elementHTML, {
      //    callback: function (doc) {
      //       doc.save('demo.pdf')
      //    },
      //    margin: [10, 10, 10, 10],
      //    width: 190,
      //    windowWidth: 675,
      //    x: 0,
      //    autoPaging: 'text',
      //    y: 0,
      // })
   }
   return (
      <div className="app sidebar-minj rtl">
         <main className="app-content">
            <div className="app-title">
               <ul className="app-breadcrumb breadcrumb side">
                  <li className="breadcrumb-item active">
                     <a href="#">
                        <b>Danh sách học phí</b>
                     </a>
                  </li>
               </ul>
               <div id="clock" />
            </div>

            <div className="row">
               <div className="col-md-12">
                  <div className="tile">
                     <div className="tile-body">
                        <a className="btn btn-delete btn-sm" type="button" title="PDF">
                           <button onClick={createPDF}>PDF</button>
                        </a>
                        <table
                           className="table table-hover table-bordered js-copytextarea"
                           cellPadding={0}
                           cellSpacing={0}
                           border={0}
                        >
                           <thead>
                              <tr>
                                 <th>Mã số sinh viên</th>
                                 <th>Tên sinh viên</th>
                                 <th>Học phí</th>
                                 <th>Học kỳ</th>
                                 <th>Action</th>
                                 <th>Thời gian</th>
                              </tr>
                           </thead>
                           {list &&
                              list.length > 0 &&
                              list.map((item) => {
                                 return (
                                    <tbody key={item.id} id="form">
                                       <tr>
                                          <td>{item.mssv}</td>
                                          <td>{item.Sinhvien?.tensv}</td>
                                          <td>
                                             {new Intl.NumberFormat('VI', {
                                                style: 'currency',
                                                currency: 'VND',
                                             }).format(item.hocphi)}
                                          </td>
                                          <td>{item.monhocDK?.mshocky}</td>

                                          {dshocphi.find((i) => i.mssv === item.mssv) ? (
                                             <>
                                                <td>
                                                   <button
                                                      disabled
                                                      className="text-center w-[130px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2"
                                                   >
                                                      Đã đóng
                                                   </button>
                                                </td>
                                                <td>{moment(item.createdAt).format('DD/MM/YYYY')}</td>
                                             </>
                                          ) : (
                                             <td>
                                                {showInput && Pay.mssv === item.mssv ? (
                                                   <>
                                                      <input
                                                         onChange={(e) => setPay({ ...Pay, price: e.target.value })}
                                                         className="border-[1px] border-solid border-black p-2 rounded-xl"
                                                         type="number"
                                                         placeholder="Nhập số tiền..."
                                                         value={Pay.price}
                                                      />
                                                      <button
                                                         onClick={() => setPay({ ...Pay, price: item.hocphi })}
                                                         className="p-2 border-[1px] border-solid border-black m-2 w-[60px] bg-[red] rounded-xl text-white"
                                                      >
                                                         All
                                                      </button>
                                                      <button
                                                         onClick={() => handleSubmitHocphi(item)}
                                                         className="p-2 border-[1px] border-solid border-black m-2 w-[60px] bg-[red] rounded-xl text-white"
                                                      >
                                                         Lưu
                                                      </button>
                                                      <button
                                                         onClick={() => {
                                                            setShowInput(false)
                                                            setPay({ mssv: '', price: 0 })
                                                         }}
                                                         className="p-2 border-[1px] border-solid border-black m-2 w-[60px] bg-[red] rounded-xl text-white"
                                                      >
                                                         Hủy
                                                      </button>
                                                   </>
                                                ) : (
                                                   <button
                                                      // onClick={() => handleSubmitHocphi(item)}
                                                      onClick={() => {
                                                         setShowInput(true)
                                                         setPay({ ...Pay, mssv: item.mssv })
                                                      }}
                                                      className="text-center w-[130px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2 cursor-pointer hover:border-[#0000008a] hover:text-[#000000ad]"
                                                   >
                                                      Xác nhận đóng
                                                   </button>
                                                )}
                                             </td>
                                          )}
                                       </tr>
                                    </tbody>
                                 )
                              })}
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </div>
   )
}

export default Hocphi
