import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from '../../utils/helpers/normalize';
import { COLORS } from '../../theme/Colors';
import { Fonts } from '../../theme/Fonts';
import { Icons } from '../../theme/Icon';
const TopTabBar = ({
  tabList,
  activeTab,
  setActiveTab,
  tabContainerStyle,
  tabStyle,
  tabTextStyle,
}) => {
  return (
    <View style={[styles.tabContainer, tabContainerStyle]}>
      {tabList.map((item, index) => {
        return (
          <TouchableOpacity
            style={[
              item === activeTab
                ? styles.activeTabContainer
                : styles.inactiveTabContainer,
              tabStyle,
            ]}
            onPress={() => setActiveTab(item)}
            key={index}>
            <Text
              style={[
                item === activeTab
                  ? styles.activeTabText
                  : styles?.inactiveTabText,
                tabTextStyle,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
  },
  inactiveTabContainer: {
    height: normalize(30),
    width: '33.33%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: normalize(3),
    borderColor: 'transparent',
  },
  activeTabContainer: {
    height: normalize(30),
    width: '33.33%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: normalize(3),
    borderColor: Colors.blue.main,
  },
  activeTabText: {
    fontFamily: Fonts.RobotoRegular,
    color: Colors.blue.main,
    fontSize: normalize(12),
  },
  inactiveTabText: {
    fontFamily: Fonts.RobotoRegular,
    color: '#AEAEAE',
    fontSize: normalize(12),
  },
});
export default TopTabBar;

