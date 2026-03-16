import { CartItem } from "@/src/types/CartItem";
import { FlatList, TouchableOpacity } from "react-native";
import { Text } from "../Text";

import { formatCurrency } from "@/src/utils/formatCurrency";
import { MinusCircle } from "../Icons/MinusCircle";
import { PlusCircle } from "../Icons/PlusCircle";
import {
  Actions,
  Image,
  Item,
  ProductContainer,
  ProductDetails,
  QuantityContainer,
} from "./styles";

interface CartProps {
  cartItems: CartItem[];
}

export function Cart({ cartItems }: CartProps) {
  return (
    <FlatList
      data={cartItems}
      keyExtractor={(cartItem) => cartItem.product._id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item: cartItem }) => (
        <Item>
          <ProductContainer>
            <Image
              source={{
                uri: `http://localhost:3001/uploads/${cartItem.product.imagePath}`,
              }}
            />
            <QuantityContainer>
              <Text size={14} color="#666">
                {cartItem.quantity}x
              </Text>
            </QuantityContainer>

            <ProductDetails>
              <Text size={14} weight="600">
                {cartItem.product.name}
              </Text>
              <Text size={14} color="#666" style={{ marginTop: 4 }}>
                {formatCurrency(cartItem.product.price)}
              </Text>
            </ProductDetails>
          </ProductContainer>
          <Actions>
            <TouchableOpacity style={{ marginRight: 24 }}>
              <PlusCircle />
            </TouchableOpacity>

            <TouchableOpacity>
              <MinusCircle />
            </TouchableOpacity>
          </Actions>
        </Item>
      )}
    />
  );
}
