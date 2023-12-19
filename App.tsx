import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Form } from "./src/form";
import { FormDetails } from "./src/formDetails";
import { ScrollView } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Form} />
        <Stack.Screen name="Details" component={FormDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
