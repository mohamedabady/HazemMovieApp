export interface Thumbnail {
    path: string;
    extension: string;
}

export interface LookUpElement {
    id: number;
    title: string;
    thumbnail: Thumbnail;
}

export interface CharacterLookUp {
    id: number;
    name: string;
    description: string;
    thumbnail: Thumbnail;
    comics: any[];
}