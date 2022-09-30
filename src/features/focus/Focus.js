import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { colors } from '../../utils/colors';
import { spaces, fontSizes } from '../../utils/sizes';


export const Focus = ({ addSubject }) => {
  
  const [subject, setSubject] = useState('');

  return (
    <View style={styles.container}>
      {/*<Text style={styles.text}>Focus...</Text>*/}
      <TextInput
        style={styles.input}
        label="What would you like to focus on?"
        mode="outlined"
        onChangeText={setSubject}
      />
      <Button
        style={{ marginTop: spaces.sm }}
        icon="send"
        mode="contained"
        onPress={() => addSubject(subject)}>
        Go {subject}
      </Button>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: .3,
  },
  input: {
    marginTop: spaces.sm,
    backgroundColor: colors.white,
  },
});
