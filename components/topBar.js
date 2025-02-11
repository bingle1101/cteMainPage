import { View, Text, Image, Pressable, TextInput, StyleSheet, Animated } from 'react-native'
import { Link } from 'expo-router'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import Colors from './colors'

import React, { useRef, useState } from 'react';

export default function topBar() {

  const spinValue = useRef(new Animated.Value(0)).current;
  const [hovered, setHovered] = useState(false);

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    Animated.timing(spinValue,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    Animated.timing(spinValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })

  return (
    <View style={styles.topBar}>
      <View
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href={'/'}>
          <Pressable>
            <Animated.Image
              source={require('../assets/download.jpg')}
              style={[styles.topImageStyle, { transform: [{ rotate: spin }] }]} />
          </Pressable>
        </Link>
      </View>
      <Link href={'/'}>
        <Pressable>
          <Text style={styles.titleStyle}>Career & Technical Education</Text>
        </Pressable>
      </Link>

      <Link href={'/departments'}>
        <Pressable>
          <Text style={styles.topButtonStyle}>Departments</Text>
        </Pressable>
      </Link>

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
}

export const styles = StyleSheet.create({
  topBar: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    flexDirection: 'row'
  },
  topImageStyle: {
    marginLeft: 15,
    height: 75,
    width: 75
  },
  titleStyle: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 40,
    marginLeft: 15,
    marginRight: 250,
    fontFamily: 'oswaldsemibold'
  },
  topButtonStyle: {
    color: Colors.primary,
    fontSize: 25,
    marginRight: 25,
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
    fontSize: 25,
    fontFamily: 'oswaldmedium',
    opacity: 0.5,
    marginLeft: 10
  },
  placeholder: {
    color: Colors.primary,
    fontSize: 25,
    marginLeft: 10
  }
})