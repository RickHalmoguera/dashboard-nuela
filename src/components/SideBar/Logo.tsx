import LogoImg from '../../assets/logo.png'


export default function Logo (){
    return(
        <div className='flex gap-2'>
            <img className=' w-6 h-6  border-solid border-[0.2px] border-black rounded object-cover ' src={LogoImg} alt="Logo" />
            <p className='font-primary font-medium text-sm'>Tajamar</p>
        </div>
    )
}