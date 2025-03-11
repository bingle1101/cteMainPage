import { StyleSheet, Image, Text, View, ScrollView, useWindowDimensions } from 'react-native'
import Colors from './colors'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'

export default function testimonyChunk() {
  const { width, height } = useWindowDimensions()
  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })

  const styles = StyleSheet.create({
    chunk2: {
      marginTop: width * 0.05,
      padding: width * 0.075,
      marginBottom: width * 0.1,
      height: width * 0.35,
      backgroundColor: Colors.primary,
      alignItems: 'center',
      flexDirection: 'row'
    },
    c2title: {
      fontSize: width * 0.05,
      marginRight: width * 0.1,
      color: Colors.secondary,
      fontFamily: 'oswaldsemibold'
    },
    c2chunk: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: width * 0.05
    },
    c2cHeader: {
      fontSize: width * 0.03,
      color: Colors.secondary,
      fontFamily: 'oswaldmedium'
    },
    c2cBody: {
      fontSize: width * 0.015,
      fontFamily: 'oswaldlight',
      textAlign: 'center'
    },
    studentImg: {
      height: width * 0.175,
      width: width * 0.175,
    }
  })

  return (
    <View style={styles.chunk2}>
      <Text style={styles.c2title}>Testimonies</Text>
      <ScrollView style={{ height: width * 0.35 }} showsVerticalScrollIndicator={false}>
        <View style={{ margin: width * 0.02 }}></View>
        <View style={styles.c2chunk}>
          <Text style={styles.c2cHeader}>Student Name</Text>
          <Image
            source={require('../assets/placeholder.jpg')}
            style={styles.studentImg}
          />
          <Text style={styles.c2cBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
            Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </Text>
        </View>

        <View style={styles.c2chunk}>
          <Text style={styles.c2cHeader}>Student Name</Text>
          <Image
            source={require('../assets/placeholder.jpg')}
            style={styles.studentImg}
          />
          <Text style={styles.c2cBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
            Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </Text>
        </View>

        <View style={styles.c2chunk}>
          <Text style={styles.c2cHeader}>Student Name</Text>
          <Image
            source={require('../assets/placeholder.jpg')}
            style={styles.studentImg}
          />
          <Text style={styles.c2cBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
            Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </Text>
        </View>

        <View style={styles.c2chunk}>
          <Text style={styles.c2cHeader}>Student Name</Text>
          <Image
            source={require('../assets/placeholder.jpg')}
            style={styles.studentImg}
          />
          <Text style={styles.c2cBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
            Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </Text>
        </View>

        <View style={styles.c2chunk}>
          <Text style={styles.c2cHeader}>Student Name</Text>
          <Image
            source={require('../assets/placeholder.jpg')}
            style={styles.studentImg}
          />
          <Text style={styles.c2cBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
            Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}