import { StyleSheet } from "react-native";
import PADDING, { COLORS } from './../utils/Constantes'

export default aiHomeFirstStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginTop: 35,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    materialIcons: {
        color: '#93A19C',
        width: 35,
        right: 130,
        backgroundColor: COLORS.white,
    },
    title: {
        color: COLORS.textGreen,
        fontSize: 20,
        margin: 0,
        marginLeft: -50,
        lineHeight: 23.7,
    },
    logo: {
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: 116,
        height: 116,
        backgroundColor: COLORS.iconGreen,
        flexShrink: 0,

    },
    logoIcon:{
        backgroundColor:COLORS.gray,
        borderRadius:100,
        padding:7

    },
    aiBoxContainer: {
        fontSize: 14,
        color: COLORS.black,
        marginTop: 15,
    },
    aiBox: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 20,
        marginTop: 20,
        padding: 15,
        width: 351,
        height: 98,
        color:COLORS.black
    },
    textTitle: {
        color: COLORS.gray,
        fontWeight:'700',
        justifyContent:'flex-start',
    },
    aiTagsFormatOne:{
        backgroundColor:COLORS.lightGreen,
        borderWidth:1,
        paddingVertical:5,
        paddingHorizontal:10,
        borderStyle:'solid',
        borderRadius:20,
        marginHorizontal:5, 
        color:COLORS.textGreen,
    },
    aiTagsFormatTwo:{
        backgroundColor:COLORS.lightGray,
        paddingVertical:5,
        paddingHorizontal:10,
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:20,
        marginHorizontal:5, 
        color:COLORS.textGreen,
    },
    ScrollListItem :{
      marginHorizontal:7,
      width:162,
      height:148,
      borderRadius:10,
      opacity:80,
      flexDirection:'column',
      justifyContent:'space-between',
      padding:15,

    },
    ScrollListItemButtom: {
        borderRadius:20,
    },
    aiChatText : {
        color:COLORS.black,
        backgroundColor:'#E7E7E7', 
        padding:10,
        borderRadius:20,
        borderBottomLeftRadius:15,
        borderTopLeftRadius:0,
        marginLeft:20,
    },
    aiChatText02 : {
        backgroundColor:COLORS.iconGreen, 
        padding:10,
        borderWidth:1,
        borderRadius:20,
        borderBottomRightRadius:0,
        borderTopRightRadius:15,
        marginLeft:10,
        marginTop:10,
        color:COLORS.white,
    },
    searchInput: {
        padding:20,
        borderRadius:20,
        backgroundColor:COLORS.white,
    },
    scrollVerticalList : {
        borderRadius:20,
        paddingHorizontal:8,
        paddingVertical:3,
        alignItems:'center',
        height:24,
        width:85,
    }
})