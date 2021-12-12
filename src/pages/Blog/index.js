import React from 'react';
import Carousel from './Carousel';
import { BlogFullContainer, BlogContainer } from './styles';

function Blog() {
    return (
        <BlogFullContainer>
            <BlogContainer id="READOURBLOG">
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
                    <Carousel />
                </div>
            </BlogContainer>
        </BlogFullContainer>
    );
};

export default Blog;
