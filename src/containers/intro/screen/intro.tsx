import React from "react"
import { StyleSheet, Text, View, Dimensions, Image } from "react-native"
import { Button } from "react-native-elements"
import Swiper from "react-native-swiper"
import i18n from "../../../lib/i18n"
import ImageAssets from "../../../lib/image"

interface Props {
  navigation: any
}

interface State {}

const SCREEN_HEIGHT = Dimensions.get("window").height

const SWIPE_ITEMS = [
  {
    description: i18n.t("intro1"),
    image: ImageAssets.INTRO_1,
  },
  {
    description: i18n.t("intro2"),
    image: ImageAssets.INTRO_2,
  },
  {
    description: i18n.t("intro3"),
    image: ImageAssets.INTRO_3,
  },
  {
    description: i18n.t("intro4"),
    image: ImageAssets.INTRO_4,
  },
  {
    description: i18n.t("intro5"),
    image: ImageAssets.INTRO_5,
  },
]

export default class App extends React.Component<Props, State> {
  onPressLogin = (): void => {
    this.props.navigation.navigate("Login")
  }
  onPressRegister = (): void => {
    this.props.navigation.navigate("Register")
  }

  renderDots = (isActive): any => {
    return <View style={isActive ? styles.activeDot : styles.dot} />
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          dot={this.renderDots(false)}
          activeDot={this.renderDots(true)}
          paginationStyle={styles.paginationStyle}
          autoplay
        >
          {SWIPE_ITEMS.map((item, key) => {
            return (
              <View key={key} style={styles.slide}>
                <View style={styles.description}>
                  <Text style={styles.text}>{item.description}</Text>
                </View>
                <View style={styles.imageContain}>
                  <Image
                    style={styles.image}
                    source={item.image}
                    resizeMode="stretch"
                  />
                </View>
              </View>
            )
          })}
        </Swiper>
        <View style={styles.bottom}>
          <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            title={i18n.t("login")}
            raised
            onPress={() => this.onPressLogin()}
          />
          <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            title={i18n.t("register")}
            type="outline"
            raised
            onPress={() => this.onPressRegister()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  bottom: {
    width: "100%",
    height: "22%",
    backgroundColor: "#fff",
    padding: 10,
  },
  buttonContainer: {
    height: "40%",
    margin: 4,
  },
  button: {
    height: "100%",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#9DD6EB",
  },
  description: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContain: {
    width: "100%",
    height: "70%",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "100%",
  },
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  paginationStyle: {
    position: "absolute",
    top: -SCREEN_HEIGHT * 0.6,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
})
