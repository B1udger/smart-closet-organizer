import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Wardrobe"
        onPress={() => navigation.navigate('Wardrobe')}
      />
      <Button
        title="Go to Outfit Planner"
        onPress={() => navigation.navigate('OutfitPlanner')}
      />
    </View>
  );
};

export default HomeScreen;
