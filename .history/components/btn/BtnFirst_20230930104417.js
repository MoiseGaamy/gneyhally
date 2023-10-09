import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/Constantes'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const BtnFirst = ({text}) => {
  return (
    <View 
        style={{
            backgroundColor:COLORS.textGreen, 
            padding:2, borderRadius:8,
            flexDirection:'row',
            justifyContent:'center',
            width:105,
            height:28,
        }}
    >
        <Text 
            style={{
                color:'white'
            }}
        >
            {text}
        </Text>
        <MaterialCommunityIcons name='arrow-right-thin' color='#FFFFFF' size={20} />
    </View>
  )
}

export default BtnFirst