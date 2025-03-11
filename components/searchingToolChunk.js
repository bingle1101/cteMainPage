import { StyleSheet, Text, Pressable, View, useWindowDimensions } from 'react-native'
import { Link } from 'expo-router'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import Colors from './colors'

export default function searchingToolChunk() {
  const { width, height } = useWindowDimensions()
  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })

  const styles = StyleSheet.create({
    chunk1: {
      marginTop: width * 0.25,
      marginHorizontal: width * 0.1,
      padding: width * 0.05,
      backgroundColor: Colors.primary,
      alignItems: 'center'
    },
    c1Title: {
      fontSize: width * 0.05,
      color: Colors.secondary,
      fontFamily: 'oswaldmedium',
      marginBottom: width * 0.02
    },
    c1Button: {
      fontSize: width * 0.025,
      padding: width * 0.01,
      color: Colors.primary,
      backgroundColor: Colors.secondary,
      fontFamily: 'oswaldsemibold'
    }
  })

  return (
    <View style={styles.chunk1}>
      <Text style={styles.c1Title}>Find Your Pathway</Text>
      <Link href={'/searchingtool'}>
        <Pressable>
          <Text style={styles.c1Button}>Searching Tool</Text>
        </Pressable>
      </Link>
    </View>
  )
}