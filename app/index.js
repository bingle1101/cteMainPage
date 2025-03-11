import { StyleSheet, View, ImageBackground, ScrollView } from 'react-native'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import Colors from '../components/colors'
import TopBar from '../components/topBar'
import SearchingToolChunk from '../components/searchingToolChunk'
import TestimonyChunk from '../components/testimonyChunk'
import Footer from '../components/footer'

export default function HomePage() {
  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })

  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: Colors.primary,
    },
    bgImg: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover'
    }
  })

  return (
    <View style={styles.background}>
      <TopBar/>
      <ImageBackground style={styles.bgImg} source={require('../assets/engineer.png')}>
        <ScrollView>
          <SearchingToolChunk/>
          <TestimonyChunk/>
          <Footer/>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}