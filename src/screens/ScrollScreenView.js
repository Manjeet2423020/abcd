import { View, Text, ScrollView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const ScrollScreenView = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            Keep in mind that ScrollViews must have a bounded height in order to
            work, since they contain unbounded-height children into a bounded
            container .In order to bound the height of a ScrollView, either set
            the height of the view directly or make sure all parent views have
            bounded height. Forgetting to transfer down the view stack can lead
            to errors here, which the element inspector makes quick to debug.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 40,
    padding: 10,
  },
});

export default ScrollScreenView;
