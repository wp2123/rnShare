import {StyleSheet, Dimensions} from 'react-native';

let pageWidth = Dimensions.get('window').width;
console.log(Dimensions.get('window'));

const style = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  header: {
    width: pageWidth,
    height: 60,
    borderStyle: 'solid',
    borderColor: '#ddd',
    borderBottomWidth: 1
  },
  body: {
    flex: 1
  },
  footer: {
    width: pageWidth,
    height: 60,
    borderStyle: 'solid',
    borderColor: '#ddd',
    borderTopWidth: 1
  },
  messageItem: {
    flexDirection: 'row',
    width: pageWidth,
    height: 60,
    //borderBottomWidth: 1,
    //borderStyle: 'solid',
      //borderColor: '#ddd'
  },
  contentLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60
  },
  avator: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd'
  },
  contentRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  name: {
    fontSize: 16,
    color: '#333'
  },
  message: {
    marginTop: 10,
    fontSize: 14,
    color: '#999'
  },
  separator: {
    width: pageWidth,
    height: 1,
    backgroundColor: '#ddd'
  }
});

export default style;

