import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen'
import ArticleDetailScreen from '../screens/ArticleDetailScreen'

const ArticleNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  ArticleDetail: {screen: ArticleDetailScreen},
},
{
  headerMode: 'none',
}
);


export default createAppContainer(ArticleNavigator);