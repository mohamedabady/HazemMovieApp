export const SplashText = 'Data Provided by Marvel © 2020 MARVEL';
export const AppDeveloper = 'Developed by MOHAMED ABADY December 2020';

export const BaseUrl = 'https://gateway.marvel.com:443/v1/public';

export const DefaultParamsObject = {
    apikey: '545460975675a13b3c850bbb8086a4e9',
    hash: 'e8c806c9916c8a29ff049a7424b7da97',
    ts: '1578314357'
}

export const Colors = {
    red: '#FF0000',
    redOpacity: 'rgba(255,0,0,0.5)',
    white: 'white',
    whiteOpacity: 'rgba(255,255,255,0.5)',
    blackBackground: 'black',
}

export enum DataLists {
    SERIES = 'series',
    EVENTS = 'events',
    STORIES = 'stories',
    CHARACTERS = 'characters',
    COMICS = 'comics',
}

export interface CharactersFilters {
    name?: string;
    nameStartsWith?: string;
    orderBy?: 'name' | 'modified' | '-name' | '-modified';
    limit?: number;
    offset?: number;
}