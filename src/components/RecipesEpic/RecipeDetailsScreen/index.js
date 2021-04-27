import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, Animated } from "react-native";
import { connect } from "react-redux";

const RecipesDetailsScreen = (props) => {
  const { recipe } = props.recipesList;
  return (
    <ScrollView>
      <Animated.View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          source={{ uri: recipe.image }}
          style={styles.image}
        />
        <View style={styles.filter} />
        <View style={styles.descriptionContainer}>
          <Animated.Text style={styles.title}>
            {recipe.title}
          </Animated.Text>
          <Text style={styles.description}>
            Temps de préparation: {recipe.readyInMinutes} min
          </Text>
        </View>
      </Animated.View>
      <View style={styles.ingredientsContainer}>
        <Text style={styles.title}>Ingredients :</Text>
        <View>
          {recipe.extendedIngredients.map(currentRecipe => (
            <View
              key={currentRecipe.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.subtitle}>
                {currentRecipe.aisle} {currentRecipe.amount} {currentRecipe.cup}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.stepContainer}>
        <Text style={styles.title}>Steps :</Text>
        {recipe.analyzedInstructions[0].steps.map((currentRecipe) => (
          <View key={currentRecipe.number} style={styles.innerStepContainer}>
            <Text style={styles.subtitle}>
              {currentRecipe.step}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  image: {
    position: "absolute",
    flex: 1,
    height: "100%",
    width: "100%"
  },
  imageContainer: {
    height: 250,
    width: "100%",
    position: "absolute",
    justifyContent: "flex-end",
    zIndex: 1000 
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  filter: {
    flex: 1,
    position: "absolute",
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    opacity: 0.4,
  },
  description: {
    color: "white",
    fontWeight: "300"
  },
  descriptionContainer: {
    padding: 10
  },
  ingredientsContainer: {
    marginTop: 250,
    padding: 10,
    backgroundColor: "white"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 15,
    color: "#000",
    lineHeight: 24
  },
  stepContainer: {
    padding: 10,
    backgroundColor: "#fff",
  },
  innerStepContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

});

const mapStateToProps = state => ({
  recipesList: state.recipesList
});

export default connect(mapStateToProps)(RecipesDetailsScreen);
