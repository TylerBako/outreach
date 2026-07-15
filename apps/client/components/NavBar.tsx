import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className= "flex flex-row justify-between p-1 shadow-lg" style={{backgroundColor: '#302a26'}}>
            <h1 style={{color: '#f29057', fontSize: '40px', margin: 0}} className ="px-3">OutReach</h1>
            <ul className="flex p-4">    
                <li className="px-3 text-white"><Link to="/previous-posts">Previous Posts</Link></li>
                <li className="px-3 text-white"><Link to="/">Feed</Link></li>
            </ul>    
        </div>
    )
}

export default NavBar