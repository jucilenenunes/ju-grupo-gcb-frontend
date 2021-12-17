import styled from 'styled-components';
import Slider from 'react-slick';
import { CarouselContainer768 } from './styles.max.768';
import { CarouselContainer1024 } from './styles.max.1024';
import { CarouselContainer1200 } from './styles.max.1200';

const CarouselContainerStyles = `
  > div > div > div > div > div > div {  
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  > div > div > div > div > div > div > img {
    margin-right: 10px;
  }

  div.slick-list {
    height: 560px !important;
  }

  .slick-prev:before, .slick-next:before{
    color: var(--bg-green);
  }

  div.slick-slide {
    margin-right: 16px;
    box-shadow: 0px 15px 20px -15px #1D164DCC;
  }

  img {
      width: 100%;
      margin: 0;
      padding: 0;
      border: 0;
  }

  > div > div {
    display: flex;
    justify-content: start;
    align-items: center;
 }


 > div > div > img {
  margin-right: 10px;
 }

  h3,
  div {
      padding: 10px;
  }

  img.user {
    width: 52px;
    height: 52px;
  }

  ${CarouselContainer768}
  ${CarouselContainer1024}
  ${CarouselContainer1200}
`;

export const CarouselContainer = styled(Slider)`
  ${CarouselContainerStyles}
`;

export const CarouselContainerMobile = styled.div`
  ${CarouselContainerStyles}
`;