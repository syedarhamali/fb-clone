import './index.css'
import logo from './assets/logo.svg'

function Header(){
    return(
        <header>
                <div className="header-child">
                    <img src={logo} alt="logo"/>
                    <input type="text" />
                </div>
                <div className="header-child">
                    <i>1</i>
                    <i>1</i>
                    <i>1</i>
                </div>
                <div className="header-child">
                    
                </div>
        </header>
    )
}

export default Header;