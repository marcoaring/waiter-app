import { products } from "@/src/mocks/products";
import { FlatList } from "react-native";
import { Text } from "../Text";

import { Product } from "@/src/types/Product";
import { formatCurrency } from "@/src/utils/formatCurrency";
import { useState } from "react";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import {
  AddToCartButton,
  ProductContainer,
  ProductDetails,
  ProductImage,
  Separator,
} from "./styles";

export function Menu() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleOpenModal(product: Product) {
    setSelectedProduct(product);
    setIsModalVisible(true);
  }

  return (
    <>
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{
                uri: `http://localhost:3001/uploads/${product.imagePath}`,
              }}
            />
            <ProductDetails>
              <Text weight="600">{product.name}</Text>
              <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text weight="600" size={14}>
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>

            <AddToCartButton>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />

      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
      />
    </>
  );
}
