import { faBook, faCoins, faFeather, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { linkRoute } from '../../ultils/Common/constant'

function Nav() {
   return (
      <nav className="bg-white sticky top-0 w-full px-[8px] flex justify-between">
         <NavLink
            to={linkRoute.HOME_SV}
            className="mx-4 text-[Navy] w-[200px] p-[8px] text-center hover:bg-[#e8ebed] rounded-xl flex flex-col my-2 items-center justify-center text-[#404040]"
            style={({ isActive, isPending }) => {
               return {
                  backgroundColor: isActive ? '#e8ebed' : '',
                  borderBottom: isActive ? '2px' : '',
                  borderBottomColor: isActive ? 'red' : '',
                  borderStyle: isActive ? 'solid' : '',
                  // color: isActive ? "#1a1a1a" : "",
               }
            }}
         >
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
         </NavLink>
         <NavLink
            to={linkRoute.DKMH_SV}
            className="mx-4 text-[Navy] w-[200px] p-[8px] text-center hover:bg-[#e8ebed] rounded-xl flex flex-col my-2 items-center justify-center text-[#404040]"
            style={({ isActive, isPending }) => {
               return {
                  backgroundColor: isActive ? '#e8ebed' : '',
                  borderBottom: isActive ? '2px' : '',
                  borderBottomColor: isActive ? 'red' : '',
                  borderStyle: isActive ? 'solid' : '',
                  // color: isActive ? "#1a1a1a" : "",
               }
            }}
         >
            <FontAwesomeIcon icon={faBook} />
            <span>Đăng ký môn học</span>
         </NavLink>
         <NavLink
            to={linkRoute.DIEM_SV}
            className="mx-4 text-[Navy] w-[200px] p-[8px] text-center hover:bg-[#e8ebed] rounded-xl flex flex-col my-2 items-center justify-center text-[#404040]"
            style={({ isActive, isPending }) => {
               return {
                  backgroundColor: isActive ? '#e8ebed' : '',
                  borderBottom: isActive ? '2px' : '',
                  borderBottomColor: isActive ? 'red' : '',
                  borderStyle: isActive ? 'solid' : '',
                  // color: isActive ? "#1a1a1a" : "",
               }
            }}
         >
            <FontAwesomeIcon icon={faFeather} />
            <span>Điểm</span>
         </NavLink>
         <NavLink
            to={linkRoute.HOCPHI_SV}
            className="mx-4 text-[Navy] w-[200px] p-[8px] text-center hover:bg-[#e8ebed] rounded-xl flex flex-col my-2 items-center justify-center text-[#404040]"
            style={({ isActive, isPending }) => {
               return {
                  backgroundColor: isActive ? '#e8ebed' : '',
                  borderBottom: isActive ? '2px' : '',
                  borderBottomColor: isActive ? 'red' : '',
                  borderStyle: isActive ? 'solid' : '',
                  // color: isActive ? "#1a1a1a" : "",
               }
            }}
         >
            <FontAwesomeIcon icon={faCoins} />
            <span>Học phí</span>
         </NavLink>
      </nav>
   )
}

export default Nav
