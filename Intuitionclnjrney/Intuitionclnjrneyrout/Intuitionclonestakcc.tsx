import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Intuitionclnjrnloadr from '../Intuitionclnjrnecpnts/Intuitionclnjrnloadr';
import Intuitionclnejronbrd from '../Intuitionclnjrneyscrns/Intuitionclnejronbrd';
import Intuitionclnejrhome from '../Intuitionclnjrneyscrns/Intuitionclnejrhome';
import Intuitionclnejrabout from '../Intuitionclnjrneyscrns/Intuitionclnejrabout';
import Intuitionclnejrlevels from '../Intuitionclnjrneyscrns/Intuitionclnejrlevels';
import Intuitionclnejrgam from '../Intuitionclnjrneyscrns/Intuitionclnejrgam';
import Intuitionclnejrewrds from '../Intuitionclnjrneyscrns/Intuitionclnejrewrds';
import Intuitionclneexchng from '../Intuitionclnjrneyscrns/Intuitionclneexchng';
import Intuitionclneestts from '../Intuitionclnjrneyscrns/Intuitionclneestts';
import Intuitionclnsettngs from '../Intuitionclnjrneyscrns/Intuitionclnsettngs';

const NativeStack = createStackNavigator();

const Intuitionclonestakcc: React.FC = () => {
  return (
    <NativeStack.Navigator screenOptions={{headerShown: false}}>
      <NativeStack.Screen
        name="Intuitionclnjrnloadr"
        component={Intuitionclnjrnloadr}
      />
      <NativeStack.Screen
        name="Intuitionclnejronbrd"
        component={Intuitionclnejronbrd}
      />
      <NativeStack.Screen
        name="Intuitionclnejrhome"
        component={Intuitionclnejrhome}
      />
      <NativeStack.Screen
        name="Intuitionclnejrabout"
        component={Intuitionclnejrabout}
      />
      <NativeStack.Screen
        name="Intuitionclnejrlevels"
        component={Intuitionclnejrlevels}
      />
      <NativeStack.Screen name="Intuitionclnejrgam" component={Intuitionclnejrgam} />
      <NativeStack.Screen
        name="Intuitionclnejrewrds"
        component={Intuitionclnejrewrds}
      />
      <NativeStack.Screen
        name="Intuitionclneexchng"
        component={Intuitionclneexchng}
      />
      <NativeStack.Screen
        name="Intuitionclneestts"
        component={Intuitionclneestts}
      />
      <NativeStack.Screen
        name="Intuitionclnsettngs"
        component={Intuitionclnsettngs}
      />
    </NativeStack.Navigator>
  );
};

export default Intuitionclonestakcc;
