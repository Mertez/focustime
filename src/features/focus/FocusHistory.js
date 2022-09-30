import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { colors } from '../../utils/colors';
import { spaces, fontSizes } from '../../utils/sizes';


export const FocusHistory = ({history}) => {

  if(!history || !history.length) return <Text style={styles.title}>Nothing focused yet!</Text>;

  const renderItem = ({item})=> <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spaces.md
  },
  title:{
    color:colors.violetblue,
    fontSize:fontSizes.md,
    padding:spaces.md,
    textAlign:'center',
    fontWeight:'bold',
  },
  item:{
    color:colors.gray,
    paddingTop: spaces.sm,
    fontSize:fontSizes.md,
  }
});
