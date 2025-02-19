import { Text, View, StyleSheet } from 'react-native'
import TopBar from '../components/topBar'
import Colors from '../components/colors'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'

export default function deptpage() {
  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })
  return (
    <View>
      <TopBar />
      <View style={styles.container}>
        <Text style={styles.font}>
          Career and Technological Education (CTE) is all about empowering students with the knowledge and skills they need to thrive in the modern workforce. It bridges the gap between traditional academic education and the practical, hands-on experience required in various industries.
          CTE programs are designed to prepare students for a wide range of career paths, from healthcare and information technology to engineering, culinary arts, and beyond. By offering a blend of classroom instruction and real-world experience, CTE helps students develop critical thinking, problem-solving, and technical skills that are directly applicable to their chosen fields.
          These programs often include opportunities for internships, apprenticeships, and industry certifications, giving students a competitive edge in the job market. By participating in CTE, students gain a deeper understanding of their career interests, build a professional network, and acquire the skills needed to succeed in today's dynamic and evolving job landscape. Overall, Career and Technological Education provides a valuable foundation for students to achieve their career goals, contribute to the economy, and lead fulfilling, productive lives.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 100,
    flex: 1,
    padding: 20,
    backgroundColor: Colors.primary,
    
  },
  font: {
    fontFamily: 'oswaldlight',
    fontSize: 20,
  }
})