import { getColorByTheme, getSize } from "react-styled-guide";
import styled from "styled-components";

export const BandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerImage = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 200px;
  width: 100%;
`;

export const Title = styled.h1`
  margin-top: -100px;
`;

export const RoundedImage = styled.img`
  width: ${getSize(({ xxxl }) => xxxl)};
  height: ${getSize(({ xxxl }) => xxxl)};
  border-radius: ${getSize(({ xxxl }) => xxxl)};
  -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
`;

export const Description = styled.p`
  padding: ${getSize(({ xxxs }) => xxxs)};
  color: ${getColorByTheme(
    ({ neutral }) => neutral.dark,
    ({ neutral }) => neutral.lighter
  )};
  line-break: anywhere;
`;

export const Albums = styled.ul`
  list-style: none;
  width: 100%;
`;

export const AlbumImage = styled.img`
  width: -webkit-fill-available;
`;
