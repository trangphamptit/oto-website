import { apilinks } from './APILinks';
import axios from 'axios';

export async function getAllRanks() {
    try {
        const { data } = await axios.get(apilinks.ranks);
        return data;
    } catch (err) {
        console.log('error', err);
    }
}
