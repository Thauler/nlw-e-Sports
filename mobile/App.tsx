import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Now mobile!</Text>

      <Button title='Touch me'/>

      <StatusBar style="auto"/>
    </View>
  );
}

interface ButtonTest {
  title: string
}

function Button(props: ButtonTest) {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 19,
  }
});
