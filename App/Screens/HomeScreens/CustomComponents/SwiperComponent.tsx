import React from 'react'

//Models Import
import { CharacterLookUp } from '../../../config/Models'

//Component Import
import Swiper from 'react-native-swiper';
import CharacterCard from './CharacterCard'

interface SwiperProps {
    data: CharacterLookUp[];
    onItemPressed : (character : CharacterLookUp ) => void
}

const SwiperComponent = (props: SwiperProps) => {
    return (
        <Swiper
            autoplay
            autoplayTimeout={4}
            showsPagination={false}
            height={248}>
            {props.data.map(character=> (
                <CharacterCard key={character.id} character={character} onItemPressed={()=>props.onItemPressed(character)}/>
            ))}
        </Swiper>
    )
}
export default SwiperComponent