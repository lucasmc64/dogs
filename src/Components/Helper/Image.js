import React from "react";

import styled, { keyframes } from "styled-components";

const DivWrapper = styled.div`
  display: grid;
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  grid-area: 1 / 1;
  opacity: 0;
  transition: 0.2s;
`;

const BaseDivSkeleton = styled.div`
  grid-area: 1 / 1;
  height: 100%;
  background: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const SkeletonAnimation = keyframes`
  from {
    background-position: 0px;
  }

  to {
    background-position: -200%;
  }
`;

const DivSkeleton = styled(BaseDivSkeleton)`
  animation-name: ${SkeletonAnimation};
`;

const Image = (props) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ currentTarget }) {
    setSkeleton(false);
    currentTarget.style.opacity = 1;
  }

  return (
    <DivWrapper>
      {skeleton && <DivSkeleton></DivSkeleton>}
      <Img onLoad={handleLoad} {...props} />
    </DivWrapper>
  );
};

export default Image;
