const UserInfo = ({ userId }) => {
  const [userInfo, setUserInfo] = useState(null);

  const getUserInfo = async (userId) => {
    try {
      const response = await axiosBase.get(`/users/${userId}`, {
        ...headerToken,
      });
      setUserInfo(response.data.username);
    } catch (error) {
      console.error("Error fetching user info:", error);
      setUserInfo("Unknown");
    }
  };
  useEffect(() => {
    getUserInfo(userId);
  }, [userId]);

  return <p>User Name: {userInfo}</p>;
};
