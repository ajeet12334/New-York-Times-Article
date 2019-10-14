import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Header, Body, Button, Icon, Title, Grid, Row, Col } from 'native-base';

 const HeaderComponent = (props) => {
    return (
        <View>
            <Header style={style.headerStyle} noShadow={true}>
                <Grid>
                    <Row>
                        <Col size={18} style = {style.contentStyle}>
                        {
                            (props.home) ?
                            <Button transparent>
                                <Icon name='menu' />
                            </Button> :
                            <Button transparent onPress={props.back}>
                                <Icon name='arrow-back' />
                            </Button> 
                        }
                        </Col>
                        <Col size={64}>
                            <Body style={style.contentStyle}>
                                <Title>{props.title}</Title>
                            </Body>
                        </Col>
                        <Col size={18} style = {style.contentStyle}>
                            {props.home &&
                                <Button transparent>
                                    <Icon name='search' />
                                </Button>
                            }
                        </Col>
                    </Row>
                </Grid>
            </Header>
        </View>
    )
}

const style = StyleSheet.create({
    headerStyle: {
        paddingLeft: 0, 
        paddingRight: 0
    },
    contentStyle : {
        justifyContent: 'center'
    }
})

export default HeaderComponent;
