import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

//import custom hook
import { useHttp } from './CustomHooks/useHttp';

//import Utils
import LoadingIndicator from '../../Utils/LoadingHandler';
import { Colors } from '../../config/constants';
import { DataLists } from '../../config/constants';

//import networking methods
import { getData } from '../../config/Networking';

const DataList = (props) => {
    let dataType = props.navigation.getParam('target');
    let [offset, setOffset] = useState(0);
    let [data, setData] = useState();
    let [isLoading, retrievedData] = useHttp(() => getData(dataType, { orderBy: 'modified', offset: offset }), [offset]);

    //retrievedData && offset===0 && setData([...retrievedData.data.results]);

    useEffect(() => {
        if (offset > 0 && data && data.length > 0) {
            let [newLoading, newData] = useHttp(() => getData(dataType, { orderBy: 'modified', offset: offset }), [offset]);
            isLoading = newLoading;
            if(!newLoading){
                setData([...data, ...newData.data.results]);
            }
        }
        else{
            setData([...retrievedData.data.results]);

        }
    });

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            {isLoading && <LoadingIndicator isLoading={isLoading} />}
            {!isLoading && retrievedData && <FlatList
                data={offset === 0 ? retrievedData.data.results : (data.length > 0 && data)}
                renderItem={({ item, index }) => <Text style={{ color: 'white', marginVertical: 8, paddingVertical: 50, alignSelf: 'center', borderWidth: 0.5, borderColor: 'red', paddingHorizontal: 50 }}>id : {item.id.toString()}, index: {index}</Text>}
                onEndReached={() => setOffset(offset + 1)} />}
        </View>
    )
}

DataList.navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('target').toUpperCase(),
    }
}

export default DataList
