import React, { useState, useRef } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, TextInput, Image, TouchableOpacity, Modal, Pressable, Alert } from 'react-native';
import Api from '../Components/Api';


const Search = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [filterdData, setfilterdData] = useState(Api);
  const [masteredData, setMasteredData] = useState(Api);
  const [ind, setInd] = useState(0);
  const searchref = useRef();
  const listRef = useRef();

  const ItemSeparatorView = () => {
    return (
      <View style={{ height: 0.5, width: "100%", backgroundColor: '#c8c8c8' }} />
    )
  }

  const searchFilter = (text) => {
    if (text) {
      const newData = masteredData.filter((item) => {
        const itemData = item.title ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterdData(newData);
      setSearch(text);
    } else {
      setfilterdData(masteredData);
      setSearch(text);
    }

  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.Container}>
        <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignItems: "center" }}>
          <View style={styles.textInputStyle}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <Image style={{ height: 30, width: 30, right: 20 }} source={require('../../Assets/icons/magnifying-glass.png')} />
              <TextInput style={{ width: '60%' }}
                value={search}
                placeholder="serach here"
                underlineColorAndroid="transparent"
                onChangeText={(text) => {
                  searchFilter(text);
                }}

              />
            </View>
            {search == '' ? null : (
              <TouchableOpacity onPress={() => {

                searchFilter('');
                setSearch('');
              }}>
                <Image style={{ height: 20, width: 20, right: 10 }} source={require('../../Assets/icons/close.png')} />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image style={{ height: 30, width: 30 }} source={require('../../Assets/icons/edit.png')} />
          </TouchableOpacity>
        </View>

        <FlatList data={filterdData}
          ref={listRef}
          renderItem={({ item }) => {
            return (
              <View style={styles.itemStyle}><Text>{item.id} {'. '}{item.title.toUpperCase()}</Text></View>
            )
          }}
          initialScrollIndex={ind}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}

        ></FlatList></View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View >
              <TouchableOpacity style={styles.sortByStyle} onPress={() => {
                let templist = masteredData.sort((a, b) =>
                  a.title > b.title ? 1 : -1,
                );
                setMasteredData(templist);
                listRef.current.scrollToIndex({ animated: true, index: 0 });
                setModalVisible(false);
                setMasteredData(masteredData);
              }}>
                <Text style={styles.modalText}>sort in ascending</Text>
              </TouchableOpacity >
              <TouchableOpacity style={styles.sortByStyle} onPress={() => {
                let templist = masteredData.sort((a, b) =>
                  a.title < b.title ? 1 : -1,
                );
                setMasteredData(templist);
                listRef.current.scrollToIndex({ animated: true, index: 0 });
                setModalVisible(false);
              }}>
                <Text style={styles.modalText}>sort in descending</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Image source={require('../../Assets/icons/close.png')} style={{ height: 20, width: 20, top: 20 }} />
            </TouchableOpacity>
          </View>
        </View>

      </Modal>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 15,
  },
  textInputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: "85%",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'white'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    top: 5,
    fontSize: 20,
    marginBottom: 10,
    color: '#000',


  },
  sortByStyle: {
    borderBottomWidth: 0.5,
    width: "100%",


  }
});

export default Search;
