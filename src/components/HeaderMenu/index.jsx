const HeaderMenu = ({setRegisterOpen}) => {
    return (
        <>

            <ul className="menu">
                <li><button>Healthy Recipes</button></li>
                <li><button>Blog</button></li>
                <li><button>Join</button></li>
                <li><button className="button" onClick={() => setRegisterOpen(true) }>Register</button></li>
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