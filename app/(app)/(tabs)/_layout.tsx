import React from "react";
import { View } from "react-native";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/build/ui";
import { TabButton } from "@/components/TabButton";
import classNames from "classnames";
import { Image } from "expo-image";

const tabs = (
  <TabList
    className={classNames(
      "py-3 sm:py-6",
      "px-6 sm:px-8",
      "mx-2 sm:mx-0",
      "sm:justify-end sm:gap-x-4 sm:shadow-sm",
      "bg-white"
    )}
  >
    <TabTrigger name="index" href="/" asChild>
      <TabButton icon="museum">Home</TabButton>
    </TabTrigger>
    <TabTrigger name="exhibits" asChild href="/exhibits">
      <TabButton icon="palette">Exhibits</TabButton>
    </TabTrigger>
    <TabTrigger name="visit" asChild href="/visit">
      <TabButton icon="map">Visit</TabButton>
    </TabTrigger>
    <TabTrigger name="profile" asChild href="/profile">
      <TabButton icon="person">Profile</TabButton>
    </TabTrigger>
  </TabList>
);

export default function TabLayout() {
  return (
    <View className="flex-1">
      <Tabs className="flex-1 sm:flex-col-reverse">
        <View className="flex-1">
          <TabSlot />
        </View>
        {tabs}
      </Tabs>
      <View
        className={classNames(
          "hidden sm:inline",
          "absolute left-6 top-5 h-10 w-52",
        )}
      >
        <Image
          source={require("@/assets/images/logo.svg")}
          className="w-full h-full"
        />
      </View>
    </View>
  );
}
