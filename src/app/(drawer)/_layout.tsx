import { Drawer } from 'expo-router/drawer';
import { AntDesign } from '@expo/vector-icons';
import { View } from 'tamagui';

const Layout = () => {
  return (
    <Drawer
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerTransparent: true,
        swipeEdgeWidth: 0,
        drawerPosition: 'right',
        headerTitleStyle: {
          color: 'transparent',
        },
        headerRight: () => (
          <AntDesign
            name="user"
            size={24}
            color="#cfd6e4"
            onPress={navigation.toggleDrawer}
          />
        ),
        // headerLeft: () => <View></View>,
        headerLeftContainerStyle: {
          display: 'none',
        },
      })}
    >
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Tabs',
          title: 'Tabs title',
        }}
      />
      {/* <Drawer.Screen
        name="user/[id]" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'User',
          title: 'overview',
        }}
      /> */}
    </Drawer>
  );
};
export default Layout;
