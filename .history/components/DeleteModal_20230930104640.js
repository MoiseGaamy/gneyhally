import { View, Text, Modal } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../utils/Constantes'
import BtnMix from './BtnMix'



const DeleteModal = () => {
  return (
    <Modal
        transparent={true}
        visible={true}
    >
          <View style={{flex:1, height:60 , backgroundColor:'#000000aa'}}>
            <View 
                style={{backgroundColor:'#FFFFFF',
                borderRadius:20, 
                margin:40, 
                padding:40,
                position:'relative',
                top:'30%',
                
            }}>
                <View style={{alignItems:'center'}}>
                <MaterialCommunityIcons name='delete-outline' color={COLORS.red} size={80} />
                </View>
                <Text style={{textAlign:'center'}}>Veux-tu supprimer la discussion ?</Text>
                    <View style={{
                        flexDirection:'row', 
                        justifyContent:'space-between',
                        marginTop:25,
                    }}>
                        <BtnMix
                            btnText='Annuler'
                            bgColor={COLORS.lightGray}
                        />
                        <BtnMix 
                            btnText='Oui'
                            bgColor={COLORS.red}
                            textColor={COLORS.white}
                        />
                    </View>
            </View>
        </View>
    </Modal>
  )
}

export default DeleteModal