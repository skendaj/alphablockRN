import { Tabs } from 'expo-router';

const TabsNavigator = () => {
  return (
    <Tabs
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Tabs.Screen name="feed" />
      <Tabs.Screen name="user" />
    </Tabs>
  );
};
const Layout = () => {
  return <TabsNavigator />;
};
export default Layout;
