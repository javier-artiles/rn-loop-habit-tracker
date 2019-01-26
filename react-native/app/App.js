/**
 * @flow
 */

import React from 'react';
import { Lightbox, Router, Scene } from 'react-native-router-flux';
import HabitListScene from './scene/HabitListScene';
import { MenuProvider } from 'react-native-popup-menu';
import NewHabitLightbox from './component/NewHabitLightbox';
import HabitDetailScene from './scene/HabitDetailScene';
import SettingsScene from './scene/SettingsScene';

export default App = () => (
  <MenuProvider>
    <Router>
      <Scene
        key="root"
        hideNavBar
      >
        <Lightbox>
          <Scene
            key="habitList"
            component={HabitListScene}
          />
          <Scene
            key="newHabit"
            component={NewHabitLightbox}
          />
        </Lightbox>
        <Scene
          key="habitDetail"
          component={HabitDetailScene}
        />
        <Scene
          key="settings"
          component={SettingsScene}
        />
      </Scene>
    </Router>
  </MenuProvider>
);