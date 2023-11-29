import Form from "../components/Form";
import Logo from "../components/Logo";

const Header = function({handleDataItems}){

    return<header className="CheckListHeader">
    <Logo/>
    <Form handleDataItems={handleDataItems}/>
    </header>
}
export default Header;