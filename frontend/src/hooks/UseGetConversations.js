import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch("http://localhost:8000/api/users",{
                    method:'GET',
                    credentials: 'include',  // Ensure cookies are sent with the request
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                console.log(res);
				const data = await res.json();
                console.log(data)
				if (data.error) {
					throw new Error(data.error || "Failed to fetch conversations");
				}
				setConversations(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getConversations();
	}, []);

	return { loading, conversations };
};
export default useGetConversations;