import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";

const App = () => {
    return (
        <Router>
            <div className="p-6">
                <nav className="mb-4 flex gap-4">
                    <Link to="/" className="text-blue-500">
                        Top Users
                    </Link>
                    <Link to="/trending" className="text-blue-500">
                        Trending Posts
                    </Link>
                    <Link to="/feed" className="text-blue-500">
                        Feed
                    </Link>
                </nav>

                <Routes>
                    <Route path="/" element={<TopUsers />} />
                    <Route path="/trending" element={<TrendingPosts />} />
                    <Route path="/feed" element={<Feed />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
