import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  ViewComponent,
} from "react-native"
import Swiper from "react-native-swiper"
import i18n from "../../lib/i18n"

interface Props {}

interface State {}

const SCREEN_HEIGHT = Dimensions.get("window").height

const SWIPE_ITEMS = [
  {
    description: "",
    image: "",
  },
  {
    description: "",
    image: "",
  },
  {
    description: "",
    image: "",
  },
  {
    description: "",
    image: "",
  },
  {
    description: "",
    image: "",
  },
]

export default class App extends React.Component<Props, State> {
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
        >
          {SWIPE_ITEMS.map((item, key) => {
            return (
              <View key={key} style={styles.slide1}>
                <Text style={styles.text}>あああ</Text>
              </View>
            )
          })}
        </Swiper>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button}>
            <Text>あああ</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  buttonContainer: {
    width: "100%",
    height: "22%",
    backgroundColor: "#fff",
    padding: 10,
  },
  button: {
    backgroundColor: "#00f",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
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
    fontSize: 30,
    fontWeight: "bold",
  },
})
