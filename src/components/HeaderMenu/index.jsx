const HeaderMenu = ({setRegisterOpen}) => {
    return (
        <>

            <ul className="menu">
                <li>HEALTHY RECIPES</li>
                <li>BLOG</li>
                <li>JOIN</li>
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