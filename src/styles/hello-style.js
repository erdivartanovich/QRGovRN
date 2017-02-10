import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  panel: {
    height: 50,
  },
  panel1: {
    backgroundColor: 'gray'
  },
  panel2: {
    backgroundColor: 'silver'
  }
});

export const panel1 = [styles.panel, styles.panel1];
export const panel2 = [styles.panel, styles.panel2];

