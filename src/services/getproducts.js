import { apilinks } from './APILinks';
import axios from 'axios';

export async function getAllProducts() {
    try {
        const { data } = await axios.get(apilinks.products);
        return data;
    } catch (err) {
        console.log('error', err);
    }
}
