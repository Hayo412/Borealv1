import PropTypes from 'prop-types'
import Link from 'next/link'

const Header = (props) => (
    <header id="header" className="alt">
        <Link href="index">
            <a className="logo"><strong>=</strong> <span>BOREAL</span></a>
        </Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
