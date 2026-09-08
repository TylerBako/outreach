import { Link } from 'react-router-dom'

export default function PublicNavbar() {

    return (
        <header className="w-full bg-white">
            <nav className="px-5 py-5 flex items-center justify-between">

                <Link to="/" className="flex flex-row items-center">
                    <div className="w-[40px] h-[40px] rounded-[11px] shadow-[0_3px_9px_rgba(242,144,87,0.4)]"
                    style={{background: "radial-gradient(circle at 36% 50%, #ffffff 0 21%, transparent 22%), radial-gradient(circle at 64% 50%, #ffffff 0 21%, transparent 22%), #f29057"}}>
                    </div>
                    <h1 style={{color: '#2b2622', fontSize: '30px', margin: 0}} className ="px-3 ">Outreach</h1>
                </Link>

                <div className="flex items-center gap-8">
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </nav>
        </header>
    )
}