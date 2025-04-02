import { useEffect, useState } from "react";
import { getUsers, getUserPosts } from "../api/fetchData";

const TopUsers = () => {
    const [topUsers, setTopUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const users = await getUsers();
            let postCounts = [];

            for (let userId in users) {
                const posts = await getUserPosts(userId);
                postCounts.push({
                    id: userId,
                    name: users[userId],
                    count: posts.length,
                });
            }

            postCounts.sort((a, b) => b.count - a.count);
            setTopUsers(postCounts.slice(0, 5));
        };

        fetchData();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Top Users</h1>
            {/* Using a map to loop through all users */}
            {topUsers.map((user) => (
                <div
                    key={user.id}
                    className="p-4 bg-gray-100 rounded-md mb-2 shadow-md"
                >
                    <h2 className="font-semibold">{user.name}</h2>
                    <p>Posts: {user.count}</p>
                </div>
            ))}
        </div>
    );
};

export default TopUsers;
