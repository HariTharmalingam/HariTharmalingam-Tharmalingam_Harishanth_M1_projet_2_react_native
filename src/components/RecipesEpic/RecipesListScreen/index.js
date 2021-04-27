import React, { useState, useEffect }  from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import { getRecipes } from "../../../../api/recipes";
import RecipeCard from "./RecipeCard";
import {connect} from 'react-redux';

const RecipesListScreen = (props) => {
  const [recipes, setRecipes] = useState([]);

  async function getData() {
    let res = await getRecipes()
    
    setRecipes(res);
  }

  useEffect(() => {
    getData()
    return () => {
      setRecipes([])
    }
  }, []);
  
  if (recipes.length > 0) {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          data={recipes}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <RecipeCard key={item.id} item={item} navigation={props.navigation} />}
        />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipes
})

export default connect(mapStateToProps)(RecipesListScreen)



