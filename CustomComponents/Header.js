'use strict';
import type {Node} from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';

const Header = (): Node => (
  <ImageBackground
    style={styles.background}
    imageStyle={styles.logo}>
    <Text style={styles.text}>Animons</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'sans-serif-thin',
  },
});

export default Header;
