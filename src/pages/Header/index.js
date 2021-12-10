import React from 'react';
import { useState } from 'react';
import HeaderMenu from '../../components/HeaderMenu';
import MaterialIcon from '@material/react-material-icon';
import Register from '../Register';
import { HeaderContainer } from './styles';

function Header() {
    const [registerOpen, setRegisterOpen] = useState(false);
    return (
        <HeaderContainer>
            <Register open={registerOpen} setOpen={setRegisterOpen} />
            <div className="header-bar">
                    <span className="logotype">Healthy Food</span>
                    <HeaderMenu setRegisterOpen={setRegisterOpen} />
                </div>
                <div className="header-call-to-action">
                    <h1>Ready for Trying a new recipe?</h1>
                    <div className="form-box">
                        <input type="text" placeholder="Search healthy recipes" />
                        <button>{<MaterialIcon role="button" icon="search"/>}</button>
                    </div>
            </div>
        </HeaderContainer>
    );
};

export default Header;
