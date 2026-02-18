import logo from '../../assets/logo.png'

function Header () {
    return (
        <header className="box-border fixed w-[100%] h-[70px] flex justify-center pt-[10px]">
            <div className="relative w-[40%] h-[100%] bg-white/75 backdrop-blur-xs shadow-sm border border-2 border-gray-200 rounded-lg flex flex-row justify-between items-center px-[20px]">
                <div className="flex flex-row items-center gap-2">
                    <img src={logo} alt="logo" className='w-8 h-8' />
                    <h1 className="title text-black font-bold text-xl">RaisikoTy</h1>
                </div>
                <span className="w-8 h-8 text-black border border-2 border-gray-200 rounded-full flex justify-center items-center">
                    <i class="fa-solid fa-moon text-xl"></i>
                </span>
            </div>
        </header>
    )
}

export default Header;