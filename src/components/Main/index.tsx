import { Header } from "../Header";

import {
  CategoriesContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer,
} from "./styles";

export default function Main() {
  return (
    <>
      <Container edges={["top"]}>
        <Header />
        <CategoriesContainer />
        <MenuContainer />
      </Container>

      <Footer>
        <FooterContainer edges={["bottom"]} />
      </Footer>
    </>
  );
}
