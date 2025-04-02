import axios from "axios";

const API_BASE_URL = "http://20.244.56.144/evaluation-service";

const BEARER_TOKEN = "Put access_token here"; // I have removed my access token for security reasons

// Fetch users
export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
            },
        });
        return response.data.users;
    } catch (error) {
        console.error(
            "Error fetching users:",
            error.response?.data || error.message
        );
        return null;
    }
};

// Fetch posts for a specific user
export const getUserPosts = async (userId) => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/users/${userId}/posts`,
            {
                headers: {
                    Authorization: `Bearer ${BEARER_TOKEN}`,
                },
            }
        );
        return response.data.posts;
    } catch (error) {
        console.error(
            "Error fetching posts:",
            error.response?.data || error.message
        );
        return null;
    }
};

// Fetch comments for a specific post
export const getPostComments = async (postId) => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/posts/${postId}/comments`,
            {
                headers: {
                    Authorization: `Bearer ${BEARER_TOKEN}`,
                },
            }
        );
        return response.data.comments;
    } catch (error) {
        console.error(
            "Error fetching comments:",
            error.response?.data || error.message
        );
        return null;
    }
};
