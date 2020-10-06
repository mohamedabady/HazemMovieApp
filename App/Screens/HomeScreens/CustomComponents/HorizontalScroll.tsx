import React from 'react'
import { View, Text, ActivityIndicator, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation'

//Import Models
import { LookUpElement } from '../../../config/Models';
//Import Utils
import { Colors, DataLists } from '../../../config/constants';
//Import Components
import ItemCard from './ItemCard';

interface IProps {
    data: LookUpElement[];
    viewAllTitle: string;
    viewAllTarget: DataLists;
    isLoading: boolean;
    sectionTitle: string;
}

const HorizontalScroll = (props: IProps) => {
    const viewAllButton = (title, target) => {
        return (
            <TouchableOpacity style={{ marginEnd: 12, marginTop: 12, alignSelf: 'flex-end' }} onPress={() => props.navigation.navigate('DataList', { target })} >
                <Text style={{ color: Colors.red, fontSize: 12, fontWeight: '600', shadowColor: Colors.white, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.7 }}>{title}</Text>
            </TouchableOpacity>
        )
    }

    if (props.isLoading) {
        return (
            <ActivityIndicator animating={props.isLoading} color={Colors.red} size='large' style={{ marginVertical: 12, alignSelf: 'center', marginHorizontal: (Dimensions.get('window').width / 2) - 20 }} />
        )
    }
    return (
        <View style={{ marginTop: 18, marginStart: 12 }}>
            <View style={{ flexDirection: 'row', marginStart: 12, marginBottom: 12 }}>
                <Image source={require('../../../Assets/Skiparrow.png')} style={{ width: 20, height: 20, tintColor: Colors.red, marginEnd: 12 }} />
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>{props.sectionTitle}</Text>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={props.data}
                renderItem={({ item, index }) => <ItemCard item={item} />}
                keyExtractor={item => item.id.toString()} />
            {viewAllButton(props.viewAllTitle, props.viewAllTarget)}
        </View>
    )
}

export default withNavigation(HorizontalScroll);
