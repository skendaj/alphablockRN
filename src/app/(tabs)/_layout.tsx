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

interface TabBarLabelProps {
  focused: boolean;
  label: string;
}

const AppHeader = (props) => {
  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: '#222531' }}>
      <StatusBar barStyle="light-content" />

      <XStack
        height={50}
        borderColor={'#222531'}
        borderWidth={1}
        justifyContent="space-between"
        alignItems="center"
        paddingHorizontal={20}
      >
        <TouchableOpacity>
          <XStack gap={10}>
            <FontAwesome5 name="cube" size={25} color={'#cfd6e4'} />
            <Text fontSize={20} color={'#cfd6e4'}>
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
  const TabBarLabel: FC<TabBarLabelProps> = ({ focused, label }) => (
    <Text style={{ color: focused ? '#6188ff' : '#cfd6e4' }} fontSize={13}>
      {label}
    </Text>
  );
  return (
    <Tabs
      screenOptions={() => ({
        headerShown: true,
        headerTransparent: true,
        tabBarStyle: {
          backgroundColor: '#222531',
          borderTopColor: '#222531',
        },
        header: (props) => <AppHeader {...props} />,
      })}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarLabel: (props) => <TabBarLabel {...props} label="Feed" />,
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="area-graph"
              size={23}
              color={focused ? '#6188ff' : '#cfd6e4'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          tabBarLabel: (props) => <TabBarLabel {...props} label="News" />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="newspaper-outline"
              size={23}
              color={focused ? '#6188ff' : '#cfd6e4'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: (props) => <TabBarLabel {...props} label="Search" />,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="search1"
              size={23}
              color={focused ? '#6188ff' : '#cfd6e4'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          tabBarLabel: (props) => <TabBarLabel {...props} label="Portfolio" />,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="chart-pie"
              size={23}
              color={focused ? '#6188ff' : '#cfd6e4'}
            />
          ),
        }}
      />
    </Tabs>
  );
};
const Layout = () => {
  return (
    <>
      <TabsNavigator />
    </>
  );
};
export default Layout;
