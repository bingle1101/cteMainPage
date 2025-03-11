import { View, Text, Image, Pressable, TextInput, StyleSheet, useWindowDimensions } from 'react-native'
import { Link } from 'expo-router'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import Colors from './colors'
import { Dropdown } from 'react-native-element-dropdown'
import { useState } from 'react'
import { router } from 'expo-router'
export default function topBar() {
  const { width, height } = useWindowDimensions()
  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })

  const styles = StyleSheet.create({
    topBar: {
      padding: width * 0.010,
      alignItems: 'center',
      backgroundColor: Colors.secondary,
      flexDirection: 'row'
    },
    topImageStyle: {
      marginLeft: width * 0.005,
      height: width * 0.05,
      width: width * 0.05
    },
    titleStyle: {
      color: Colors.primary,
      fontWeight: 'bold',
      fontSize: width * 0.03,
      marginLeft: width * 0.01,
      marginRight: width * 0.1,
      fontFamily: 'oswaldsemibold'
    },
    topButtonStyle: {
      color: Colors.primary,
      fontSize: width * 0.0175,
      marginRight: width * 0.02,
      fontFamily: 'oswaldmedium'
    },
    searchContainer: {
      borderWidth: 1,
      borderColor: Colors.primary,
      alignItems: 'center',
      flexDirection: 'row'
    },
    searchStyle: {
      color: Colors.primary,
      fontSize: width * 0.0175,
      fontFamily: 'oswaldmedium',
      opacity: 0.5,
      marginLeft: width * 0.01
    },
    placeholder: {
      color: Colors.primary,
      fontSize: width * 0.0175,
      marginLeft: width * 0.01
    }
  })

  const [value, setValue] = useState();

  return (
    <View style={styles.topBar}>
      <Link href={'/'}>
        <Pressable>
          <Image
            style={styles.topImageStyle}
            source={require('../assets/download.jpg')}
          />
        </Pressable>
      </Link>

      <Link href={'/'}>
        <Pressable>
          <Text style={styles.titleStyle}>Career & Technical Education</Text>
        </Pressable>
      </Link>

      <Dropdown confirmSelectItem showsVerticalScrollIndicator={false} placeholderStyle={styles.topButtonStyle} placeholder={"Departments"} onChange={(item) => {setValue(item.value);}} onConfirmSelectItem={(item) => (router.navigate(item.href))} labelField="label" valueField="value" data={
        [ 
          {label:"Automotive", value: "Auto", href:"/Auto"},
          {label: "Building & Construction", value: "B&C", href:"/B_C"},
          {label: 'Business', value: "Bus", href:"/Busi"},
          {label:"Computer Science", value:"CS", href:"/CS"},
          {label:"Culinary", value:"Culi", href:"/Culi"},
          {label:"Engineering", value:"Engi", href:"/Engi"},
          {label:"Fashion", value:"Fash", href: "/Fash"},
          {label:"Film", value: "Film", href:"/Film"},
          {label:"Graphics", value: "Graph", href:"/Graph"},
          {label:"Health Services", value:"Health", href:"/Health"}
        ]
      }/>

      <Link href={'/staff'}>
        <Pressable>
          <Text style={styles.topButtonStyle}>Staff</Text>
        </Pressable>
      </Link>

      <Link href={'/contactus'}>
        <Pressable>
          <Text style={styles.topButtonStyle}>Contact Us</Text>
        </Pressable>
      </Link>

      <View style={styles.searchContainer}>
        <Text style={styles.placeholder}>⌕</Text>
        <TextInput
          style={styles.searchStyle}
          placeholder='Search'
        />
      </View>
    </View>
  )