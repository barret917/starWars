import style from "./Header.module.css"
import {NavLink} from "react-router-dom"

function Header(){
    return(
    <div className={style.header_container}>
         <ul className={style.header_list}>
          <li> <NavLink to="/">Home</NavLink> </li>
          <li> <NavLink to="/people">People</NavLink></li>
          <li> <NavLink></NavLink></li>
         </ul>
    </div>
    )
}

export default Header