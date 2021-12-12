import React from 'react';
import { FooterFullContainer, FooterContainer } from './styles';
function Footer() {
    return (
        <FooterFullContainer>
            <FooterContainer>
                <div>
                    <span>&copy; Copyrights 2019 Stock. All Rights Reserved.</span>
                </div>
                <div>
                    <span>
                        Privacy Policy
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        Terms and Conditions
                    </span>
                </div>
            </FooterContainer>
        </FooterFullContainer>
    );
};

export default Footer;
