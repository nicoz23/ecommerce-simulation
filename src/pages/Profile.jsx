import Menu from "../components/Menu";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import UserPic from "/user.webp";
import { useState } from "react";
import Footer from "../components/Footer";
import { IoIosLock, IoIosUnlock } from "react-icons/io";

function Profile() {
  const id = localStorage.getItem("userId");
  const { data, loading } = useFetch(`https://fakestoreapi.com/users/${id}`);
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <Menu />
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="w-full mx-auto text-center text-2xl font-bold uppercase text-[#333] my-7">
            User information
          </h1>
          {/* mobile design */}
          <div className="sm:hidden flex flex-col justify-start items-center mx-auto w-4/5 bg-white rounded-2xl border border-gray-300 shadow-lg p-5 gap-2">
            <img
              src={UserPic}
              alt="profile picture"
              className="
              min-h-60 h-60 w-60 min-w-60 drop-shadow-2xl
              "
            />
            <div className="flex flex-col mx-auto">
              <div className="flex flex-col w-full flex-wrap items-center">
                <span className="text-3xl font-semibold uppercase">
                  {data.name.firstname} {data.name.lastname}
                </span>
                <span className="text-xl font-medium ">{data.email}</span>
              </div>
              <div className="flex flex-col text-start w-full">
                <span className="text-base font-medium">username:</span>
                <span className="text-lg font-semibold">{data.username}</span>
              </div>
              <div className="w-1/2 h-auto flex flex-col items-center justify-center">
                <div className="flex flex-col text-start w-full">
                  <span className="text-base font-medium">password:</span>
                  <div>
                    <span className="flex flex-row flex-nowrap justify-between min-w-full text-lg font-semibold ">
                      {showPass
                        ? data.password
                        : "•".repeat(data.password.length)}
                      <button onClick={() => setShowPass(!showPass)}>
                        {showPass ? <IoIosUnlock /> : <IoIosLock />}
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-start w-full">
                <span className="text-base font-medium">phone:</span>
                <span className="text-lg font-semibold">{data.phone}</span>
              </div>
              <div className="flex flex-col text-start w-full">
                <span className="text-base font-medium">address:</span>
                <span className="text-lg font-semibold uppercase">
                  {data.address.city}, {data.address.street}{" "}
                  {data.address.number}, {data.address.zipcode}
                </span>
              </div>
            </div>
          </div>

          {/* desktop design */}
          <div className="sm:block hidden w-4/5 lg:w-3/5 xl:w-2/5 h-auto mx-auto mt-12 border border-gray-300 shadow-lg bg-white rounded-2xl p-10 gap-4">
            <section className="flex flex-row">
              <img
                src={UserPic}
                alt="profile picture"
                className="
              min-h-60 h-60 w-60 min-w-60 drop-shadow-2xl
              "
              />
              <div className="flex flex-col mx-auto mt-12">
                <span className="text-3xl font-semibold uppercase">
                  {data.name.firstname} {data.name.lastname}
                </span>
                <span className="text-xl font-medium ">{data.email}</span>
              </div>
            </section>
            <section className="w-4/5 mx-auto h-auto flex justify-center items-start mt-8">
              <div className="w-1/2 h-auto flex flex-col items-center justify-center">
                <div className="flex flex-col text-start w-full mb-4">
                  <span className="text-base font-medium">username:</span>
                  <span className="text-lg font-semibold">{data.username}</span>
                </div>
                <div className="flex flex-col text-start w-full">
                  <span className="text-base font-medium">address:</span>
                  <span className="text-lg font-semibold uppercase">
                    {data.address.city}, {data.address.street}{" "}
                    {data.address.number}, {data.address.zipcode}
                  </span>
                </div>
              </div>
              <div className="w-1/2 h-auto flex flex-col items-center justify-center">
                <div className="flex flex-col text-start w-full mb-4">
                  <span className="text-base font-medium">password:</span>
                  <div>
                    <span className="flex flex-row flex-nowrap justify-between min-w-full text-lg font-semibold ">
                      {showPass
                        ? data.password
                        : "•".repeat(data.password.length)}
                      <button onClick={() => setShowPass(!showPass)}>
                        {showPass ? <IoIosUnlock /> : <IoIosLock />}
                      </button>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col text-start w-full">
                  <span className="text-base font-medium">phone:</span>
                  <span className="text-lg font-semibold">{data.phone}</span>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default Profile;
