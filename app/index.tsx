import { Text, View,Button } from "react-native";

import * as Sentry from "@sentry/react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 20}}>Let's crash remotely with Sentry!</Text>

      {/* insert button here */}
      <Button title='Try!' onPress={ () => { Sentry.captureException(new Error('First error')) }}/>

    </View>
  );
}
