import axios from 'axios';

export default async function fetcher(url) {
  const res = axios.get(url).then(res => res.data);
  return res;
}
