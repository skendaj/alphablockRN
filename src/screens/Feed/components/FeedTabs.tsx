import { useState } from 'react';

import type { StackProps, TabLayout, TabsTabProps } from 'tamagui';

import {
  AnimatePresence,
  Button,
  H5,
  SizableText,
  Stack,
  Tabs,
  XStack,
  YStack,
  styled,
} from 'tamagui';

export const FeedTabs = () => {
  const [tabState, setTabState] = useState<{
    currentTab: string;
    /**
     * Layout of the Tab user might intend to select (hovering / focusing)
     */
    intentAt: TabLayout | null;
    /**
     * Layout of the Tab user selected
     */
    activeAt: TabLayout | null;
    /**
     * Used to get the direction of activation for animating the active indicator
     */
    prevActiveAt: TabLayout | null;
  }>({
    activeAt: null,

    currentTab: 'tab1',

    intentAt: null,

    prevActiveAt: null,
  });
  const setCurrentTab = (currentTab: string) =>
    setTabState({ ...tabState, currentTab });

  const setIntentIndicator = (intentAt) =>
    setTabState({ ...tabState, intentAt });

  const setActiveIndicator = (activeAt) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt });

  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState;
  /**

   * -1: from left

   *  0: n/a

   *  1: from right

   */

  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0;
    }

    return activeAt.x > prevActiveAt.x ? -1 : 1;
  })();
  const enterVariant =
    direction === 1 ? 'isLeft' : direction === -1 ? 'isRight' : 'defaultFade';

  const exitVariant =
    direction === 1 ? 'isRight' : direction === -1 ? 'isLeft' : 'defaultFade';
  const handleOnInteraction: TabsTabProps['onInteraction'] = (type, layout) => {
    if (type === 'select') {
      setActiveIndicator(layout);
    } else {
      setIntentIndicator(layout);
    }
  };

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      orientation="horizontal"
      size="$4"
      height={150}
      flexDirection="column"
      activationMode="manual"
      backgroundColor="$darkbg"

      //   borderRadius="$4"
    >
      <YStack>
        <AnimatePresence>
          {intentAt && (
            <TabsRovingIndicator
              width={intentAt?.width}
              height="$0.5"
              x={intentAt?.x}
              bottom={0}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeAt && (
            <TabsRovingIndicator
              theme="active"
              active
              width={activeAt?.width}
              height="$0.5"
              x={activeAt?.x}
              bottom={0}
            />
          )}
        </AnimatePresence>

        <Tabs.List
          disablePassBorderRadius
          loop={false}
          aria-label="Manage your account"
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          paddingBottom="$1.5"
          borderColor="rgba(97, 136, 255, 0.4)"
          borderBottomWidth="$1.5"
          // opacity={0.4}
          //   backgroundColor="transparent"
          scrollable
        >
          <Tabs.Tab
            unstyled
            paddingHorizontal="$3"
            paddingVertical="$2"
            value="tab1"
            onInteraction={handleOnInteraction}
          >
            <SizableText color="$white" fontWeight="500">
              Coins
            </SizableText>
          </Tabs.Tab>

          <Tabs.Tab
            unstyled
            paddingHorizontal="$3"
            paddingVertical="$2"
            value="tab2"
            onInteraction={handleOnInteraction}
          >
            <SizableText color="$white" fontWeight="500">
              Watchlists
            </SizableText>
          </Tabs.Tab>

          <Tabs.Tab
            unstyled
            paddingHorizontal="$3"
            paddingVertical="$2"
            value="tab3"
            onInteraction={handleOnInteraction}
          >
            <SizableText color="$white" fontWeight="500">
              Overview
            </SizableText>
          </Tabs.Tab>
          <Tabs.Tab
            unstyled
            paddingHorizontal="$3"
            paddingVertical="$2"
            value="tab4"
            onInteraction={handleOnInteraction}
          >
            <SizableText color="$white" fontWeight="500">
              Exchanges
            </SizableText>
          </Tabs.Tab>
          <Tabs.Tab
            unstyled
            paddingHorizontal="$3"
            paddingVertical="$2"
            value="tab5"
            onInteraction={handleOnInteraction}
          >
            <SizableText color="$white" fontWeight="500">
              Chains
            </SizableText>
          </Tabs.Tab>
          <Tabs.Tab
            unstyled
            paddingHorizontal="$3"
            paddingVertical="$2"
            value="tab6"
            onInteraction={handleOnInteraction}
          >
            <SizableText color="$white" fontWeight="500">
              Notifications
            </SizableText>
          </Tabs.Tab>
          <Tabs.Tab
            unstyled
            paddingHorizontal="$3"
            paddingVertical="$2"
            value="tab7"
            onInteraction={handleOnInteraction}
          >
            <SizableText color="$white" fontWeight="500">
              Categories
            </SizableText>
          </Tabs.Tab>
        </Tabs.List>
      </YStack>
      <AnimatePresence
        exitBeforeEnter
        enterVariant={enterVariant}
        exitVariant={exitVariant}
      >
        <AnimatedYStack
          key={currentTab}
          animation="fast"
          x={0}
          opacity={1}
          flex={1}
        >
          <Tabs.Content
            value={currentTab}
            forceMount
            flex={1}
            justifyContent="center"
          >
            <H5 textAlign="center" color="$white">
              {currentTab}
            </H5>
          </Tabs.Content>
        </AnimatedYStack>
      </AnimatePresence>
    </Tabs>
  );
};
const TabsRovingIndicator = ({
  active,
  ...props
}: { active?: boolean } & StackProps) => {
  return (
    <YStack
      position="absolute"
      animation="fast"
      enterStyle={{
        opacity: 0,
      }}
      exitStyle={{
        opacity: 0,
      }}
      {...(active && {
        backgroundColor: '$primary',
        // opacity: 0.6,
      })}
      {...props}
    />
  );
};
const AnimatedYStack = styled(YStack, {
  variants: {
    isLeft: { true: { x: -25, opacity: 0 } },

    isRight: { true: { x: 25, opacity: 0 } },

    defaultFade: { true: { opacity: 0 } },
  } as const,
});
