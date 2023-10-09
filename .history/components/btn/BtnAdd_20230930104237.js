import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/Constantes'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const BtnAdd = () => {
  return (
      <View style={{borderRadius:100, backgroundColor:COLORS.iconGreen}}>
        <MaterialCommunityIcons name='plus' color='#FFFFFF' size={50} />
      </View>
  )
}

export default BtnAdd