import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Test,
  StatusBar,
  ImageBackgroundComponent,
} from 'react-native';
import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// data ko array [] k ander object {} k trh store kiya gya hai (OBJECTS KA ARRAY)
const Data = [
  {
    id: '1234',
    title: 'First iteam',
  },
  {
    id: '12345',
    title: 'Second iteam',
  },
  {
    id: '123456',
    title: 'Third iteam',
  },
  {
    id: '1234567',
    title: 'Four iteam',
  },
  {
    id: '12345678',
    title: 'Fifth iteam',
  },
  {
    id: '12345789',
    title: 'Six iteam',
  },
  {
    id: '12345',
    title: 'Saven iteam',
  },
  {
    id: '12345',
    title: 'Eight iteam',
  },
  {
    id: '12345',
    title: 'Nine iteam',
  },
  {
    id: '12345',
    title: 'Ten iteam',
  },
  {
    id: '12345',
    title: 'Second iteam',
  },
  {
    id: '12345',
    title: 'Second iteam',
  },
];

// type ItemProps = { title: String }; this line are use in TypeScript file

// const Item = ({ title }: ItemProps) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

const Item = (
  { title }, // Item naam ka component create kiya gya hai.. or usmay properties title diya gya hai.
) => (
  // UI define
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const SimpleFlatList = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={Data}
          renderItem={({ item }) => <Item title={item.title} />}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    fles: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#4db31aff',
    padding: 20,
    marginVertical: 8,
    marginhorizontal: 16,
  },
  title: {
    fontSize: 30,
  },
});

export default SimpleFlatList;
