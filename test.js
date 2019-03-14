import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    //nothing has been rendered yet
    //-- you can change what is rendered based on these parameters
    console.log(`constructor ${JSON.stringify(props)}`);
  }

  componentWillMount() {
    //nothing has been rendered, changes will occur soon.
    console.log("componentWillMount");
  }

  render() {
    console.log("render");

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload...</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }

  componentDidMount() {
    //we rendered
    console.log("componentDidMount");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});