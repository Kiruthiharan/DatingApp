import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    city: string;
    country: string;
    photoUrl: string;
    gender: string;
    age: number;
    created: Date;
    lastActive: Date;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];

}
