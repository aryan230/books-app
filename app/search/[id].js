import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native";
import {
  Stack,
  useRouter,
  useLocalSearchParams,
  useGlobalSearchParams,
} from "expo-router";
import { COLORS, icons, images, SIZES } from "../../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../../components";
import { ScrollView } from "react-native";

const Search = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconURL={icons.left}
              dimension="60%"
              handlePress={() => {
                router.push("/");
              }}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconURL={images.share} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
