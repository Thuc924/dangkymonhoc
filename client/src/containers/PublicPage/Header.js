import { Link } from 'react-router-dom'

import images from '../../assets/images'

function Header() {
   return (
      <div className="text-[12px]">
         <img className="w-full" src={images.banner} alt="Banner Stu" />
         <div className="mt-2 text-right">
            <span className="mr-4 text-red-500">Chào bạn</span>
            <Link to="/login" className="mr-4 font-bold text-red-500">
               Đăng nhập
            </Link>
            <select className="border-2 border-[black]" defaultValue>
               <option value={null}>-- Font --</option>
               <option value="unicode">Font Unicode</option>
               <option value="ABC">Font ABC</option>
               <option value="VI">Font VI</option>
               <option value="text">Text không dấu</option>
            </select>
         </div>
      </div>
   )
}

export default Header
