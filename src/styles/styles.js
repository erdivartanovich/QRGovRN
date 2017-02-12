import {
  StyleSheet,
} from 'react-native';

import headerStyle from './header-style';

export const global = StyleSheet.create({
  panel: {    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
});

export const header = headerStyle; 

