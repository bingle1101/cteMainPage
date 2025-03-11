import { View, StyleSheet } from 'react-native'
import TopBar from '../components/topBar'
import Colors from '../components/colors'

export default function deptpage() {
  return (
    <View>
      <TopBar />
      <View style={styles.container}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 250,
    marginHorizontal: 100,
    flex: 1,
    padding: 20,
    backgroundColor: Colors.primary,
  }
})