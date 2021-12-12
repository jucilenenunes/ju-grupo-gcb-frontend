const HeaderMenu = ({setRegisterOpen}) => {
    return (
        <>

            <ul className="menu">
                <li><a href="/#OURBESTRECIPES">HEALTHY RECIPES</a></li>
                <li><a href="/#READOURBLOG">BLOG</a></li>
                <li><a href="/#JOINOURMEMBERSHIP">JOIN</a></li>
                <li><button onClick={() => setRegisterOpen(true) }>REGISTER</button></li>
            </ul>


            <span className="menu-mobile-btn">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </>
    );
}

export default HeaderMenu;