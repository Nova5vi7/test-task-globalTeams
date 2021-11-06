import fetcher from "../helpers/featcher";

const getPosts = async () => {
    const {data} = await fetcher.get('/data.json');
    return data;
}

export default getPosts;