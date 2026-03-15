import { Categories } from "../Categories";
import { Header } from "../Header";
import { Menu } from "../Menu";

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
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <Footer>
        <FooterContainer edges={["bottom"]} />
      </Footer>
    </>
  );
}
