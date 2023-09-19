import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppleAuthButton } from "./components/AppleAuthButton";

/**
 * Check apple authentication docs
 * https://docs.expo.dev/versions/latest/sdk/apple-authentication/
 * @returns
 */

export const Auth = () => {
  const [appleToken, setAppleToken] = useState<string | undefined>(undefined);

  return (
    <>
      <View style={{ height: 30 }} />

      <AppleAuthButton onChange={(value) => setAppleToken(value)} />

      <View style={{ height: 30 }} />

      {appleToken && <Text>Apple Authenticated: {appleToken}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  ios: {
    height: 60,
    width: "100%",
  },
});
