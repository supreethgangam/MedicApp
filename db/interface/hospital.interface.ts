import { Document } from 'mongoose'

export interface Hospital extends Document{
    Name: string;
    address: string;
    rating: string;
    contact: string;
}

