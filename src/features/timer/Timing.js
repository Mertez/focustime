import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {spaces, fontSizes} from '../../utils/sizes';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <Button onPress={() => onChangeTime(0.1)} style={{ marginTop: spaces.sm }} mode="contained" >6"</Button>
      </View>    
      <View style={styles.timingButton}>
        <Button onPress={() => onChangeTime(10)} style={{ marginTop: spaces.sm }} mode="contained" >10'</Button>
      </View>
      <View style={styles.timingButton}>
        <Button onPress={() => onChangeTime(15)} style={{ marginTop: spaces.sm }} mode="contained" >15'</Button>
      </View>
      <View style={styles.timingButton}>
        <Button onPress={() => onChangeTime(20)} style={{ marginTop: spaces.sm }} mode="contained" >20'</Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center'
  }
})