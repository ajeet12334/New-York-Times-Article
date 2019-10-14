import React, {useState, useEffect, useReducer} from 'react';
import {
  StatusBar,
  FlatList,
  Text,
  ActivityIndicator
} from 'react-native';

import {API_URL, APP_TITLE} from '../constants/string'
import HeaderComponent from '../components/HeaderComponent'
import ListItems from '../components/ListItems'
import { Container} from 'native-base';
import articleReducers from '../store/reducers/articleReducers'


const HomeScreen = (props) => {
  //console.log(" API_URL ", API_URL)
 
  const useDataApi = (initialUrl, initialData) => {
    const [url, setUrl] = useState(initialUrl);

    const [state, dispatch] = useReducer(articleReducers, {
      isLoading: false,
      hasError: false,
      articles: initialData,
    });

    useEffect(() => {
      const fetchData = async () => {
        dispatch({ type: 'FETCH_INIT' });
        const res = await fetch(url);
        res
          .json()
          .then(res => dispatch({ type: 'FETCH_SUCCESS', payload: res.results }))
          .catch(err => dispatch({ type: 'FETCH_FAILURE' }));
      };
      fetchData();
    }, [url]);
    return [state, setUrl];
  };

  navigateToDetail = (item) => {
    console.log("navigateToDetail")
    props.navigation.navigate('ArticleDetail',{'article':item})
  };

  const [{ articles, isLoading, isError }] = useDataApi(API_URL,{ articles: [] },);


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <HeaderComponent home title={APP_TITLE}/>

        {isError && <Text> {JSON.stringify(isError)} </Text>}

        { 
          isLoading ?
            <ActivityIndicator size="large"/> 
            :
            <FlatList
              data={articles}
              renderItem={(item) => <ListItems singleItem={item} onNext={navigateToDetail}/>}
              keyExtractor={item => JSON.stringify(item.id)}
            />
        
        }
      </Container>
    </>
  );
};

export default HomeScreen;
