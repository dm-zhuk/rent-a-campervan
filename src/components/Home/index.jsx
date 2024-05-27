import styled from '@emotion/styled';

/* HomePage */
export const HomeContainer = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  gap: 12px;
`;

export const ImgThumb = styled.img`
  width: 90%;
  height: auto;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 10px;
  background: lightgray -57px -4.651px / 195.679% 103.001% no-repeat;
`;

export const HomeAdvert = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  max-width: 1200px;
  text-align: center;
  margin-bottom: 24px;
`;

export const Features = styled.ul`
  display: inline-flex;
  align-items: center;
  gap: 36px;
`;

export const FeatureItem = styled.li`
  font-weight: 500;
  line-height: 1.25em;
`;
export const Button = styled.button`
  display: flex;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  line-height: 1.5em;
  letter-spacing: -0.08px;
  border: none;
  border-radius: 200px;
  color: white;
  background: #e44848;
  cursor: pointer;

  &:focus,
  &:hover {
    background: #d84343;
  }
`;

export const H1 = styled.h1`
  font-size: 32px;
  line-height: 1.25em;
  text-align: center;
`;

export const H2 = styled.h2`
  max-width: 960px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.25em;
  text-align: center;
  margin: 0;
`;
