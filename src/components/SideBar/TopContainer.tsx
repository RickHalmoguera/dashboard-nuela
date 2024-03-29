import Logo from "./Logo";
import UserAvatar from "./UserAvatar";

export default function TopContainer(){
    return(
        <div className="flex gap-2 items-center justify-between mb-10">
            <Logo/>
            <UserAvatar/>
        </div>
    )
}