import {Link} from "react-router-dom"
import Button from "./Button"
import { useState } from "react"

const Navbar = () => {

    let [open, setOpen] = useState(false)
    return(
        <header>
            <div className="fixed top-0 left-0 shadow-md w-full ">
                <div className="md:flex items-center justify-between bg-slate-50 py-4 md:px-20 px-7">
                    <div className="font-bold text-2xl flex items-center ">
                        <Link>Workout Buddy</Link>
                    </div>
                    <div className="md:flex">
                        <div onClick={()=>setOpen(!open)} className="absolute right-8 top-3 cursor-pointer md:hidden">
                            <Button>...</Button>
                        </div>
                        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg:white md:z-auto z-[-1] text-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
                            <li className="md:ml-8 text-xl md:my-0 my-7"><Link className="hover:text-gray-400 duration-500">wow</Link></li>
                            <li className="md:ml-8 text-xl md:my-0 my-7"><Link className="hover:text-gray-400 duration-500">pog</Link></li>
                            <li className="md:ml-8 text-xl md:my-0 my-7"><Link className="hover:text-gray-400 duration-500">lulw</Link></li>
                            <li className="md:ml-8 text-xl md:my-0 my-7"><Link className="hover:text-gray-400 duration-500">kekw</Link></li>
                            <Button>POGGERS</Button>
                        </ul>
                        
                    </div>
                    
                </div>
            </div>
        </header>
    )
}

export default Navbar