import { useState } from "react";
import "./App.css";
import { Blogs } from "./component/Blogs";
import { Bookmark } from "./component/Bookmark";
import { Header } from "./component/Header";

function App() {
	const [addBookmarks, setAddBookmarks] = useState([]);
	const [spendTime, setSpendTime] = useState(0);

	const handleBookmarks = (blog) => {
		const newBookmarks = [...addBookmarks, blog];
		setAddBookmarks(newBookmarks);
	};

	const handleSpendTime = (id, readTime) => {
		const newSpendTime = spendTime + readTime;
		setSpendTime(newSpendTime);

		const remainingBookmarks = addBookmarks.filter(
			(bookmark) => bookmark.id !== id
		);
		setAddBookmarks(remainingBookmarks);
	};

	return (
		<>
			<div className="bg-cyan-100">
				<Header />
			</div>
			<div className="max-w-screen-xl mx-auto">
				<div className="flex gap-10 justify-between py-14">
					<div className="w-4/6">
						<Blogs
							handleBookmarks={handleBookmarks}
							handleSpendTime={handleSpendTime}
						/>
					</div>
					<div className="w-2/6">
						<Bookmark addBookmarks={addBookmarks} spendTime={spendTime} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
