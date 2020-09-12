import React, { Component } from "react";
import { Image, FlatList } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Title,
} from "native-base";

import RECIPES from '../CustomData.json';

export default function HomeScreen() {
  const renderItem = ({ item }) => {
    return (
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
    );
  };
  return (
    <Container>
      <Header>
        <Body>
          <Title style={{ color: "white" }}>Receipe List</Title>
        </Body>
      </Header>
      <Content>
        <FlatList
          data={RECIPES}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ margin: 5, paddingBottom: 25 }}
        />
      </Content>
    </Container>
  );
}
