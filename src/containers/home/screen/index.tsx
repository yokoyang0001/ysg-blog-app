import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import TopList from '../../../components/home/top_list'
import Constants from '../constans'

interface Props {
  navigator: any
}

interface State {}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class App extends React.Component<Props, State> {
  public render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {Constants.map((list, key) => {
            return (
              <TopList key={key} list={list} navigator={this.props.navigator} />
            )
          })}
        </ScrollView>
      </View>
    )
  }
}
