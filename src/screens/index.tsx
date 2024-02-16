import { Activity, Airplay } from '@tamagui/lucide-icons';
import React from 'react';
import { Button, Input, XStack, YStack } from 'tamagui';

export default function Root() {
  return (
    <YStack
      padding="$3"
      space="$3"
      bg="$blue8"
      flex={1}
      alignItems="center"
      justifyContent="center">
      <Button>Plain</Button>
      <Button alignSelf="center" icon={Airplay} size="$6">
        Large
      </Button>
      <Input size="$4" borderWidth={2} w="100%" />
      <XStack space="$2">
        <Button themeInverse size="$3">
          Inverse
        </Button>
        <Button iconAfter={Activity} size="$3">
          iconAfter
        </Button>
      </XStack>
    </YStack>
  );
}
