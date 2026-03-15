import { categories } from "@/src/mocks/categories";
import { FlatList } from "react-native";

import { useState } from "react";
import { Text } from "../Text";
import { Category, Icon } from "./styles";

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? "" : categoryId;
    setSelectedCategory(category);
  }
  return (
    <FlatList
      data={categories}
      keyExtractor={(category) => category._id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24 }}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;
        return (
          <Category onPress={() => handleSelectCategory(category._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>

            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </Category>
        );
      }}
    />
  );
}
