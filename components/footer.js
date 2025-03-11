import { View, StyleSheet, useWindowDimensions } from 'react-native'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import Colors from './colors'

export default function footer() {
  const { width, height } = useWindowDimensions();
  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })

  const styles = StyleSheet.create({
    base: {
      backgroundColor: Colors.primary,
      padding: width * 0.05,
      marginTop: width * 0.05,
    }
  })

  return (
    <View style={styles.base}>
      <View>
      </View>
    </View>
  )
}