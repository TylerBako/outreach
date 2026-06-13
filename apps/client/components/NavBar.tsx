function NavBar() {
    return (
        <div className= "flex flex-row justify-between p-1 bg-white shadow-sm">
            <h1 style={{color: '#f29057', fontSize: '40px', margin: 0}}>OutReach</h1>
            <ul className="flex p-4">    
                <li className="px-3"><a href="#">Previous Posts</a></li>
                <li className="px-3"><a href="#">Communities</a></li>
                <li className="px-3"><a href="#">Contact Us</a></li>
            </ul>    
        </div>
    )
}

export default NavBar