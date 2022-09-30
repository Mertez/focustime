import React, { useState } from 'react';
import { View, StyleSheet, Text, Vibration, Platform } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { TextInput, Button } from 'react-native-paper';
import { colors } from '../../utils/colors';
import { spaces, fontSizes } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
// import { RoundedButton } from '../../components/RoundedButton';

import { Timing } from './Timing';

const DEFAULT_TIME = 0.1;
export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();

  const interval = React.useRef(null);
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 4000);
    } else {
      Vibration.vibrate(3000);
    }
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd(focusSubject);
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={{ paddingTop: spaces.lg }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={{ paddingTop: spaces.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.violetblue}
          style={{ height: spaces.sm }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <Button title="pause" onPress={() => setIsStarted(false)} style={{ marginTop: spaces.sm }} xicon="send" mode="contained" >Pause</Button>
        ) : (
          <Button title="start" onPress={() => setIsStarted(true)} style={{ marginTop: spaces.sm }} xicon="send" mode="contained" >Start</Button>
        )}
      </View>
      <View style={styles.clearSubject}>
        <Button title="-" onPress={() => clearSubject()} style={{ marginTop: spaces.sm, backgroundColor: colors.violetblue66 }} icon="undo" mode="contained" >Return</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:spaces.sm,
  },
  title: {
    color: colors.violetblue,
    textAlign: 'center',
    fontWeight: 'bold',
    // backgroundColor:colors.yellow,
  },
  task: {
    color: colors.gray,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spaces.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubject: {
    flex: 0.7,
    paddingBottom: spaces.xl,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});