/**
 * Check apple authentication docs
 * https://docs.expo.dev/versions/latest/sdk/apple-authentication/
 */

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Platform } from "react-native";
import jwtDecode from "jwt-decode";
import * as AppleAuthentication from "expo-apple-authentication";

export interface AppleAuthButtonProps {
  onChange: (token: string | undefined) => void;
}

export const AppleAuthButton = ({
  onChange,
}: AppleAuthButtonProps): React.ReactElement => {
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    void (async () => {
      setLoading(true);
      setShowButton(await AppleAuthentication.isAvailableAsync());
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading && <Text>Loading</Text>}

      {!loading && Platform.OS === "ios" && !showButton && (
        <Text>Unable to display apple login</Text>
      )}

      {showButton && (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={5}
          style={styles.ios}
          onPress={async () => {
            try {
              const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                  AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                  AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
              });
              const credentialState =
                AppleAuthentication.getCredentialStateAsync(credential.user);

              // signed in
              console.group("Sign in OK");
              console.log("credential", credential);
              console.log("credentialState", credentialState);
              console.log(
                "jwt",
                typeof credential.identityToken === "string" &&
                  jwtDecode(credential.identityToken)
              );
              console.log("token", credential.user);
              console.groupEnd();

              onChange(credential.user);
            } catch (error) {
              console.log("sign in ERR", error);

              if (
                typeof error === "object" &&
                error !== null &&
                "code" in error &&
                error.code === "ERR_REQUEST_CANCELED"
              ) {
                // handle that the user canceled the sign-in flow
              } else {
                // handle other errors
              }
            }
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  ios: {
    height: 60,
    width: "100%",
  },
});
