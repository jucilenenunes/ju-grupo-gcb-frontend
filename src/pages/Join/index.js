import React from 'react';
import { JoinContainer } from './styles';

function Join() {
    return (
        <JoinContainer id="JOINOURMEMBERSHIP">
            <div>
                <h2>
                    Join our membership<br />
                    to get special offer
                </h2>
                <div>
                    <input type="text" />
                    <button>Join</button>
                </div>
            </div>
        </JoinContainer>
    );
};

export default Join;
