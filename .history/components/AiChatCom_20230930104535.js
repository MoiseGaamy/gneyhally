import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import aiHomeFirstStyles from './../styles/Style'
import {COLORS} from './../utils/Constantes'

const AiChatCom = ({TextTyping, keyboardAppearance, keyboardShow}) => {
  return (
    <View style={{padding:10,height:'100%', marginTop:30}}>
        <View style={{justifyContent:'space-between', flexDirection:'row'}}>
            <View>
                <MaterialCommunityIcons style={{backgroundColor:'white',borderRadius:10, padding:5}} name='arrow-left-thin' color='#93A19C' size={30} />
            </View>
            <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons style={{backgroundColor:'white',borderRadius:10, padding:5}} name='pencil-box-outline' color='#93A19C' size={30} />
                <MaterialCommunityIcons style={{backgroundColor:'white',borderRadius:10, padding:5, marginLeft:7}} name='delete-outline' color='#93A19C' size={30} />
            </View>
        </View>
        <View style={{flexDirection:'row', marginTop:40}}>
            <View style={{
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
                height: 40,
                backgroundColor: COLORS.iconGreen,
                flexShrink: 0,
            }}>
                <Image source={require('./../assets/Vector.png')} style={{width:20, height:20}} />
            </View>
            <View>
                <Text style={aiHomeFirstStyles.aiChatText}>
                    Bonjour, je suis GnéyHally.
                </Text>
            </View>
        </View>
        <View style={{marginLeft:40, marginTop:10}}>
            <Text style={{...aiHomeFirstStyles.aiChatText}}>
                Parles-moi de tes préoccupations.
                La plupart des ados me posent des questions vraiment intéressantes.
            </Text>
        </View>
        <View style={{alignItems:'flex-end', marginTop:10}}>
            <Text style={aiHomeFirstStyles.aiChatText02}>Je m’appelle Kadiatou</Text>
            <Text style={aiHomeFirstStyles.aiChatText02}>
                Je viens d’avoir mes 14 ans mais mes parents veulent que je me marie maintenant. 
                je ne sais pas quoi faire aider moi je t’en prie
            </Text>
            <View 
                style={{
                    marginTop:10,
                    alignItems:'center',
                    padding:10,
                    borderWidth:1,
                    borderRadius:20,
                    borderBottomRightRadius:0,
                    borderTopRightRadius:15,
                    width:200,
                    flexDirection:'row',
                }}
            >
                <MaterialCommunityIcons name='play-circle' color='#93A19C' size={20} />
                <View style={{width:110, marginHorizontal:5, height:1, backgroundColor:COLORS.gray}} />
                <Text>00:23</Text>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={{
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
                height: 40,
                backgroundColor: COLORS.iconGreen,
                marginTop:50,
            }}>
                <Image source={require('./../assets/Vector.png')} style={{width:20, height:20}} />
            </View>
                <Text style={{marginTop:30, fontSize:40, marginLeft:10}}>...</Text>
            </View>
            <View
                style={{
                    position:'absolute',
                    bottom:70,
                    left:15,
                    right:15,
                    backgroundColor:'#D1EBE1',
                    borderRadius:15,   
                    paddingVertical:12,
                    paddingHorizontal:20,
                    flexDirection:'row',
                    justifyContent:'space-between',
                }}
            >

            <TextInput
                placeholder='Commencer à écrire ici...'
                value={TextTyping}
                keyboardAppearance={keyboardAppearance}
                autoFocus={keyboardShow}
            />
            <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name='emoticon' color={COLORS.iconGreen} size={20} />
                <MaterialCommunityIcons name='microphone' style={{marginLeft:10}} color={COLORS.iconGreen} size={20} />
            </View>
            </View>
    </View>
  )
}

export default AiChatCom