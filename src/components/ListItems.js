import React from 'react'
import {TouchableWithoutFeedback} from 'react-native'
import { ListItem, Left, Body, Right, Thumbnail, Text, Button, Icon } from 'native-base';


const ListItems = (props) => {
    const item = props.singleItem.item;
    //console.log("props",item);
    let imageURL = item.media[0]["media-metadata"][0].url
    //console.log("Image ",imageURL)
    return(
        <TouchableWithoutFeedback activeOpacity={0.7} onPress={() => props.onNext(item)}>
            <ListItem avatar>
                <Left style={{alignSelf:'center', marginBottom:10}}>
                    <Thumbnail source={{ uri: imageURL }} backgroundColor='black'/>
                </Left>
                <Body>
                    <Text numberOfLines={2}>{item.title}</Text>
                    <Text note style={{marginTop:5}}>{item.byline}</Text>
                    <Text note style={{textAlign:'right',}}><Icon name='calendar' style={{fontSize:16, color:'gray'}} /> {props.singleItem.item.published_date}</Text>
                </Body>
                <Right style={{justifyContent:'center'}}>
                    <Button transparent>
                        <Icon name='ios-arrow-forward'/>
                    </Button>
                </Right>
            </ListItem>
    </TouchableWithoutFeedback>
    );
}

export default ListItems;