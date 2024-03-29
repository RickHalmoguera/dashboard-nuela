import Logo from "./Logo";
import UserAvatar from "./UserAvatar";

export default function TopContainer(){
    return(
        <div className="flex gap-2 py-[6px] px-3 items-center justify-between mb-10">
            <Logo/>
            <UserAvatar/>
        </div>
    )
}