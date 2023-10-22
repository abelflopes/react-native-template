/**
 * Check apple authentication docs
 * https://docs.expo.dev/versions/latest/sdk/apple-authentication/
 */

import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

export interface GoogleAuthButtonProps {
  onChange?: () => void;
}

export const GoogleAuthButton = ({
  onChange,
}: GoogleAuthButtonProps): React.ReactElement => {
  const [userInfo, setUserInfo] = useState(undefined);

  const [request, response, prompt] = Google.useAuthRequest({
    androidClientId:
      "902634472436-mnmllbqnkcib74sodac6q78ottm6g20m.apps.googleusercontent.com",
    iosClientId:
      "902634472436-ods2vvmto3739odecb0q5add32e64qg1.apps.googleusercontent.com",
    webClientId:
      "902634472436-aicrfhmf892meerofo0hb3253oq8sihf.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success" && response.authentication?.accessToken) {
      handleSignIn(response.authentication.accessToken);
    }
  }, [response]);

  const handleSignIn = async (token: string) => {
    // if user, get from storage
    // and setUserInfo(...)
    //
    // else :

    const user = await (
      await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    ).json();

    console.log("user", user);

    setUserInfo(user);
  };

  console.log("env", process.env.EXPO_PUBLIC_API_KEY);

  return (
    <>
      <Text>Google auth</Text>
      <Text>{JSON.stringify(userInfo, null, 2)}</Text>

      <Button title="Sign in with google" onPress={() => prompt()} />
    </>
  );
};

const styles = StyleSheet.create({
  ios: {
    height: 60,
    width: "100%",
  },
});
