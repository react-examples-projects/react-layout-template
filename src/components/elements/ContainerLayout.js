import styled from "styled-components";

export default function ContainerLayout(props) {
  const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(220px, 1fr) 5fr;

    @media screen and (max-width: 760px) {
      display: block;
      margin-left: 3rem;
    }
  `;
  return <Container {...props} />;
}
