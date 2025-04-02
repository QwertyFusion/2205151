import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";

const App = () => {
    return (
        <Router>
            <div className="p-6 pb-2 flex justify-between bg-blue-400">
                {/* A simple navigation link */}
                <h1 className="text-white text-3xl font-bold">
                    Social Media Analytics
                </h1>
                <nav className="mb-4 flex justify-end gap-4 mr-10">
                    <Link
                        to="/"
                        className="bg-white hover:bg-blue-200 text-md p-2 rounded-md shadow-md"
                    >
                        Top Users
                    </Link>
                    <Link
                        to="/trending"
                        className="bg-white hover:bg-blue-200 text-md p-2 rounded-md shadow-md"
                    >
                        Trending Posts
                    </Link>
                    <Link
                        to="/feed"
                        className="bg-white hover:bg-blue-200 text-md p-2 rounded-md shadow-md"
                    >
                        Feed
                    </Link>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<TopUsers />} />
                <Route path="/trending" element={<TrendingPosts />} />
                <Route path="/feed" element={<Feed />} />
            </Routes>
        </Router>
    );
};

export default App;
