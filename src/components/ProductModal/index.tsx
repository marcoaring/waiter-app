import { Product } from "@/src/types/Product";
import { formatCurrency } from "@/src/utils/formatCurrency";
import { FlatList, Modal } from "react-native";
import { Button } from "../Button";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import {
  CloseButton,
  Footer,
  FooterContainer,
  Header,
  Image,
  Ingredient,
  IngredientsContainer,
  ModalBody,
  PriceContainer,
} from "./styles";

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: Product | null;
}

export function ProductModal({ visible, onClose, product }: ProductModalProps) {
  if (!product) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
      statusBarTranslucent
      navigationBarTranslucent
    >
      <Image
        source={{ uri: `http://localhost:3001/uploads/${product.imagePath}` }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={16} weight="600">
            {product.name}
          </Text>
          <Text color="#666" style={{ marginTop: 8 }}>
            {product.description}
          </Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight="600" color="#666">
              Ingredientes
            </Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={(ingredients) => ingredients._id}
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({ item: ingredients }) => (
                <Ingredient>
                  <Text>{ingredients.icon}</Text>
                  <Text size={14} color="#666" style={{ marginLeft: 20 }}>
                    {ingredients.name}
                  </Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContainer edges={["bottom"]}>
          <PriceContainer>
            <Text color="#666">Preço</Text>
            <Text weight="600" size={20}>
              {formatCurrency(product.price)}
            </Text>
          </PriceContainer>

          <Button onPress={() => {}}>Adicionar ao pedido</Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
