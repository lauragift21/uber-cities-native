import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./src/Screens/Home.js";
import Search from "./src/Screens/Search";

const App = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Search: {
      screen: Search
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(App);
