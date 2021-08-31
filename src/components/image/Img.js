import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

const Figure = styled.figure`
  max-width: 100%;
  width: auto;
  margin-bottom: 2rem;
`;

export default function Img({ src, title = "Untitle" }) {
  return (
    <Figure className="figure">
      <Image src={src} alt={title} />
      <figcaption>{title}</figcaption>
    </Figure>
  );
}
