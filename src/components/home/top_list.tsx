import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { ListItem, Divider } from 'react-native-elements'

interface Item {
  name: string
  iconName: string
  route: string
}

interface List {
  title: string
  items: Array<Item>
}

interface Props {
  list: List
  navigator: any
}

export default class App extends React.PureComponent<Props> {
  private nextTransition = item => (): void => console.log(item)

  private renderItem: any = ({ item }: any) => {
    return (
      <ListItem
        key={item.key}
        title={item.name}
        leftIcon={{ name: item.iconName }}
        onPress={this.nextTransition(item)}
        chevron={true}
      />
    )
  }

  private renderDivider: any = () => <Divider />

  public render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.list.title}</Text>
        <FlatList
          data={this.props.list.items}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderDivider}
        />
      </View>
    )
  }
}

const styles: any = StyleSheet.create({
  container: {
    width: '100%',
  },
})
