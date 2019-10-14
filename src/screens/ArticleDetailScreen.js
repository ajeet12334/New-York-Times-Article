import React from 'react';
import {
    StatusBar,
    Text,
    Image,
    StyleSheet,
    View
  } from 'react-native';
import HeaderComponent from '../components/HeaderComponent'
import { Container} from 'native-base';
import {ARTICLE_DETAIL} from '../constants/string'

const ArticleDetailScreen = (props) => {

    const article = props.navigation.getParam('article', '');
    console.log("article",article);

    onBack = () => {
        console.log("onBack")
        props.navigation.goBack()
    };

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Container>
                <HeaderComponent title={ARTICLE_DETAIL} back={onBack}/>
                <Text style={styles.titleStyle}>{article.title}</Text>
                <Text style={styles.subTitleStyle}>{article.abstract}</Text>
                <Image style={styles.imageStyle} source={{ uri: article.media[0]["media-metadata"][2].url }} backgroundColor='black'/>
                <View>
                    <Text style={styles.textStyle}>{article.byline}</Text>
                    <Text style={styles.textStyle}>Published: {article.published_date}</Text>
                    <Text style={styles.textStyle}>Source: {article.source}</Text>
                </View>
            </Container>
        </>
    );
};

const styles = StyleSheet.create({
    imageStyle:{
        width: '100%', 
        height: 300, 
        resizeMode:'cover'},
    titleStyle: {
        marginLeft: 15,
        marginRight:15,
        marginTop:15,
        fontSize: 20
    },
    subTitleStyle: {
        margin: 15,
        fontSize: 16
    },
    textStyle: {
        margin: 5,
        fontSize: 14
    }
});

export default ArticleDetailScreen;
