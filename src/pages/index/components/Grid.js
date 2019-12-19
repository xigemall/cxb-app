import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Image } from 'react-native-elements';

const { width } = Dimensions.get('window');

export default class Grid extends Component {

  render() {
    const { data } = this.props;
    return (
      <View style={style.container}>
        <View style={style.content}>
          {
            data.map((i, index) => (
              <TouchableOpacity
                key={index}
                onPress={i.onPress}
              >
                <View style={style.gridItem}>
                  <Image source={i.uri} style={{ width: 30, height: 30 }} />
                  <Text style={style.itemText}>{i.text}</Text>
                </View>
              </TouchableOpacity>
            ))
          }
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    top: -20,
  },
  content: {
    width: width - 30,
    borderRadius: 6,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: (width - 31) / 3,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#FFF0F0F0',
    borderBottomWidth: 1,
    borderBottomColor: '#FFF0F0F0',
  },
  itemText: {
    marginTop: 12,
  },
});
