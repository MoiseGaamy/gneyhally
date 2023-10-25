import { SimpleLineIcons } from "react-native-vector-icons/SimpleLineIcons";

const CustomHeaderLeft = ({ navigation }) => (
  <SimpleLineIcons
    style={{ marginLeft: 15 }}
    name="menu"
    size={24}
    color="#93A19C"
    onPress={() => {
      navigation.toggleDrawer();
    }}
  />
);

export default CustomHeaderLeft;
