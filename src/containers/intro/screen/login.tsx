import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { Input } from "react-native-elements"
import i18n from "../../../lib/i18n"

interface Props {}

interface State {}

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{i18n.t("greeting")}</Text>
        <Input
          placeholder="INPUT WITH CUSTOM ICON"
          leftIcon={<Icon name="ios-mail" size={24} color="black" />}
          errorStyle={{ color: "red" }}
          errorMessage="ENTER A VALID ERROR HERE"
        />
        <Input
          placeholder="INPUT WITH CUSTOM ICON"
          leftIcon={<Icon name="ios-lock" size={24} color="black" />}
          errorStyle={{ color: "red" }}
          errorMessage="ENTER A VALID ERROR HERE"
        />
      </View>
    )
  }
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
})
