import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, TouchableOpacity, FlatList, ActivityIndicator, Image, ScrollView } from 'react-native';

//import custom hook
import { useHttp } from './CustomHooks/useHttp';
//import networking methods
import { getData } from '../../config/Networking';
//import Utils
import LoadingIndicator from '../../Utils/LoadingHandler';
import { Colors, CharactersFilters } from '../../config/constants';
import { DataLists } from '../../config/constants';
//import custom components
import SwiperComponent from './CustomComponents/SwiperComponent';
import HorizontalScroll from './CustomComponents/HorizontalScroll';

const HomeScreen = (props) => {
    const [isLoading, charactersData] = useHttp(()=>getData(DataLists.CHARACTERS, {orderBy:'modified'}), []);
    const [isComicsLoading, comicsData] = useHttp(()=>getData(DataLists.COMICS, {orderBy:'modified'}), []);
    const [isSeriesLoading, seriesData] = useHttp(()=>getData(DataLists.SERIES, {orderBy:'modified'}), []);
    const [isEventsLoading, eventsData] = useHttp(()=>getData(DataLists.EVENTS, {orderBy:'modified'}), []);
    const [isStoriesLoading, storiesData] = useHttp(()=>getData(DataLists.STORIES, {orderBy:'modified'}), []);

    let loadedCharacters = charactersData? charactersData.data.results : [];
    let loadedComics = comicsData? comicsData.data.results : [];
    let loadedSeries = seriesData? seriesData.data.results : [];
    let loadedEvents = eventsData? eventsData.data.results : [];
    let loadedStories = storiesData? storiesData.data.results :[];
    
    const viewAllButton = (title, target) => {
        return (
            <TouchableOpacity style={{ marginEnd: 12, marginTop: 12, alignSelf: 'flex-end' }} onPress={() => props.navigation.navigate('DataList', { target })} >
                <Text style={{ color: Colors.red, fontSize: 12, fontWeight: '600', shadowColor: Colors.white, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.7 }}>{title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.mainContainer}>
            {isLoading && <LoadingIndicator isLoading={isLoading} />}
            <View style={styles.TopBar}>
                <Text style={styles.TopBarTitle}>MARVEL WORLD</Text>
            </View>
            <ScrollView style={{ marginBottom: 20 }}>
                {loadedCharacters.length > 0 && <View style={styles.charactersContainer}>
                    <SwiperComponent data={loadedCharacters} onItemPressed={(character => props.navigation.navigate('CharacterScreen', { character }))} />
                    {viewAllButton('View All Characters', DataLists.CHARACTERS)}
                </View>}
                {loadedComics.length > 0 && <HorizontalScroll isLoading={isComicsLoading} data={loadedComics} viewAllTitle='View All Comics' viewAllTarget={DataLists.COMICS} sectionTitle='Comics' />}
                {loadedSeries.length > 0 && <HorizontalScroll isLoading={isSeriesLoading} data={loadedSeries} viewAllTitle='View All Series' viewAllTarget={DataLists.SERIES} sectionTitle='Series' />}
                {loadedEvents.length > 0 && <HorizontalScroll isLoading={isEventsLoading} data={loadedEvents} viewAllTitle='View All Events' viewAllTarget={DataLists.EVENTS} sectionTitle='Events' />}
                {loadedStories.length > 0 && <HorizontalScroll isLoading={isStoriesLoading} data={loadedStories} viewAllTitle='View All Stories' viewAllTarget={DataLists.STORIES} sectionTitle='Stories' />}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'black',
        flex: 1
    },
    TopBar: {
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        width: Dimensions.get('window').width,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        borderBottomWidth: 1,
        borderBottomColor: 'red'
    },
    TopBarTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: '600'
    },
    charactersContainer: {
        height: 280,
        alignItems: 'flex-end'
    }
});

HomeScreen.navigationOptions = {
    title: 'Home Screeeeennnnn',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    headerShown: false
};

export default HomeScreen
