import React from 'react'
import { View, WebView, StyleSheet } from 'react-native'

interface Props {
  navigator: any
}

export default class PreviewScreen extends React.Component<Props> {
  public render() {
    return (
      <View>
        <WebView />
      </View>
    )
  }
}
