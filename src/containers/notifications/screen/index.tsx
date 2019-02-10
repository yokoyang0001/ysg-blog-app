import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import i18n from '../../../lib/i18n'

interface Props {}

interface State {}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default class App extends React.Component<Props, State> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{i18n.t('greeting')}</Text>
        <Text style={styles.instructions}>To get started, edit index.tsx</Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload, {'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
}
