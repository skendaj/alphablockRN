import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, XStack } from 'tamagui';
import { FC } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const AppHeader = () => {
  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: '#2b2e3d' }}>
      <StatusBar barStyle="light-content" />
      <XStack
        height={50}
        justifyContent="space-between"
        alignItems="center"
        paddingHorizontal={20}
      >
        <TouchableOpacity>
          <XStack gap={10}>
            <FontAwesome5 name="cube" size={25} color={'#cfd6e4'} />
            <Text fontSize={20} color="$gray">
              Alpha Block
            </Text>
          </XStack>
        </TouchableOpacity>

        <XStack gap={35}>
          <TouchableOpacity>
            <AntDesign name="search1" size={24} color="#cfd6e4" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="user" size={24} color="#cfd6e4" />
          </TouchableOpacity>
        </XStack>
      </XStack>
    </SafeAreaView>
  );
};
const TabsNavigator = () => {
  return (
    <Tabs
      screenOptions={() => ({
        headerShown: true,
        // headerTransparent: false,
        tabBarStyle: {
          backgroundColor: '#222531',

          borderTopColor: '#222531',
          paddingTop: 10,
        },
        header: () => <AppHeader />,
      })}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="area-graph" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="newspaper-outline"
              size={20}
              color={focused ? '#6188ff' : '#cfd6e4'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="search1"
              size={20}
              color={focused ? '#6188ff' : '#cfd6e4'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          tabBarLabel: 'Portolio',
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="chart-pie"
              size={20}
              color={focused ? '#6188ff' : '#cfd6e4'}
            />
          ),
        }}
      />
    </Tabs>
  );
};

// const DrawerLayout = () => {
//   return <Drawer />;
// };

const Layout = () => {
  return (
    <>
      <TabsNavigator />
    </>
  );
};
export default Layout;
