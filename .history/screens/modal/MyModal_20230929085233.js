import React, { useState } from 'react';
import { Modal, View, Text, Button,Image,StyleSheet, TouchableOpacity ,Platform} from 'react-native';

const MyModal = ({ visible, closeModal ,navigation}) => {

    const onPress = () => {
        navigation.navigate('Welcome');
        closeModal();
    }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 ,justifyContent:'space-evenly',alignItems:'center',width: 300,
height: 250,...Platform.select({
  ios:{
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.5,
    shadowRadius:4,
  },
  android:{
    elevation:5,
  }
})}}>
          <View>
          <Image
            source={require('../../assets/images/check-circle.png')}
            style={styles.imageStyle}
          />
          </View>
          <View>
            <Text style={{color:'#93A19C'}}>Compte crée avec succès !</Text>
          </View>
          <TouchableOpacity style={{backgroundColor:'#D1EBE1',width: 239,
height: 40,justifyContent:'center',alignItems:'center',borderRadius:10}} onPress={onPress}>
            <Text style={{color:'#2D665F'}}>Fermer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
  justifyContent: 'center',
  alignItems: 'center',
  resizeMode: 'contain', 
  }
});


export default MyModal;