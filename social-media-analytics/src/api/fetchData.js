import axios from "axios";

const API_BASE_URL = "http://20.244.56.144/evaluation-service";
const AUTH_TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjAxNDM1LCJpYXQiOjE3NDM2MDExMzUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImE3ODBiY2YwLTI1NDktNGVhNy1hOTg1LTkzYzBhZGYxOWQ5MiIsInN1YiI6IjIyMDUxNTFAa2lpdC5hYy5pbiJ9LCJlbWFpbCI6IjIyMDUxNTFAa2lpdC5hYy5pbiIsIm5hbWUiOiJyaXNoaSBiYW5lcmplZSIsInJvbGxObyI6IjIyMDUxNTEiLCJhY2Nlc3NDb2RlIjoibndwd3JaIiwiY2xpZW50SUQiOiJhNzgwYmNmMC0yNTQ5LTRlYTctYTk4NS05M2MwYWRmMTlkOTIiLCJjbGllbnRTZWNyZXQiOiJzUHFSVUVkZFVoQU5OZmtKIn0.vrEYUrbSBDK1mxt0oGXObo52UZrJO7wrENZE2lAZ50w";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Authorization: AUTH_TOKEN,
        "Content-Type": "application/json",
    },
});

// Fetch users
export const getUsers = async () => {
    try {
        const response = await apiClient.get("/users");
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
        const response = await apiClient.get(`/users/${userId}/posts`);
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
        const response = await apiClient.get(`/posts/${postId}/comments`);
        return response.data.comments;
    } catch (error) {
        console.error(
            "Error fetching comments:",
            error.response?.data || error.message
        );
        return null;
    }
};
