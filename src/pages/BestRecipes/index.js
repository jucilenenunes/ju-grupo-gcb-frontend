import React from 'react';
import { BestRecipesContainer } from './styles';
import HomeCardImg1 from '../../assets/img/comida_1.svg';
import HomeCardImg2 from '../../assets/img/comida_2.svg';
import HomeCardImg3 from '../../assets/img/comida_3.svg';
import HomeCardImg4 from '../../assets/img/comida_4.svg';

function BestRecipes() {
    return (
        <BestRecipesContainer>
            <article>
                <h2>Our Best Recipes</h2>
                <span>
                    Far far away, behind the word mountains,  far from the countries<br />
                    Vokalia and Consonantia, there live the blind texts.
                </span>
            </article>
            <div>
                <img src={HomeCardImg1} alt="Broccoli Salad with Bacon" />
                <div>
                    <h3>Broccoli Salad<br />with Bacon</h3>
                    <button>See Recipe</button>
                </div>
            </div>
            <div>
                <img src={HomeCardImg2} alt="Classic Beef Burgers" />
                <div>
                    <h3>Classic Beef<br />Burgers</h3>
                    <button>See Recipe</button>
                </div>
            </div>
            <div>
                <img src={HomeCardImg3} alt="Classic Potato Salad" />
                <div>
                    <h3>Classic Potato<br />Salad</h3>
                    <button>See Recipe</button>
                </div>
            </div>
            <div>
                <img src={HomeCardImg4} alt="Cherry Cobbler on the Grill" />
                <div>
                    <h3>Cherry Cobbler<br />on the Grill</h3>
                    <button>See Recipe</button>
                </div>
            </div>
        </BestRecipesContainer>
    );
};

export default BestRecipes;
