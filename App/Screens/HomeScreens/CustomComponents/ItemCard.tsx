import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { LookUpElement } from '../../../config/Models'
import { Colors } from '../../../config/constants';

interface ItemCardProps {
    item: LookUpElement
}

const ItemCard = (props: ItemCardProps) => {
    const itemImage = props.item.thumbnail ? { uri: props.item.thumbnail.path + '.' + props.item.thumbnail.extension } : require('../../../Assets/Placeholder.png')
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageStyle}>
                <Image resizeMode="cover" source={itemImage} style={styles.imageStyle} />
            </View>
            <View style={styles.titleContainer}>
                <Text numberOfLines={2} style={styles.itemTitle}>{props.item.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        borderRadius:10,
        marginEnd:12
    },
    imageStyle: {
        width: 130,
        height: 200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    titleContainer:{
        backgroundColor:Colors.white,
        height: 40,
        width: 130,
        justifyContent:'center',
        alignItems:'center',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    itemTitle:{
        color:Colors.blackBackground,
        fontSize:12,
        paddingHorizontal:4
    }
})
export default ItemCard