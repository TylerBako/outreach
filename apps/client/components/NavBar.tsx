import { Link, useLocation } from 'react-router-dom'


function NavBar() {
    const location = useLocation();

    

    return (
        <div className= "flex flex-row justify-between p-1 shadow-lg" style={{backgroundColor: '#fffdf8'}}>
            <div className="flex flex-row items-center pl-5">
            <div className="w-[40px] h-[40px] rounded-[11px] shadow-[0_3px_9px_rgba(242,144,87,0.4)]"
            style={{background: "radial-gradient(circle at 36% 50%, #ffffff 0 21%, transparent 22%), radial-gradient(circle at 64% 50%, #ffffff 0 21%, transparent 22%), #f29057"}}>
            </div>
            <h1 style={{color: '#2b2622', fontSize: '30px', margin: 0}} className ="px-3 ">Outreach</h1>
            </div>
            <ul className="flex p-4 gap-[30px]">    

                <li className="px-3 flex gap-[30px]" style ={{position: 'relative', cursor: 'pointer', padding: '15px 0'}}><Link to="/previous-posts" style={{color: '#8a8178'}}>Previous Posts</Link>
                    {location.pathname === '/previous-posts' && <div style={{position: 'absolute', left: 0, right: 0, bottom: '15px', height: '3px', borderRadius: '3px', background: '#f29057'}}></div> }</li>


                <li className="px-3 flex gap-[30px]" style={{position: 'relative', cursor: 'pointer', padding: '15px 0'}}><Link to="/" style={{color: '#8a8178'}}>Feed</Link>
                {location.pathname ==='/' &&  <div style={{position: 'absolute', left: 0, right: 0, bottom: '15px', height: '3px', borderRadius: '3px', background: '#f29057'}}></div>
                }</li>

                <li className="px-3 flex gap-[30px]" style = {{position: 'relative', cursor: 'pointer', padding: '15px 0'}}><Link to ="/" style ={{color: '#8a8178'}}>Community</Link>
                {location.pathname === '/community' && <div style={{position: 'absolute', left: 0, right: 0, bottom: '15px', height: '3px', borderRadius: '3px', background: '#f29057'}}></div>}</li>



                <li className="px-3 flex gap-[30px]" style ={{position: 'relative', cursor: 'pointer', padding: '15px 0'}}><Link to ="/" style ={{color: '#8a8178'}}> Contact Us</Link>
                {location.pathname === '/contact-us' && <div style={{position: 'absolute', left: 0, right: 0, bottom: '15px', height: '3px', borderRadius: '3px', background: '#f29057'}}></div> } </li>

                <li className="px-3 flex gap-[30px]" style ={{position: 'relative', cursor: 'pointer', padding: '15px 0'}}><Link to ="/" style={{color: '#8a8178'}}>Resources</Link>
                {location.pathname === '/resources' && <div style={{position: 'absolute', left: 0, right: 0, bottom: '15px', height: '3px', borderRadius: '3px', background: '#f29057'}}></div>}</li>
                
            </ul>    
        </div>
    )
}

export default NavBar