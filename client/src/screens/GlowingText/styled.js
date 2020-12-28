import styled, { keyframes } from "styled-components";

const glowKeyframes = ({
  theme: {
    colors: { rose, white, wildStrawberry },
  },
}) => keyframes`
  from {
    text-shadow: 0 0 10px ${white}, 0 0 20px ${white}, 0 0 30px ${rose},
      0 0 40px ${rose}, 0 0 50px ${rose}, 0 0 60px ${rose}, 0 0 70px ${rose};
  }

  to {
    text-shadow: 0 0 20px ${white}, 0 0 30px ${wildStrawberry}, 0 0 40px ${wildStrawberry},
      0 0 50px ${wildStrawberry}, 0 0 60px ${wildStrawberry}, 0 0 70px ${wildStrawberry}, 0 0 80px ${wildStrawberry};
  }
`;

export const GlowingHeading = styled.h1`
  animation: ${glowKeyframes}
    ${(props) => props.theme.times.glowingTextAnimationInterval} ease-in-out
    infinite alternate;
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
  font-size: 80px;
  text-align: center;
`;

const Wrapper = styled.div`
  align-items: center;
  background-color: ${({
    theme: {
      colors: { black },
    },
  }) => black};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  font-family: cursive;
  justify-content: center;
  height: 100%;
  padding: 2rem;
`;

export default Wrapper;
