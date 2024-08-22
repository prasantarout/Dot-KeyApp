import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Icons} from '../../theme/Icon';
import ProductCard from '../../components/common/ProductCard';
import normalize from '../../utils/helpers/normalize';
import CustomHeader from '../../components/custom/CustomHeader';
import {COLORS} from '../../theme/Colors';
import TextInputBoxSearch from '../../components/custom/TextInputBoxSearch';
import {getCategoriesListRequest} from '../../redux/reducer/CategoryReducer';
import connectionrequest from '../../utils/helpers/NetInfo';
import {useDispatch, useSelector} from 'react-redux';
import CategoryItem from '../../components/common/CategoryItem';
import {getProductByCategoryRequest} from '../../redux/reducer/ProductReducer';
import {toggleFavorite} from '../../redux/actions/favoriteActions';
import showErrorAlert from '../../utils/helpers/Toast';
import AppStatusBar from '../../components/global/StatusBar';
import Loader from '../../utils/helpers/Loader';
import {addToCart} from '../../redux/actions/cartActions';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);

  const dispatch = useDispatch();
  const categories =
    useSelector(state => state.CategoryReducer?.categoriesListRes) || [];
  const ProductReducer = useSelector(state => state.ProductReducer);
  const Product =
    useSelector(
      state => state.ProductReducer?.getProductByCategoryRes?.products,
    ) || [];
  const favorites = useSelector(state => state.favoriteReducer.favorites);
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  // console.log(favorites,">>>>>>??>>>>sss")

  useEffect(() => {
    connectionrequest()
      .then(() => {
        dispatch(getCategoriesListRequest());
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleCategoryPress = category => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (categories?.length > 0) {
      setSelectedCategory(categories[0]);
      setLoadingCategories(false);
    }
  }, [categories]);

  useEffect(() => {
    if (selectedCategory) {
      setLoadingProducts(true);
      connectionrequest()
        .then(() => {
          dispatch(getProductByCategoryRequest(selectedCategory.slug));
        })
        .finally(() => {
          setLoadingProducts(false);
        });
    }
  }, [selectedCategory]);

  const handleToggleFavorite = product => {
    console.log(product, 'product');
    const isFavorite = favorites.some(favItem => favItem.id === product.id);
    dispatch(toggleFavorite(product));
    if (isFavorite) {
      showErrorAlert(`${product.title} has been removed from your favorites.`);
    } else {
      showErrorAlert(`${product.title} has been added to your favorites.`);
    }
  };

  const handleAddToCart = product => {
    const isProductInCart = cartItems.some(item => item.id === product.id);

    if (isProductInCart) {
      showErrorAlert(`${product.title} is already in your cart.`);
    } else {
      dispatch(addToCart(product));
      showErrorAlert(`${product.title} has been added to your cart.`);
    }
  };


  const renderProductCard = ({item: product}) => {
    const isFavorite = favorites.some(favItem => favItem.id === product.id);
    return (
      <ProductCard
        product={product}
        isFavorite={isFavorite}
        onToggleFavorite={() => handleToggleFavorite(product)}
        handleAddToCart={() => handleAddToCart(product)}
      />
    );
  };

  if (loadingCategories || loadingProducts) {
    // Show loader while data is being fetched
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* <AppStatusBar /> */}
      {/* Header */}
      <CustomHeader
        title="Logo"
        onMenuPress={() => console.log('Menu pressed')}
        onProfilePress={() => console.log('Profile pressed')}
        menuIcon={Icons.menu}
        icons={Icons.userProfile}
      />
      {/* Search Bar */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.searchContainer}>
          <TextInputBoxSearch />
        </View>
        {/* Categories List */}
        <FlatList
          data={categories}
          renderItem={({item}) => (
            <CategoryItem
              category={item}
              onPress={handleCategoryPress}
              isSelected={item.slug === selectedCategory?.slug}
            />
          )}
          keyExtractor={item => item.slug}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {/* Product Grid */}

        <FlatList
          data={
            ProductReducer?.getProductByCategoryRes?.products?.length > 0
              ? ProductReducer?.getProductByCategoryRes?.products
              : []
          }
          renderItem={renderProductCard}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.productList}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#f1f1f1',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'red',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#fff',
    borderRadius: 8,
    // paddingVertical: 5,
    // marginTop: 10,
  },
  searchIcon: {
    marginRight: 10,
    height: normalize(20),
    width: normalize(20),
  },
  searchInput: {
    flex: 1,
    color: COLORS.textColor,
  },
  productList: {
    marginTop: normalize(10),
    paddingBottom: normalize(50),
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    position: 'relative',
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  cartIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#000',
    borderRadius: 50,
    padding: 5,
  },
  categoriesList: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
  categoryItem: {
    backgroundColor: '#ff6f61',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
});
