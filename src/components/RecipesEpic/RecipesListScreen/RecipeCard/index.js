import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SelectedRecipe } from "../../../../redux/actions";
import { connect } from "react-redux";
import { SharedElement } from 'react-navigation-shared-element';

const RecipeCard = ({ item, SelectedRecipe, navigation }) => {
  async function selectCard(item) {
    await SelectedRecipe(item);
    navigation.navigate("RecipesDetailsScreen");
  }
  return (
    <SharedElement id={`item.${item.id}.image_url`}>
      <TouchableOpacity
        onPress={() => selectCard(item)}
        style={styles.container}
      >
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />
        <View style={styles.filter} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>
            Temps de préparation: {item.readyInMinutes} min
          </Text>
        </View>
      </TouchableOpacity>
    </SharedElement>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 15,
    height: 300,
    justifyContent: "flex-end"

  },
  image: {
    position: "absolute",
    flex: 1,
    borderRadius: 10,
    height: "100%",
    width: "100%"
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
  },
  filter: {
    flex: 1,
    position: "absolute",
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    opacity: 0.3,
    borderRadius: 10
  },
  description: {
    color: "white",
    fontWeight: "300"
  },
  descriptionContainer: {
    padding: 15
  }
});

export default connect(null, { SelectedRecipe })(RecipeCard);