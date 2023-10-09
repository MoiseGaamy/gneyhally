import { View, Text } from 'react-native'
import React from 'react'
// import { COLORS } from '../../utils/Constantes'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const BtnBack = () => {
  return (
    <View>
       <MaterialCommunityIcons style={{backgroundColor:'white',borderRadius:10, padding:5}} name='arrow-left-thin' color='#93A19C' size={30} />
    </View>
  )
}

export default BtnBack