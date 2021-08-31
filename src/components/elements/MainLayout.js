import styled from "styled-components";

export default function MainLayout(props) {
  const Main = styled.main`
    padding: 3rem;
    position: relative;
    overflow-y: auto;
    height: 100vh;
  `;
  return <Main {...props} />;
}
