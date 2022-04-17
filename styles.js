import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3D595B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rectangle: {
        width: width,
        height: 0.12 * height,
        marginTop: 0.81 * height,
        position: 'absolute',
        backgroundColor: "#F2CC8F",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    layoutMap: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    rectangleMap: {
        width: 0.9 * width,
        height: 0.15 * height,
        borderRadius: 15,
        marginTop: 0.04 * height,
        backgroundColor: '#81B29A',
        marginLeft: 0.5 * 0.1 * width
    },
    imageMap: {
        width: 0.27 * width,
        height: 0.15 * height,
        marginLeft: -30
    },  
    imageMap2: {
        width: 0.1 * width,
        height: 0.05 * height,
    },
    mapScreenContainer: {
        alignItems: 'center',
        width: 100,
        backgroundColor: 'transparent',
        height: 100,
    },
    mapScreenTextContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    mapScreenText: {
        textAlign: 'center',
        paddingHorizontal: 5,
        flex: 1,
    },
    mapScreenIcon: {
        paddingTop:5,
    },
    elevation: {
        elevation: 5,
        shadowColor: '#000000',
    },
    badge: {
        textAlign: "center",
        justifyContent: 'center',
        width: "100%",
        marginTop: 0,
    },
    navlog: {
        width: 79.34,
        height: 70,
        marginTop: -20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        position: 'relative',
        textAlign: "center",
        justifyContent: "center",
        color: "#E07A5F",
    },
    center_text: {
        position: 'relative',
        textAlign: "center",
        justifyContent: "center",
        fontSize: 25,
        backgroundColor: '#81B29A',
        color: '#ffffff',
        alignSelf:'center',
        marginTop: 20,
        marginBottom: 5,
    },
    home_log: {
        width: 0.9 * width,
        height: 0.4 * height,
        marginTop: 0.05 * width,
        marginLeft: 0.05 * width,
        marginRight: 0.05 * width,
        backgroundColor: '#81B29A',
        borderRadius: 10,
        borderWidth: 1,
        // borderColor: '#fff',
    },
    home_text: {
        fontSize: 20,
        color: '#F4F1DE',
        alignSelf:'center',
        marginTop: 5,
        marginBottom: 5,
      },
    home_container: {
        height: height,
        backgroundColor: '#3D595B',
        alignItems: 'center',
        color: '#FFFFFF'
      },
    heatmap : {
        backgroundColor: "#2E2E33", 
        marginTop: 10, 
        marginLeft: 0.05*width, 
        marginRight: 0.05*width
    },
    logText: {
        color: "#ffffff",
        fontSize: 20,
        marginLeft:.02*width
    },
    logImg: {
        alignSelf: "center",
        width: 0.35*width,
        height: 0.23*height
    }
});

export default styles;