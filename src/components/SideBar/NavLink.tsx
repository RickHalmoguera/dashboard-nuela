import { IconType } from "react-icons";

export default function NavLink({ Icon, text }: { Icon: IconType | string, text: string }) {
    return (
        <div className="flex gap-3 items-center">
            {typeof Icon === 'string' ? (
            <img className="w-4 h-4" src={Icon} alt="icon" />
            ) : (
            <Icon className="w-4 h-4" />
            )}
            <p className="font-primary font-normal text-sm">{text}</p>
        </div>
    )
}
