import axiosBase from "../../endPoints/axios";

const Checker = async ({
  e,
  answer,
  formData,
  setError,
  setmessage,
  logout,
  navigate,
}) => {
  e.preventDefault();
  setmessage({
    waiting: "Please wait...",
    success: "",
  });
  try {
    const { data } = await axiosBase?.get("/users/checker", {
      params: {
        userid: formData.userid,
        username: formData.username,
      },
    });
    console.log(data.result);
    if (data.result === false) {
      console.log("Do play with internal storage");
      setError(
        "Do play with sensitive internal storage datas. Redirecting to login..."
      );
      setTimeout(() => {
        logout();
        navigate("/");
        setError("");
      }, 4000);
    } else if (data.result === true) {
      if (answer === true) {
        await axiosBase?.post("/answers/postAnswer", formData);
        console.log("Answer Posted successfully");
        setmessage({
          waiting: "",
          success: "Answer Posted successfully",
        });
        setTimeout(() => {
          navigate("/all-questions");
          setmessage({
            waiting: "",
            success: "",
          });
        }, 3000);
      } else if (answer === false) {
        await axiosBase?.post("/questions/postQuestion", formData);
        console.log("Question Posted successfully");
        setmessage({
          waiting: "",
          success: "Question Posted successfully.",
        });
        setTimeout(() => {
          navigate("/all-questions");
          setmessage({
            waiting: "",
            success: "",
          });
        }, 3000);
      }
    }
  } catch (error) {
    console.log(error);
    setmessage({
      waiting: "",
      success: "",
    });
    setError(error?.response?.data?.msg);
  }
};

export default Checker;
