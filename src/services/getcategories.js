import axios from 'axios';
import { apilinks } from './APILinks';
export async function getAllCategories() {
    try {
        const { data } = await axios.get(apilinks.categories);
        return data;
    } catch (err) {
        console.log('error', err);
    }
}
