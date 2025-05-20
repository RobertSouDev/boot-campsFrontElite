export default function Sidebar() {
    return ( 
        <aside className="bg-zinc-800 text-white md:fixed md:top-0  lmd:left-0 md:w-90 md:h-screen flex flex-col justify-around">
            <div className="h-[20%]   flex justify-center items-center">
                <h1 className="text-5xl text-center">Logo</h1>
            </div>
            <nav className="h-[80%] flex">
                <ul className="flex justify-around flex-col items-center w-full">
                    <li>
                        <a href="#">Dashboard </a>
                    </li>
                    <li>
                        <a href="#">Configurações </a>
                    </li>
                    <li>
                        <a href="#">Sair </a>
                    </li>
                </ul>
            </nav>
        </aside>
     );
}

