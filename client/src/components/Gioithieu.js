import { Link } from 'react-router-dom'

function Gioithieu() {
   const gioithieu = [
      'Quy định - quy chế',
      'Nội quy',
      'Hướng dẫn và quy trình',
      'Biểu mẫu',
      'Biểu đồ giảng dạy học tập',
      'Chương trình đào tạo',
      'Niên giám',
      'Sổ tay đăng ký môn học',
      'Thông tin công khai',
   ]
   return (
      <div className="p-[12px] uppercase border-[#ccc] border-[1px] border-solid m-1">
         <div className="">
            <Link className="text-[16px] text-[#FF0000] p-0 m-0 hover:underline" to="/gioithieu">
               Thông tin quản lý đào tạo
            </Link>
            <span className="text-[10px] text-[#808080] ml-[4px]">(30/08/2016)</span>
         </div>
         <ul className="uppercase">
            {gioithieu.map((item, index) => {
               return (
                  <li key={index} className="text-[#000080] text-[16px] pl-[40px]">
                     {index}.{item}
                  </li>
               )
            })}
         </ul>
      </div>
   )
}
export default Gioithieu
