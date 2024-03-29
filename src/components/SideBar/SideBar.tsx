import NavLinkContainer from "./NavLinkContainer"
import TopContainer from "./TopContainer"

export default function SideBar (){
    return(
        <>
            <aside className='h-screen w-64 py-8 px-4'>
                <TopContainer/> 
                <NavLinkContainer/>
            </aside>
        </>
    )
}