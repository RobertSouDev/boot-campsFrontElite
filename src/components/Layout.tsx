import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({children}: { children: React.ReactNode}) {
    return ( 
        <div className="bg-black min-h-screen text-white flex">
            <div className="md:w-90 flex-shrink-0 ">
                <Sidebar/>
            </div>
            
            <div className="flex-1 flex flex-col overflow-auto">
                <Header/>
                <main className="flex-1 p-4">
                    <div className="">{children}</div>
                </main>
            </div>
        </div>
    );
}