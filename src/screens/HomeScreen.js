import React, { Component, useState } from "react";
import { Image, FlatList, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Title,
  Left,
  Right,
  Button,
  Icon,
  Input,
  Form,
  Item,
} from "native-base";

import RECIPES from "../CustomData.json";

export default function HomeScreen({ navigation }) {
  const [list, setList] = useState(RECIPES);
  const searchFilterFunction = (text) => {
    const filteredList = RECIPES.filter((item) => {
      const itemData = item.name.toUpperCase();
      const userTypedData = text.toUpperCase();

      return itemData.indexOf(userTypedData) > -1;
    });

    setList(filteredList);
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            recipeItem: item,
          })
        }
      >
        <Card style={{ flex: 1, marginBottom: 15 }}>
          <CardItem cardBody>
            <Image
              source={{ uri: item.imageURL }}
              style={{ height: 200, width: "100%", flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Body>
              <Text numberOfLines={2}>{item.name}</Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  };
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Home</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Form>
          <Item>
            <Input
              placeholder="Type Here To Search By Recipe Name"
              onChangeText={(text) => searchFilterFunction(text)}
            />
          </Item>
        </Form>

        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ margin: 5, paddingBottom: 25 }}
        />
      </Content>
    </Container>
  );
}
