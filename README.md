Overview
----------------------
This app is a feature-rich eCommerce mobile application developed using React Native. It provides users with an intuitive shopping experience, allowing them to browse products, view categories, add items to their wishlist and cart, and complete their purchases with a seamless checkout and payment flow.

Features
---------------
Home Screen: 
The home screen showcases a carousel of featured products, allowing users to quickly discover popular items.
Product Search:
 Users can search for products using a dedicated search bar, which filters products based on user input.
Browse by Category:
 Users can select and view products by category.
Product Details View:
 Each product can be viewed in detail, including images, descriptions, price, and availability.
Wishlist: 
Users can add products to their wishlist for future reference.
Add to Cart & Checkout:
 Users can add products to the cart, view the cart, and proceed to checkout.
Payment Success: 
After checkout, users are shown a payment success screen confirming the order.
Splash Screen: 
The app features a splash screen that displays when the app is launched.

Screenshots
-----------------------------------------------------------------------
  ![logo](https://github.com/user-attachments/assets/17bdaec3-ed11-48db-80be-164629e49afe)
![WhatsApp Image 2024-08-24 at 12 28 32 PM](https://github.com/user-attachments/assets/111c5806-b5f8-4355-975e-bf7cc4490e88)
![WhatsApp Image 2024-08-24 at 12 28 32 PM (1)](https://github.com/user-attachments/assets/b2f24fff-c7b8-4b36-aa64-ed62dd35514d)
![WhatsApp Image 2024-08-24 at 12 28 32 PM (2)](https://github.com/user-attachments/assets/65b3fcca-7a26-49bc-9bfc-61daa218f22b)
![WhatsApp Image 2024-08-24 at 12 28 31 PM](https://github.com/user-attachments/assets/55cfbaad-421b-4664-8e2c-d0766bfb57a1)
![WhatsApp Image 2024-08-24 at 12 28 31 PM (1)](https://github.com/user-attachments/assets/d876d83b-ade0-4832-a1fb-ae27461e7300)
![WhatsApp Image 2024-08-24 at 12 28 31 PM (2)](https://github.com/user-attachments/assets/2d0b10d0-4b52-418d-9d72-e24254457a66)


Libraries Used
Here is a list of the libraries used in this project and their purposes:

1. @react-native-community/netinfo
Purpose: Used to detect the network status of the device. It helps manage connectivity issues and alerts the user when the network is down or restored. This is crucial for handling online/offline functionality in the app.
Why it's used: Ensures a seamless experience by tracking network changes and providing appropriate responses or alerts when users lose internet connectivity.
2. @react-navigation/bottom-tabs
Purpose: Provides a bottom tab navigation system, allowing users to easily switch between major sections of the app, such as home, wishlist, cart, and profile.
Why it's used: Enhances the user experience by allowing fast and intuitive navigation across different app sections.
3. @react-navigation/native
Purpose: Core navigation library that enables smooth transitions between screens.
Why it's used: It handles routing and deep linking and is the foundation of navigation in the app.
4. @react-navigation/stack
Purpose: Implements stack-based navigation, allowing users to navigate forward and backward between screens, preserving the history of navigation.
Why it's used: It provides a familiar user experience where users can push and pop screens in a stack (like moving between product details and cart screens).
5. @reduxjs/toolkit
Purpose: Simplifies Redux state management by providing a standardized way to write Redux logic with less boilerplate.
Why it's used: Makes state management easier and more maintainable, especially as the app scales and requires more complex state handling.
6. axios
Purpose: A promise-based HTTP client used to handle API requests for fetching and sending data.
Why it's used: Simplifies the process of making API calls, handling requests, and managing responses and errors in the app.
7. moment
Purpose: Library for parsing, validating, manipulating, and displaying dates and times.
Why it's used: Helps with formatting dates in various parts of the app, like order histories or timestamps on product reviews.
8. react-native-fast-image
Purpose: Optimizes image loading and caching for better performance.
Why it's used: Ensures that product images and other visuals load quickly and efficiently, providing a smoother user experience.
9. react-native-gesture-handler
Purpose: Handles gesture-based interactions like swiping and scrolling.
Why it's used: Improves the handling of touch interactions, making the app more responsive and fluid for users.
10. react-native-modal
Purpose: Provides modals for creating custom pop-ups, such as alerts or confirmation dialogs.
Why it's used: Helps in creating interactive pop-ups for actions like confirming checkout or showing success messages.
11. react-native-safe-area-context
Purpose: Manages safe area boundaries for devices with notches or special screen layouts.
Why it's used: Ensures that the app looks consistent across different devices without cutting off important content in unsafe areas.
12. react-native-screens
Purpose: Improves performance by optimizing screen rendering and memory usage.
Why it's used: Helps reduce memory consumption, resulting in smoother transitions and better performance, especially when switching between multiple screens.
13. react-native-simple-toast
Purpose: Provides simple toast notifications for feedback to users, such as when a product is added to the cart.
Why it's used: Offers a non-intrusive way to give instant feedback to users about their actions.
14. react-native-splash-screen
Purpose: Displays a splash screen while the app is loading.
Why it's used: Improves user experience by showing a branded loading screen during the initial app launch.
15. react-redux
Purpose: Provides bindings to use Redux with React Native components.
Why it's used: Allows for easier management of global state and seamless connection between Redux store and React Native UI components.
16. redux-logger
Purpose: Logs Redux actions to help with debugging.
Why it's used: Provides a clear insight into Redux actions and state changes during development, aiding in debugging.
17. redux-saga
Purpose: Middleware for handling side effects in Redux, such as API requests and background tasks.
Why it's used: Allows for better management of asynchronous actions like fetching products and handling checkout processes.

 



For Clone the project:git clone https://github.com/prasantarout/Dot-KeyApp.git


Note:-This project is made only for learning purpose and not for commercial use.
