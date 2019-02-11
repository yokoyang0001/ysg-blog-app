import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
  navigation: any
}

export default class Modal extends Component<Props> {
  private renderHeader: any = (navigation: any) => () => {
    return (
      <View style={styles.header}>
        <Icon.Button
          name={'icon'}
          size={26}
          color={'#4F8EF7'}
          backgroundColor={'#0000'}
          onPress={navigation.goBack}
        />
      </View>
    )
  }

  public render() {
    const { navigation } = this.props
    return <View style={styles.container}>{this.renderHeader(navigation)}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    ...StyleSheet.absoluteFillObject,
    top: 20,
    left: 5,
    width: 40,
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
