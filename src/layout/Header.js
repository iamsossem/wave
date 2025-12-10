import { Link } from "react-router-dom"
import NavContainer from "../pages/NavContainer"
import SelectLang from "../pages/SelectLang"
import "../styles/Header.css";
const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">ConnectWave</Link>
      {/* 햄버거 버튼 추가 */}
      <button className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>      
      <NavContainer />
      <SelectLang />
    </header>
  )
}
export default Header