import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const Carousel = (props) => {
  const items = [];
  let key = 0;
  props.projects.forEach((project) => {
    key += 1;
    const item = {
      src: project.imgUrl,
      altText: project.name,
      caption: '',
      header: project.name,
      key,
    };
    items.push(item);
  });
  return <UncontrolledCarousel items={items} />;
};
export default Carousel;
