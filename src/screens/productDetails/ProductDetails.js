import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import normalize from '../../utils/helpers/normalize';
import {COLORS} from '../../theme/Colors';
import {Fonts} from '../../theme/Fonts';
import {Icons} from '../../theme/Icon';
import ProductCard from '../../components/common/ProductCard';
import {DummyData_ProductDetails} from '../../dummyData';
import {CustomButtonSolid} from '../../components/custom/CustomButton';
import TopTabBar from '../../components/global/TopTabBar';

const width = Dimensions.get('screen').width;

const tabList = ['About', 'Details', 'Reviews'];

const ProductDetails = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('About');
  const [activeSize, setActiveSize] = useState('1 BOX');
  const [counter, setCounter] = useState(1);
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [review, setReview] = useState('');

  return (
    <>
      <View style={styles.imageContainer}>
        <Image source={Icons.product20} style={styles.imageStyle} />
      </View>
      <View style={styles.brandContainer}>
        <Text style={styles.brandText}>Brand: </Text>
        <Text style={styles.brandTextUnderline}>
          {DummyData_ProductDetails?.brand}
        </Text>
      </View>
      <View style={styles.productNameContainer}>
        <Text style={styles.productNameText}>
          {DummyData_ProductDetails?.name}
        </Text>
      </View>
      <View style={styles.productPriceContainer}>
        <Text style={styles.productPriceText}>
          Price: {DummyData_ProductDetails?.price}
        </Text>
      </View>
      <View style={styles.earnPointContainer}>
        <Text style={styles.earnPointText}>
          Earn{' '}
          <Text style={styles.earnPointTextColored}>
            {DummyData_ProductDetails?.earnPoint}
          </Text>{' '}
          points upon purchasing this product.
        </Text>
      </View>
      <View style={styles.productSortDescContainer}>
        <Text style={styles.shortDescText}>
          {DummyData_ProductDetails?.shortDesc}
        </Text>
      </View>
      <View style={styles.sizeTextContainer}>
        <Text style={styles.sizeText}>Size</Text>
      </View>
      <View style={styles.sizeListContainer}>
        {DummyData_ProductDetails?.packs?.map((item, index) => {
          return (
            <TouchableOpacity
              style={
                item === activeSize
                  ? styles.sizeTypeContainerActive
                  : styles.sizeTypeContainerInactive
              }
              onPress={() => setActiveSize(item)}
              key={index}>
              <Text
                style={
                  item === activeSize
                    ? styles.sizeTypeTextActive
                    : styles?.sizeTypeTextInactive
                }>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.cartMainContainer}>
        <View style={styles.counterTextContainer}>
          <TouchableOpacity
            onPress={() => setCounter(counter - 1)}
            style={styles.counterTouchArea}>
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{counter}</Text>
          <TouchableOpacity
            onPress={() => setCounter(counter + 1)}
            style={styles.counterTouchArea}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cartContainer}>
          <Image source={Icons.shopping_cart} style={styles.cart} />
        </View>
      </View>
      <CustomButtonSolid label="Buy It Now" onPress={() => {}} />
      <TopTabBar
        tabList={tabList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabContainerStyle={{marginTop: normalize(20)}}
      />
      {activeTab === tabList[0] ? (
        <AboutBody {...DummyData_ProductDetails?.about} />
      ) : null}
      {activeTab === tabList[1] ? (
        <DeatilsBody {...DummyData_ProductDetails?.details} />
      ) : null}
      {activeTab === tabList[2] ? (
        <ReviewsBody
          {...DummyData_ProductDetails?.reviews}
          onPressReviewButton={() => setShowReviewPopup(true)}
        />
      ) : null}
    </>
  );
};

const AboutBody = ({title, desc}) => {
  return (
    <>
      <View style={styles.tabBodyMainHeaderContainer}>
        <View style={styles.tabBodyMainHeaderLeftContainer}>
          <View style={styles.tabBodyHeaderContainer}>
            <Text style={styles.tabBodyHeaderText}>{title}</Text>
          </View>
          <Text style={styles.tabBodyDescText}>{desc}</Text>
        </View>
      </View>
    </>
  );
};

const DeatilsBody = ({title, desc, spec}) => {
  return (
    <>
      <View style={styles.tabBodyMainHeaderContainer}>
        <View style={styles.tabBodyMainHeaderLeftContainer}>
          <View style={styles.tabBodyHeaderContainer}>
            <Text style={styles.tabBodyHeaderText}>{title}</Text>
          </View>
          <Text style={[styles.tabBodyDescText, {marginBottom: normalize(10)}]}>
            {desc}
          </Text>
        </View>
      </View>
      {spec.length > 0 ? (
        <View style={{marginTop: normalize(10)}}>
          {spec?.map((item, index) => {
            return (
              <View style={styles.tabBodyLabelValueContainer} key={index}>
                <Text style={styles.tabBodyLabeltext}>{item?.label}</Text>
                <Text style={styles.tabBodyValuetext}>{item?.value}</Text>
              </View>
            );
          })}
        </View>
      ) : null}
    </>
  );
};

const ReviewsBody = ({
  title,
  desc,
  reviewList,
  onPressReviewButton = () => {},
}) => {
  return (
    <>
      <View style={styles.tabBodyMainHeaderContainer}>
        <View style={styles.tabBodyMainHeaderLeftContainer}>
          <View style={styles.tabBodyHeaderContainer}>
            <Text style={styles.tabBodyHeaderText}>{title}</Text>
          </View>
          <Text style={[styles.tabBodyDescText, {marginBottom: normalize(10)}]}>
            {desc}
          </Text>
        </View>
        <View style={styles.tabBodyHeaderContainer}>
          <CustomButtonSolid
            label="Write A Review"
            onPress={onPressReviewButton}
            containerStyle={styles.reviewButton}
            textStyle={{fontSize: normalize(10)}}
          />
        </View>
      </View>

      {reviewList.map((item, index) => {
        return <ReviewCard {...item} key={index} />;
      })}
    </>
  );
};

const ReviewCard = ({profileName, review, time, desc}) => {
  return (
    <View style={styles.reviewCardContainer}>
      <View style={styles.reviewCardTopContainer}>
        <View style={styles.reviewCardImageContainer}>
          <Image source={Icons.circleDp} style={styles.reviewCardImage} />
        </View>
        <View style={{marginLeft: normalize(10)}}>
          <Text style={styles.reviewCardProfileNameText}>{profileName}</Text>
          <Text style={styles.reviewCardTimeText}>{time}</Text>
        </View>
      </View>
      <Text style={styles.reviewCardReviewText}>{review}</Text>
      <Text style={[styles.tabBodyDescText, {marginTop: normalize(6)}]}>
        {desc}
      </Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: '#e6e6e6',
    width: '100%',
    marginVertical: normalize(20),
  },
  keyboardAwareScrollViewContainer: {
    flex: 1,
  },
  keyboardAwareScrollViewContentContainer: {
    paddingHorizontal: normalize(15),
    paddingTop: normalize(15),
    paddingBottom: normalize(30),
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  subView: {
    backgroundColor: 'white',
    marginTop: Platform.OS === 'android' ? normalize(50) : normalize(200),
    flex: 1,
    overflow: 'hidden',
    width: '100%',
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
  },
  imageContainer: {
    height: (width * 2) / 3,
    width: '100%',
    borderRadius: normalize(10),
    borderWidth: normalize(1),
    padding: normalize(10),
    borderColor: 'rgb(236,236,237)',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(14),
  },
  brandText: {
    fontFamily: Fonts.RobotoRegular,
    color: Colors.black.dark,
    fontSize: normalize(10),
  },
  brandTextUnderline: {
    fontFamily: Fonts.RobotoRegular,
    color: Colors.black.dark,
    fontSize: normalize(10),
    textDecorationLine: 'underline',
  },
  productNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  productNameText: {
    fontFamily: Fonts.RobotoBlack,
    color: Colors.black.dark,
    fontSize: normalize(18),
  },
  productPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  productPriceText: {
    fontFamily: Fonts.RobotoBold,
    color: Colors.black.dark,
    fontSize: normalize(14),
  },
  earnPointContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9d9ff',
    paddingVertical: normalize(10),
    marginTop: normalize(10),
    borderRadius: normalize(10),
  },
  earnPointText: {
    fontFamily: Fonts.RobotoRegular,
    color: Colors.black.dark,
    fontSize: normalize(9),
    textTransform: 'uppercase',
  },
  earnPointTextColored: {
    color: Colors.blue.main,
  },
  productSortDescContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  shortDescText: {
    fontFamily: Fonts.RobotoRegular,
    color: '#505050',
    fontSize: normalize(12),
    lineHeight: normalize(18),
  },
  sizeTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(20),
  },
  sizeText: {
    fontFamily: Fonts.RobotoBlack,
    color: Colors.black.dark,
    fontSize: normalize(10),
  },
  sizeListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  sizeTypeContainerInactive: {
    height: normalize(40),
    width: normalize(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: normalize(10),
    borderRadius: normalize(7),
    borderWidth: normalize(1),
    borderColor: '#d3d3d3',
  },
  sizeTypeContainerActive: {
    height: normalize(40),
    width: normalize(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: normalize(10),
    borderRadius: normalize(7),
    borderWidth: normalize(1),
    borderColor: Colors.black,
  },
  sizeTypeTextActive: {
    fontFamily: Fonts.RobotoRegular,
    color: Colors.black.dark,
    fontSize: normalize(10),
  },
  sizeTypeTextInactive: {
    fontFamily: Fonts.RobotoRegular,
    color: '#d3d3d3',
    fontSize: normalize(10),
  },
  counterTouchArea: {
    height: normalize(24),
    width: normalize(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#F5F6F6',
    height: normalize(50),
    paddingHorizontal: normalize(20),
    borderRadius: normalize(50),
  },
  counterText: {
    fontSize: normalize(18),
    lineHeight: normalize(24),
    color: Colors.black.dark,
    fontFamily: Fonts.AssistantBold,
  },
  cart: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
    tintColor: Colors.blue.main,
  },
  cartContainer: {
    height: normalize(50),
    width: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#CFCFFF',
    borderWidth: 1,
    borderRadius: normalize(50),
    marginLeft: normalize(10),
  },
  cartMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: normalize(14),
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(10),
    justifyContent: 'space-between',
  },
  inactiveTabContainer: {
    height: normalize(40),
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
  },
  activeTabContainer: {
    height: normalize(40),
    width: '33.33%',
    justifyContent: 'center',
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
  tabBodyMainHeaderContainer: {flexDirection: 'row'},
  tabBodyMainHeaderLeftContainer: {flex: 1},
  tabBodyHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: normalize(32),
    marginTop: normalize(10),
  },
  tabBodyHeaderText: {
    fontSize: normalize(13),
    color: Colors.black.dark,
    fontFamily: Fonts.RobotoBlack,
  },
  tabBodyDescText: {
    fontFamily: Fonts.RobotoRegular,
    color: '#505050',
    fontSize: normalize(11),
    lineHeight: normalize(18),
  },
  tabBodyLabelValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: normalize(8),
  },
  tabBodyLabeltext: {
    width: '50%',
    fontFamily: Fonts.RobotoRegular,
    color: '#919191',
    fontSize: normalize(11),
  },
  tabBodyValuetext: {
    width: '50%',
    fontFamily: Fonts.RobotoMedium,
    color: '#060606',
    fontSize: normalize(11),
  },
  reviewCardContainer: {
    padding: normalize(10),
    borderRadius: normalize(6),
    borderColor: '#CFCFFF',
    borderWidth: 1,
    marginTop: normalize(10),
  },
  reviewCardTopContainer: {flexDirection: 'row', alignItems: 'center'},
  reviewCardImageContainer: {
    height: normalize(40),
    width: normalize(40),
    overflow: 'hidden',
  },
  reviewCardImage: {
    height: normalize(40),
    width: normalize(40),
    resizeMode: 'cover',
  },
  reviewCardProfileNameText: {
    fontSize: normalize(11),
    color: Colors.black.dark,
    fontFamily: Fonts.RobotoBlack,
  },
  reviewCardTimeText: {
    marginTop: normalize(4),
    fontSize: normalize(10),
    color: '#d3d3d3',
    fontFamily: Fonts.RobotoMedium,
  },
  reviewCardReviewText: {
    marginTop: normalize(16),
    fontSize: normalize(11),
    color: Colors.black.dark,
    fontFamily: Fonts.RobotoBlack,
  },
  relatedProductLabel: {
    fontSize: normalize(13),
    color: Colors.black.dark,
    fontFamily: Fonts.RobotoBlack,
    marginBottom: normalize(4),
  },
  reviewButton: {
    height: normalize(24),
    width: Platform.OS === 'ios' ? normalize(85) : normalize(95),
    marginTop: 0,
    borderRadius: normalize(6),
  },
});
