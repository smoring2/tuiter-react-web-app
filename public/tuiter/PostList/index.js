import posts from './posts.js';
import PostItem from "./PostItem.js";
const PostList = () => {
    return(`
    <ur class='list-group'>
    ${posts.map(post => {
        return (PostItem(post))}).join('')}
    </ur>
    `);
}
export default PostList;