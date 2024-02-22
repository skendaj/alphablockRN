import { Button, Input, Text, View, XStack, YStack } from 'tamagui';
import { FeedTabs } from './components';

export const FeedScreen = () => {
  return (
    <View>
      <Text color="$white">Feed</Text>
      <FeedTabs />
    </View>
  );
};
