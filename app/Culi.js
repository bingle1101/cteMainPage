import { Text, View, StyleSheet, ImageBackground, ScrollView, Image } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import { LinearGradient } from "expo-linear-gradient"
import Footer from "../components/footer"
import { VideoView, useVideoPlayer } from "expo-video"

export default function Culi() {
    const player = useVideoPlayer(require('../assets/Business/BusinessCTE.mp4'), player => { player.play(); player.loop = true; player.muted = true; });
    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/Culinary/elle-cosgrave-bEwJDtPGuKU-unsplash.jpg')}>
                <ScrollView>
                    <View style={styles.chunk1}>
                        <Text style={styles.c1Title}>Culinary</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Related Classes</Text>
                        <LinearGradient style={{ height: 500, width: 700 }} locations={[0, 0.6, 1]} colors={["#C7C7C7", "white", "#C7C7C7"]}>
                            <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                                <View style={styles.break}>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Foundations of Culinary (lvl 1)</Text>
                                        <Image
                                            source={require('../assets/Culinary/easy-dinner-recipes-for-beginners_cat-1.webp')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}> <Text style={{fontWeight: "bold", fontSize: 30}}>{"Open to grades: 9-12\n"}</Text>
                                            Foundations of Culinary Arts is an <Text style={{ fontWeight: "bold" }}>introductory course</Text> designed to inform students about careers in the food prep and service industries or related fields, basic
                                            nutritional and cooking concepts, and the history and influence of culture on food.
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Culinary Arts: Food
                                            Preparation (lvl 2)</Text>
                                        <Image
                                            source={require('../assets/Culinary/2606852-84d547ec32d142f782e7d9ec104c9635.jpg')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}> <Text style={{fontWeight: "bold", fontSize: 30}}>{"Open to grades: 10-12\n"}</Text>
                                            Culinary Arts: Food Preparation is the <Text style={{ fontWeight: "bold" }}>second course</Text> in the Culinary Arts program of study designed to inform and expose students to various basic food
                                            preparation methods and considerations found in commercial kitchens and restaurants.
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Advanced Culinary Arts: Pastry/Savory (lvl 3)</Text>
                                        <Image
                                            source={require('../assets/Culinary/Pastry-Chefs-Favorite-Pastries-and-Advice.webp')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}> <Text style={{fontWeight: "bold", fontSize: 30}}>{"Open to grades: 11-12\n"}</Text>
                                            Advanced Culinary Arts: Pastry and Savory is the <Text style={{ fontWeight: "bold" }}>third course</Text> in the Culinary Arts program of study designed to further students’ practice with food preparation in
                                            the culinary industry
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Kitchen Restaurant Operations (lvl 4)</Text>
                                        <Image
                                            source={require('../assets/Culinary/culinary_skills.jpg')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}> <Text style={{fontWeight: "bold", fontSize: 30}}>{"Open to grades: 11-12\n"}</Text>
                                            Kitchen Restaurant Operations is the <Text style={{ fontWeight: "bold" }}>fourth course</Text> in the Culinary Arts program of study and designed to prepare students for entry
                                            into the field of foodservice and culinary cuisine.
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>{"Culinary Arts Work-Based Learning \n(lvl 4)"}</Text>
                                        <Image
                                            source={require('../assets/Culinary/dine-with-us-at-cia.jpg')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}> <Text style={{fontWeight: "bold", fontSize: 30}}>{"Open to grades: 12\n"}</Text>
                                            Culinary Arts: WBL is the <Text style={{ fontWeight: "bold" }}>capstone course</Text> in the Culinary Arts program of study. It is intended to provide a work-based learning
                                            experience for students to develop further understanding of professional issues, utilize employability skills, and demonstrate mastery
                                            of academic and technical skills learned through the program of study.
                                        </Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </LinearGradient>
                    </View>
                    <View style={styles.chunk2}>
                        <LinearGradient style={{ height: 500, width: 700 }} locations={[0, 0.6, 1]} colors={["#C7C7C7", "white", "#C7C7C7"]}>
                            <View style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                                <View style={styles.break}></View>
                                <View style={styles.c2chunk}>
                                    <Text style={styles.c2cHeader}>{"\u2022 Health Services"}</Text>
                                    <Text style={styles.c2cHeader}>{"\u2022 Foundations of Business"}</Text>
                                    <Text style={styles.c2cHeader}>{"\u2022 Any World Language"}</Text>
                                    <Text style={styles.c2cHeader}>{"\u2022 Peer Education"}</Text>
                                    <Text style={styles.c2cHeader}>{"\u2022 Psychology/AP Psychology"}</Text>
                                    <Text style={styles.c2cHeader}>{"\u2022 Sociology"}</Text>
                                </View>
                            </View>
                        </LinearGradient>
                        <Text style={styles.c3title}>Suggested Classes</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <LinearGradient style={{ height: 500, width: 700 }} locations={[0, 0.6, 1]} colors={["#C7C7C7", "white", "#C7C7C7"]}>
                            <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                                <View style={styles.break}>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Mr. Mitsuda</Text>
                                        <Image
                                            source={require('../assets/Culinary/Mitsuda.jpg')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Teaches X, Y, & Z. Can be found @________. Loves This n' dat.
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Mrs. Perkins</Text>
                                        <Image
                                            source={require('../assets/Culinary/Perkins.jpg')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Teaches X, Y, & Z. Can be found @________. Loves This n' dat.
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Mrs. Harada</Text>
                                        <Image
                                            source={require('../assets/Stock_Portrait.png')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Teaches X, Y, & Z. Can be found @________. Loves This n' dat.
                                        </Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </LinearGradient>
                        <Text style={styles.c3title}>Teachers</Text>
                    </View>
                    <View style={styles.videoChunk}>
                        <LinearGradient style={{ paddingHorizontal: 50, height: 600, width: 900, alignContent: "center" }} locations={[0, 0.6, 1]} colors={["#C7C7C7", "white", "#C7C7C7"]}>
                            <Text style={[styles.c1Title, { textAlign: "center" }]}>CTE Video</Text>
                            <VideoView style={styles.video} player={player} nativeControls />
                        </LinearGradient>
                    </View>
                    <Footer />
                </ScrollView >
            </ImageBackground >
        </View >
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
        resizeMode: 'cover'
    },
    chunk1: {
        marginTop: 200,
        marginHorizontal: 150,
        padding: 75,
        backgroundColor: "#C7C7C7",
        alignItems: 'center'
    },
    c1Title: {
        fontSize: 75,
        color: Colors.secondary,
        fontFamily: 'oswaldmedium',
        marginBottom: 25
    },
    c1Button: {
        fontSize: 25,
        padding: 10,
        color: Colors.primary,
        backgroundColor: Colors.secondary,
        fontFamily: 'oswaldsemibold'
    },
    chunk2: {
        marginTop: 100,
        padding: 100,
        marginBottom: 150,
        height: 500,
        backgroundColor: "#C7C7C7",
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
        marginLeft: 180,
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
        textAlign: 'center'
    },
    studentImg: {
        height: 250,
        width: 250
    },
    c2cHeader: {
        fontSize: 40,
        color: Colors.secondary,
        fontFamily: 'oswaldmedium',
        textAlign: 'center'
    },
    videoChunk: {
        marginTop: 100,
        marginBottom: 150,
        height: 600,
        backgroundColor: "#C7C7C7",
        alignItems: 'center',
        justifyContent: 'center'
    },
    video: {
        marginHorizontal: 100
    }
})