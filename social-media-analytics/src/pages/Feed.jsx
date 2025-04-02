import { useEffect, useState } from "react";
import { getUsers, getUserPosts } from "../api/fetchData";

const Feed = () => {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const users = await getUsers();
            let allPosts = [];

            for (let userId in users) {
                const posts = await getUserPosts(userId);
                allPosts.push(...posts);
            }

            allPosts.sort((a, b) => b.id - a.id);
            setFeed(allPosts);
        };

        fetchData();
        const interval = setInterval(fetchData, 5000); // Refresh every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Live Feed</h1>
            {feed.map((post) => (
                <div
                    key={post.id}
                    className="p-4 bg-gray-100 rounded-md mb-2 shadow-md"
                >
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Feed;
