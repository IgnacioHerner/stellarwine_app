import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import AppNavigator from "./navigation";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const [loaded] = useFonts({
  'OpenSans-Bold' : require ('../assets/fonts/OpenSans-Bold.ttf'),
  'OpenSans-Italic' : require ('../assets/fonts/OpenSans-Italic.ttf'),
  'OpenSans-Light' : require ('../assets/fonts/OpenSans-Light.ttf'),
  'OpenSans-Regular' : require ('../assets/fonts/OpenSans-Regular.ttf'),
  });

  if(!loaded){
    return (
      <View style={styles.container}>
        <ActivityIndicator color='#0d21a1' size='large'/>
      </View>
    )
  }

  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
