import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import normalize from '../../utils/helpers/normalize';
import { COLORS } from '../../theme/Colors';
import { Fonts } from '../../theme/Fonts';

const CategoryItem = ({ category, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      style={[styles.categoryContainer, isSelected && styles.selectedCategory]}
      onPress={() => onPress(category)}
    >
      <Text style={[styles.categoryText, isSelected && styles.selectedText]}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: '#f0f0f0', 
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.bgWhite,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 5,
    height: normalize(35),
    marginTop: normalize(10),
  },
  selectedCategory: {
    backgroundColor: COLORS.lightPrimary,
  },
  categoryText: {
    fontSize: normalize(13),
    textAlign: 'center',
    color: 'grey', // Default text color
    fontFamily: Fonts.MadeTommyBold,
  },
  selectedText: {
    color: 'white', // Text color when selected
  },
});

export default CategoryItem;
