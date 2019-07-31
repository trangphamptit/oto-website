import { apilinks } from './APILinks';
import axios from 'axios';

export async function getAllBrands() {
    try {
        const { data } = await axios.get(apilinks.brands);
        return data;
    } catch (err) {
        console.log('error', err);
    }
}
