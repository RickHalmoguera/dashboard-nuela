import NavLink from "./NavLink"
import LogoNuela from "../../assets/logo-2.png"
import { CiClock2 } from "react-icons/ci"
import { PiGraduationCap } from "react-icons/pi"
import { PiUsersThree } from "react-icons/pi"
import { BsBox } from "react-icons/bs"
import { IoBookOutline } from "react-icons/io5"
import { CiBellOn } from "react-icons/ci"
import { CiSettings } from "react-icons/ci"



export default function NavLinkContainer(){
    return(
        <div className="flex flex-col"> 
            <NavLink Icon ={LogoNuela} text="Inicio"/>
            <NavLink Icon ={CiClock2} text="Horarios"/>
            <NavLink Icon ={PiGraduationCap} text="Profesores"/>
            <NavLink Icon ={PiUsersThree} text="Familias"/>
            <NavLink Icon ={BsBox} text="Espacios"/>
            <NavLink Icon ={IoBookOutline} text="Asignaturas"/>
            <NavLink Icon ={CiBellOn} text="Notificaciones"/>
            <NavLink Icon ={CiSettings} text="Settings"/>
        </div>
    )
}