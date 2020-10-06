import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

//Import Components
import LinearGradient from 'react-native-linear-gradient';

//Import Models
import { CharacterLookUp } from '../../../config/Models'

interface CharacterCardProps {
    onItemPressed: () => void;
    character: CharacterLookUp;
}

const CharacterCard = (props: CharacterCardProps) => {
    const imageUri = props.character.thumbnail ? `${props.character.thumbnail.path}.${props.character.thumbnail.extension}` : null;
    return (
        <View>
            <Image source={{ uri: imageUri }} style={styles.imageBackdrop} />
            <LinearGradient colors={['rgba(0, 0, 0, 0.5)', 'rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.8)']} style={styles.linearGradient} />
            <View style={styles.cardContainer}>
                <Image source={{ uri: imageUri }} style={styles.cardImage} />
                <View style={styles.cardDetails}>
                    <Text style={styles.cardTitle} numberOfLines={2}>
                        {props.character.name}
                    </Text>
                    <View style={styles.cardNumbers}>
                        <View style={styles.cardStar}>
                            <Image source={require('../../../Assets/comicIcon.png')} style={{width:20, height:20, tintColor:'red', paddingEnd: 12}}/>
                            <Text style={styles.cardStarRatings}>{props.character.comics.available ? props.character.comics.available : 0} Comics</Text>
                        </View>
                    </View>
                    <Text style={styles.cardDescription} numberOfLines={4}>
                        {props.character.description ? props.character.description : 'No description available ...'}
                    </Text>
                    <TouchableOpacity activeOpacity={0.9} onPress={props.onItemPressed}>
                        <View style={styles.viewButton}>
                            <Text style={styles.viewButtonText}>View Details</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    linearGradient: {
        top: 0,
        left: 0,
        right: 0,
        height: 248,
        position: 'absolute'
    },
    imageBackdrop: {
        // flex: 1,
        height: 248,
        backgroundColor: 'black'
    },
    cardContainer: {
        position: 'absolute',
        top: 32,
        right: 16,
        left: 16,
        flexDirection: 'row'
    },
    cardImage: {
        height: 184,
        width: 135,
        borderRadius: 3
    },
    cardDetails: {
        paddingLeft: 10,
        flex: 1
    },
    cardTitle: {
        color: 'white',
        fontSize: 19,
        fontWeight: '500',
        paddingTop: 10
    },
    cardGenre: {
        flexDirection: 'row'
    },
    cardGenreItem: {
        fontSize: 11,
        marginRight: 5,
        color: 'white'
    },
    cardDescription: {
        color: '#f7f7f7',
        fontSize: 13,
        marginTop: 5
    },
    cardNumbers: {
        flexDirection: 'row',
        marginTop: 5
    },
    cardStar: {
        flexDirection: 'row'
    },
    cardStarRatings: {
        marginLeft: 5,
        fontSize: 12,
        color: 'white'
    },
    cardRunningHours: {
        marginLeft: 5,
        fontSize: 12
    },
    viewButton: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        //paddingVertical:4,
        borderRadius: 3,
        backgroundColor: '#EA0000',
        width: 100,
        height: 30,
        marginTop: 10
    },
    viewButtonText: {
        color: 'white'
    }
})

export default CharacterCard;