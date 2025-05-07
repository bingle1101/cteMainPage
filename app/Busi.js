import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, FlatList } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import Fina_Mana from "./Business_Programs/Fina_Mana"
import { Link } from "expo-router"
import { VideoView, useVideoPlayer } from "expo-video"
import Footer from "../components/footer"
import Chunk1 from "../components/Templates/Chunk1"
import Chunk2 from "../components/Templates/Chunk2Info"
import Chunk2L from "../components/Templates/Chunk2L"
import Chunk2R from "../components/Templates/Chunk2R"
import headerChunk from "../components/Templates/HeaderChunk"

export default function Busi() {
    const player = useVideoPlayer(require('../assets/Business/BusinessCTE.mp4'), player => { player.play(); player.loop = true; player.muted = true; });


    return (
        <View style={styles.background}>
            <TopBar />
            {/* <Chunk1 title={"Business"} /> */}
            





            {/* <ImageBackground style={styles.bgImg} source={require('../assets/Business/PXL_20230202_191653716.jpg')}>
                <ScrollView>
                    <View style={styles.chunk1}>
                        <Text style={styles.c1Title}>Business</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Related Classes</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Link href={"../Business_Programs/Entre"}>
                                    <Text style={styles.c2cHeader}>Entrepreneurship</Text>
                                </Link>
                                <Image
                                    source={require('../assets/Business/entrepreneurship.webp')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                Covers the entrepreneurial mindset, business planning, innovation, and practical skills for starting and growing a business.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Link href={"../Business_Programs/Mark"}>
                                    <Text style={styles.c2cHeader}>Marketing</Text>
                                </Link>
                                <Image
                                    source={require('../assets/Business/7-Reasons-Why-Product-Marketing-Matters-blog-banner-scaled.webp')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                Teaches students about creating and delivering value to customers through various strategies and tactics, including market research, product development, pricing, promotion, and distribution.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Link href={"/Business_Programs/Fina_Mana"}>
                                    <Text style={styles.c2cHeader}>Financial Management</Text>
                                </Link>
                                <Image
                                    source={require('../assets/Business/functions-of-financial-management.webp')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                Teaches individuals and businesses how to effectively manage financial resources, encompassing planning, organizing, directing, and controlling financial activities. 
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.chunk2}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Link href={"../Business_Programs/DECA"}>
                                    <Image
                                    source={require('../assets/Business/IMG_7028.jpg')}
                                    style={styles.studentImg}
                                />
                                </Link>
                                <Text style={styles.c2cBody}>
                                    Moanalua's DECA Club has been the dominant program in the state for several years. Moanalua
                                    students have won top places in state competitions and have been the majority representatives to
                                    the national competitions in such cities as Atlanta, Anaheim and Orlando
                                </Text>
                            </View>
                        </ScrollView>
                        <Text style={styles.c3title}>DECA</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Teachers</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Mrs. Kramer</Text>
                                <Image
                                    source={require('../assets/Business/Kramer.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Teaches the Finance Classes.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Ms. Yonamine</Text>
                                <Image
                                    source={require('../assets/Business/motown.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Teaches the Marketing Classes.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Mrs. Pate</Text>
                                <Image
                                    source={require('../assets/Business/motown.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Teaches the Entrepreneurship Classes.
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.videoChunk}>
                        <Text style={styles.c1Title}>Informational Video</Text>
                        <VideoView style={styles.video} player={player} nativeControls />
                    </View>
                    <Footer />
                </ScrollView>
            </ImageBackground> */}
        </View>
    )
}

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    bgImg: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    chunk1: {
        marginTop: 200,
        marginHorizontal: 150,
        padding: 75,
        backgroundColor: Colors.primary,
        alignItems: 'center'
    },
    c1Title: {
        fontSize: 75,
        color: Colors.secondary,
        fontFamily: 'oswaldmedium',
        marginBottom: 25
    },
    chunk2: {
        marginTop: 100,
        padding: 100,
        marginBottom: 150,
        height: 500,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        flexDirection: 'row'
    },
    c2title: {
        fontSize: 75,
        marginRight: 250,
        color: Colors.secondary,
        fontFamily: 'oswaldsemibold'
    },
    c3title: {
        fontSize: 75,
        marginLeft: 250,
        color: Colors.secondary,
        fontFamily: 'oswaldsemibold'
    },
    break: {
        margin: 40
    },
    c2chunk: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 75
    },
    c2cBody: {
        fontSize: 18,
        fontFamily: 'oswaldlight',
        textAlign: 'center',
        marginBottom: 20
    },
    studentImg: {
        height: 250,
        width: 250,
        margin: 20
    },
    c2cHeader: {
        fontSize: 40,
        color: Colors.secondary,
        fontFamily: 'oswaldmedium'
    },
    videoChunk: {
      marginTop: 100,
      marginBottom: 150,
      height: 600,
      backgroundColor: Colors.primary,
      alignItems: 'center',
      justifyContent: 'center'
    },
    video: {
      marginBottom: 50,
      width: 640
    }
})