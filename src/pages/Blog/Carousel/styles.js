import styled from 'styled-components';
import Slider from 'react-slick';

export const CarouselContainer = styled(Slider)`
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

  h3,
  div {
      padding: 10px;
  }

  img.user {
    width: 52px;
    height: 52px;
  }
`;