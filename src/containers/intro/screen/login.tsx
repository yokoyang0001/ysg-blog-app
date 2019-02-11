import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Input, Button } from 'react-native-elements'
import i18n from '../../../lib/i18n'

interface Props {
  navigation: any
}

interface State {
  errorMassage: string
}

export default class App extends React.Component<Props, State> {
  private onPressLogin = (): void => {
    this.props.navigation.navigate('Home')
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{i18n.t('greeting')}</Text>
        <Input
          placeholder={'INPUT WITH CUSTOM ICON'}
          leftIcon={<Icon name={'ios-mail'} size={24} color={'black'} />}
        />
        <Input
          placeholder={'INPUT WITH CUSTOM ICON'}
          leftIcon={<Icon name={'ios-lock'} size={24} color={'black'} />}
        />
        <View style={styles.button}>
          <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            title={i18n.t('login')}
            raised={true}
            onPress={this.onPressLogin}
          />
        </View>
      </View>
    )
  }
}

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
  buttonContainer: {
    marginTop: 4,
    width: '100%',
  },
  button: {
    width: '100%',
    marginTop: 4,
    padding: 10,
  },
})
