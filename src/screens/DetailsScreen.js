import {
  Body,
  Button,
  Card,
  Container,
  Content,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Title,
} from "native-base";
import React from "react";
import { View, Text, Image } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const item = route.params.recipeItem;
  const { name, imageURL, ingredients, steps } = item;

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate("Home")}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: "white" }}>Details</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Image
          style={{ height: 350, width: "100%" }}
          source={{ uri: imageURL }}
          resizeMode="cover"
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20 }}>{name}</Text>
        </View>
        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Ingredients</Text>
          <Card>
            {ingredients.map((ingredient, index) => {
              return (
                <List>
                  <ListItem key={index}>
                    <Text>
                      - {ingredient.quantity} {ingredient.name}
                    </Text>
                  </ListItem>
                </List>
              );
            })}
          </Card>
        </View>

        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>
            Step by step guidelines
          </Text>
          <Card customStyle={{ padding: 20 }}>
            {steps.map((step, index) => {
              return (
                <List>
                  <ListItem key={index}>
                    <Text>- {step}</Text>
                  </ListItem>
                </List>
              );
            })}
          </Card>
          <Button light block onPress={() => navigation.navigate("Home")}>
            <Icon name="arrow-back" />
            <Text>Go Back</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}
