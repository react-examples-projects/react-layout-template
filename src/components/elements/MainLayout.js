import { Main, MainWrapper } from "./styles";
function MainLayout(props) {
  return <Main {...props} />;
}

MainLayout.Wrapper = MainWrapper;

export default MainLayout;
