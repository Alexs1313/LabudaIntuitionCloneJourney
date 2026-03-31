import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {IntuitionclneProvider} from './Intuitionclnjrney/Intuitionclnjrneystorg/intuitionclnjrctxt';
import Intuitionclonestakcc from './Intuitionclnjrney/Intuitionclnjrneyrout/Intuitionclonestakcc';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <IntuitionclneProvider>
        <Intuitionclonestakcc />
      </IntuitionclneProvider>
    </NavigationContainer>
  );
};

export default App;
