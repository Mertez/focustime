import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { spaces, fontSizes } from './src/utils/sizes';
import { Focus } from './src/features/focus/Focus';
import { FocusHistory } from './src/features/focus/FocusHistory';
import { Countdown } from './src/components/Countdown';
import { Timer } from './src/features/timer/Timer';


export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Hello {Platform.OS} user...</Text>

      {currentSubject ? (
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={(subject) => {
              //setHistory([...history,subject]);
              if (history.indexOf(subject) === -1) {
                  history.push(subject);

              }  
            }}
            clearSubject={() => {setCurrentSubject(null)}}
          />
      ) : (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history} />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.white,
    padding: 0,
    paddingStart: spaces.sm,
    paddingEnd: spaces.sm,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: spaces.sm,
    color: colors.gray,
  },
});
