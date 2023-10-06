import "./navbar.css"
export default function Navbar() {
    return (
        <header className='navbar'>
            <a className='navbar__title navbar__item' href="http://localhost:3000/">Home</a>
            <a className='navbar__item' href="http://localhost:3000/">About Us</a>
            <a className='navbar__item' href="http://localhost:3000/">Contact</a>
            <a className='navbar__item' href="http://localhost:3000/">Help</a>
        </header>
    )
}


