import { useState } from 'react';
import { HeaderContainer, MainContainer, FooterContainer } from '../styles.pages';
import HeaderMenu from '../../components/HeaderMenu';
import HomeCardImg1 from '../../assets/img/comida_1.svg';
import HomeCardImg2 from '../../assets/img/comida_2.svg';
import HomeCardImg3 from '../../assets/img/comida_3.svg';
import HomeCardImg4 from '../../assets/img/comida_4.svg';
import BlogImage1 from '../../assets/img/blog_image_1.svg';
import BlogImage2 from '../../assets/img/blog_image_2.svg';
import BlogImage3 from '../../assets/img/blog_image_3.svg';
import BlogImage4 from '../../assets/img/blog_image_4.svg';
import Register from '../Register';

const Home = () => {
    const [registerOpen, setRegisterOpen] = useState(false);
    return (
        <>
            <Register open={registerOpen} setOpen={setRegisterOpen} />
            <HeaderContainer>
                <div className="header-bar">
                    <span className="logotype">Healthy Food</span>
                    <HeaderMenu setRegisterOpen={setRegisterOpen} />
                </div>
                <div className="header-call-to-action">
                    <h1>Ready for Trying a new recipe?</h1>
                    <div className="form-box">
                        <input type="text" placeholder="Search healthy recipes" />
                        <button className="button">O</button>
                    </div>
                </div>
            </HeaderContainer>
            <MainContainer>
                <section className="home-our-best-recipes">
                    <div>
                        <h2>Our Best Recipes</h2>
                        <span>
                            Far far away, behind the word mountains,  far from the countries<br />
                            Vokalia and Consonantia, there live the blind texts.
                        </span>
                    </div>
                    <div className="home-card">
                        <img src={HomeCardImg1} alt="" />
                        <div>
                            <h3>Broccoli Salad<br />with Bacon</h3>
                            <button className="button">See Recipe</button>
                        </div>
                    </div>
                    <div className="home-card">
                        <img src={HomeCardImg2} alt="" />
                        <div>
                            <h3>Classic Beef<br />Burgers</h3>
                            <button className="button">See Recipe</button>
                        </div>
                    </div>
                    <div className="home-card">
                        <img src={HomeCardImg3} alt="" />
                        <div>
                            <h3>Classic Potato<br />Salad</h3>
                            <button className="button">See Recipe</button>
                        </div>
                    </div>
                    <div className="home-card">
                        <img src={HomeCardImg4} alt="" />
                        <div>
                            <h3>Cherry Cobbler<br />on the Grill</h3>
                            <button className="button">See Recipe</button>
                        </div>
                    </div>
                </section>
                <section className="home-the-best-services">
                    <div>
                        <h3>
                            The best services ready<br />
                            To serve you
                        </h3>
                        <br />
                        <p>Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <br />
                        <button className="button">Know More</button>
                    </div>
                </section>
                <section className="home-read-our-blog">
                    <div>
                        <h3>
                            Read Our Blog
                        </h3>
                        <br />
                        <p>Far far away, behind the word mountains,  far from the countries</p>
                        <p>Vokalia and Consonantia, there live the blind texts.</p>
                        <br />
                    </div>
                    <div>
                        <div>
                            <img src={BlogImage1} alt="" />
                            <h3>Quic-start guide to nuts and seeds</h3>
                            <div>
                                <img src="" alt="" />
                                <span>Kevin Ibrahim</span>
                            </div>
                        </div>
                        <div>
                            <img src={BlogImage2} alt="" />
                            <h3>Quic-start guide to nuts and seeds</h3>
                            <div>
                                <img src="" alt="" />
                                <span>Kevin Ibrahim</span>
                            </div>
                        </div>
                        <div>
                            <img src={BlogImage3} alt="" />
                            <h3>Quic-start guide to nuts and seeds</h3>
                            <div>
                                <img src="" alt="" />
                                <span>Kevin Ibrahim</span>
                            </div>
                        </div>
                        <div>
                            <img src={BlogImage4} alt="" />
                            <h3>Quic-start guide to nuts and seeds</h3>
                            <div>
                                <img src="" alt="" />
                                <span>Kevin Ibrahim</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-join-call-to-action">
                    <div>
                        <h2>
                            Join our membership<br />
                            to get special offer
                        </h2>
                        <div>
                            <input type="text" />
                            <button className="button">Join</button>
                        </div>
                    </div>
                </section>
            </MainContainer>
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
        </>
    );
}

export default Home;