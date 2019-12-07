import PropTypes from 'prop-types'
import Link from 'next/link'

const Header = (props) => (
    <header id="header" className="alt ">
    
        <Link href="index">
            <a className="logo"><span className="ellogo"><img src="/static/images/logotipo.jpg" alt="" /></span></a>
        </Link>
        <nav>
        <Link href="index">
            <a className="hidemobile" ><span>What we do</span></a>
        </Link>

        <Link href="who">
            <a className="hidemobile"><span>Who we are</span></a>
        </Link>

        <Link href="index">
            <a className="hidemobile"><span>Contact Us</span></a>
        </Link>

        <Link href="index">
            <ul className="actions ">
                <li><a  href="#" className="button special fit hidemobile">Hire Us</a></li>
            </ul>
        </Link>
            <a className="nodesktop menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
        
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
