import { useEffect, useState } from "react";
import { getUsers, getUserPosts, getPostComments } from "../api/fetchData";

const TrendingPosts = () => {
    const [trendingPosts, setTrendingPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const users = await getUsers();
            let postCommentCounts = [];

            for (let userId in users) {
                const posts = await getUserPosts(userId);
                for (let post of posts) {
                    const comments = await getPostComments(post.id);
                    postCommentCounts.push({
                        ...post,
                        commentCount: comments.length,
                    });
                }
            }

            const maxComments = Math.max(
                ...postCommentCounts.map((p) => p.commentCount)
            );
            setTrendingPosts(
                postCommentCounts.filter((p) => p.commentCount === maxComments)
            );
        };

        fetchData();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Trending Posts</h1>
            {trendingPosts.map((post) => (
                <div
                    key={post.id}
                    className="p-4 bg-gray-100 rounded-md mb-2 shadow-md"
                >
                    <h2 className="font-semibold">{post.content}</h2>
                    <p>Comments: {post.commentCount}</p>
                </div>
            ))}
        </div>
    );
};

export default TrendingPosts;
