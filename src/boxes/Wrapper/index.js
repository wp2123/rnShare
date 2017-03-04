import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  StatusBar,
  ListView,
  RefreshControl
} from 'react-native';
import style from './style';

let mockData = [
  {name: '张', message: 'dataSource'},
  {name: '李', message: 'initialListSize'},
  {name: '王', message: 'onChangeVisibleRows'},
  {name: '陈', message: 'onEndReached'},
  {name: '刘', message: 'onEndReachedThresholdonEndReachedThresholdonEndReachedThresholdonEndReachedThresholdonEndReachedThreshold'},
  {name: '路', message: 'pageSize'},
  {name: '吴', message: 'removeClippedSubviews'},
  {name: '孙', message: 'renderFooter'},
  {name: '徐', message: 'renderHeader'},
  {name: '胡', message: 'renderRow'},
  {name: '苏', message: 'renderScrollComponent'},
  {name: '田', message: 'renderSectionHeader'},
  {name: '杜', message: 'renderSeparator'},
];

class Wrapper extends Component {
  state = {
  };
  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(mockData),
      data: mockData,
      refreshing: true,
      currentPage: 1
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        refreshing: false
      });
    }, 2000);
  }
  init() {
    this.setState({
      refreshing: true
    }, () => {
      setTimeout(() => {
        this.setState({
          data: mockData,
          dataSource: this.state.dataSource.cloneWithRows(mockData),
          refreshing: false
        });
      }, 1000);
    });
  }
  nextPage() {
    let newData = this.state.data.concat(mockData);
    setTimeout(() => {
      this.setState({
        data: newData,
        dataSource: this.state.dataSource.cloneWithRows(newData)
      });
    }, 1000);
  }
  render() {
    return (
      <View style={style.wrapper}>
        <StatusBar
          animated={true}
          barStyle='light-content'
          backgroundColor='red'
        />
        <View style={style.header}></View>
        <View style={style.body}>
          <ListView
            dataSource={this.state.dataSource}
            refreshControl={<RefreshControl
              onRefresh={() => this.init()}
              refreshing={this.state.refreshing}
            />}
            onEndReachedThreshold={10}
            onEndReached={() => this.nextPage()}
            renderSeparator={(sectionId, rowId) => {
              return (
                <View key={sectionId + '-' + rowId} style={style.separator}></View>
              );
            }}
            renderRow={(rowData) => {
              return (
                <View style={style.messageItem}>
                  <View style={style.contentLeft}>
                    <View style={style.avator}></View>
                  </View>
                  <View style={style.contentRight}>
                    <Text style={style.name}>{rowData.name}</Text>
                    <Text style={style.message} numberOfLines={1}>{rowData.message}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={style.footer}></View>
      </View>
    );
  }
}

export default Wrapper;

