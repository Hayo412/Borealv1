import PropTypes from 'prop-types'
import Link from 'next/link'

const Header = (props) => (
    <header id="header" className="alt">
        <Link href="index">
            <span className="logo"><img src="/static/images/logotipo.jpg" alt="" /></span>
        </Link>
        <nav>
        
        <Link href="index">
            <a ><span>What we do</span></a>
        </Link>

        <Link href="who">
            <a ><span>Who we are</span></a>
        </Link>

        <Link href="index">
            <a ><span>Contact Us</span></a>
        </Link>

        <Link href="index">
            <ul className="actions ">
                <li><a href="#" className="button special fit small">Hire Us</a></li>
            </ul>
        </Link>



            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
