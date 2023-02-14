import styled from 'styled-components';

interface SlideTitleProps {
  imgSrc: string;
}

interface SlideContentProps {
  position: number | string;
}

export const SlideTitle = styled.img<SlideTitleProps>`
  max-width: 100%;
  position: relative;
  display: block;
  content: url(${(props) => props.imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  flex-shrink: 0;
  width: 80%;
  margin: 0 10%;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 4px;

  @media screen and (min-width: 1910px) and (max-width: 1920px) {
    max-width: 550px;
    position: relative;
    display: block;
    content: url(${(props) => props.imgSrc});
    background-size: cover;
    background-repeat: no-repeat;
    flex-shrink: 0;
    width: 80%;
    margin: 0 35.5%;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 4px;
  }
`;

export const SlideContent = styled.div<SlideContentProps>`
  display: flex;
  transition: transform 0.3s ease;
  transform: translateX(${(props) => props.position}px);
`;

export const SlideContainer = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  overflow: hidden;
  margin-top: 1rem;
`;

export const SlideButton = styled.button`
  cursor: pointer;
  margin: 0 30px;
  padding: 15px 30px;
  border: 0;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
`;

export const SlideNavigation = styled.nav`
  top: 400px;
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
`;