import { useState } from "react";
import axios from "axios";
import Menu from "../components/Menu";
import { useNavigate } from "react-router-dom";

function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [usersReg, setUsersReg] = useState(false);

  const navigate = useNavigate();

  const loginHandler = async () => {
    setError("");

    try {
      const res = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });

      const token = res.data.token;
      localStorage.setItem("userToken", token);
      setToken(token);

      const userList = await axios.get("https://fakestoreapi.com/users");
      const user = userList.data.find((u) => u.username === username);
      if (user) {
        localStorage.setItem("userId", user.id);
      }

      navigate("/");
    } catch (err) {
      setError(err.response?.data || "Error desconocido");
    }
  }


  return (
    <>
      <Menu setToken={setToken}/>
      <div  className={`${usersReg ? "block" : "hidden" } fixed top-52 left-52 z-50 justify-center items-center w-fit h-fit p-4 backdrop-blur rounded-2xl border border-gray-400 shadow-white shadow-inner`}>
        <ol className="text-white h-full justify-center items-center flex flex-col">
          <p>johnd : m38rmF$</p>
          <p>mor_2314 : 83r5^_</p>
          <p>kevinryan : kev02937@</p>
          <p>donero : ewedon</p>
          <p>derek : jklg*_56</p>
          <p> david_r : 3478*#54</p>
          <p>snyder : f238&@*$</p>
          <p>hopkins : William56$hj</p>
          <p>kate_h : kfejk@*_</p>
          <p>jimmie_k : klein*#%*</p>
        </ol>
      </div>
      <div className="w-full h-screen login-bg flex items-center justify-center bg-[#a6bcd3]">
        {/* <div>
          (presentación proyecto)
        </div> */}
        <div className="w-full max-w-sm mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-slate-600 shadow-2xl sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Login in to our ecommerce
            </h5>
            <div className="flex flex-col text-left w-full">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={username}
                required
                autoComplete="off"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={password}
                required
                autoComplete="off"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="••••••••"
              />
            </div>
            <button
              onClick={loginHandler}
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            {error && <small className="text-red-600">{error}</small>}
          </form>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300hover:underline">
            <button
              className="hover:underline"
              onClick={() => setUsersReg(true)}
            >Show users</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
