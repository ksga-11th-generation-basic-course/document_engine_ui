import React, { useEffect, useState } from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import logo from "../assets/landing_image/logo.svg";
import profile from "../assets/dashboard_image/profile.png";
import avatar from "../assets/dashboard_image/avatar.svg";
import trush from "../assets/dashboard_image/trush.svg";
import google from "../assets/dashboard_image/google.svg";
import advance from "../assets/dashboard_image/advance.png";
import { SignOutModal } from "./SignOutModal.jsx";
import { DeleteProfileModal } from "./DeleteProfileModal";
import { CloseAccountModal } from "./CloseAccountModal";
import { ResetPasswordModal } from "./ResetPasswordModal";
import { editProfileInformation } from "../redux/service/userService/userService";
import { editProfileInformationSuccess } from "../redux/slice/userSlice/userSlice";
import { useDispatch } from "react-redux";
import { storage } from "../firebase/firebase.utils";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { Button } from "rsuite";
import { Avatar } from "@material-tailwind/react";
import dropdown from "../assets/images/popUp/dropdown.svg";
import reverse_dropdown from "../assets/images/popUp/reverse_dropdown.svg";

export const AccountSettingModal = ({ openSetting, setOpenSetting, user }) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };

  const dispatch = useDispatch();

  const [openDeleteProfile, setOpenDeleteProfile] = useState(false);
  const [openSignOut, setOpenSignOut] = useState(false);

  const [closeAccount, setCloseAccount] = useState(false);

  const [resetPassword, setResetPassword] = useState(false);

  const [username, setUsername] = useState(user && user.userName);

  const [profileImage, setProfileImage] = useState();
  const [openProfileSetting, setOpenProfileSetting] = useState(false);
  const [openAdvanceSetting, setOpenAdvanceSetting] = useState(false);

  const [url, setUrl] = useState(user && user.profileImage);

  useEffect(() => {
    if (!profileImage) return;

    const imageRef = ref(
      storage,
      `images/profile/${uuidv4()}_${profileImage.name}`
    );

    uploadBytes(imageRef, profileImage).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setUrl(url);
      });
    });
  }, [profileImage]);

  const handleEditProfileInformation = async () => {
    try {
      const user = await editProfileInformation(username, url);
      dispatch(editProfileInformationSuccess(user));
      setOpenSetting(!openSetting);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <Modal
        open={openSetting}
        onClickBackdrop={() => {
          setOpenSetting(!openSetting);
          document.getElementById("changename").reset();
        }}
      >
        <div className="bg-white rounded-lg grid grid-cols-12 lg:w-[680px] lg:h-[950px] md:w-[350px] md:h-[630px] md:-mt-20 z-50">
          {/* Sidebar */}
          <div className="col-span-3  rounded-lg space-y-5 lg:hidden">
            <div className="flex justify-center p-5 rounded-tl-lg shadow-md">
              <img src={logo} />
            </div>
            <div className="w-full px-3">
              <button className="flex items-center gap-x-3 bg-[#F6F6F6] rounded-lg w-full py-3 px-3">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.75 15C16.75 17.0711 15.0711 18.75 13 18.75C10.9289 18.75 9.25 17.0711 9.25 15C9.25 12.9289 10.9289 11.25 13 11.25C15.0711 11.25 16.75 12.9289 16.75 15Z"
                    stroke="#1E9CEF"
                    stroke-width="2"
                  />
                  <path
                    d="M9.80414 4.36597C10.7687 1.04468 15.2313 1.04468 16.1959 4.36597C16.7093 6.13384 18.4329 7.18232 20.1427 6.76688C23.355 5.9864 25.5862 10.0583 23.3386 12.5991C22.1422 13.9515 22.1422 16.0485 23.3386 17.4009C25.5862 19.9417 23.355 24.0136 20.1427 23.2331C18.4329 22.8177 16.7093 23.8662 16.1959 25.634C15.2313 28.9553 10.7687 28.9553 9.80414 25.634C9.2907 23.8662 7.56709 22.8177 5.85727 23.2331C2.64503 24.0136 0.413766 19.9417 2.66141 17.4009C3.85779 16.0485 3.85779 13.9515 2.66141 12.5991C0.413766 10.0583 2.64503 5.9864 5.85727 6.76688C7.56709 7.18232 9.2907 6.13384 9.80414 4.36597Z"
                    stroke="#1E9CEF"
                    stroke-width="2"
                  />
                </svg>
                <p className="font-semibold text-18px">Setting</p>
              </button>
            </div>
          </div>

          <div className="col-span-9 p-3 shadow-xl  bg-white rounded-r-lg lg:col-span-12">
            {/* Close button */}
            <div className="flex w-full justify-end mt-3">
              <button
                type="button"
                onClick={() => {
                  setOpenSetting(!openSetting);
                  document.getElementById("changename").reset();
                }}
              >
                <img src={close} className="w-8 md:w-6" />
              </button>
            </div>

            <div className="px-16 space-y-5 lg:px-6">
              <div className="text-accent">
                <h1 className="font-bold text-34px lg:text-28px md:text-22px">
                  Account Setting
                </h1>
                <p className="text-18px md:text-12px md:-mt-3">
                  Manage your profile, preferences, and login settings
                </p>
              </div>

              {/* Profile Setting*/}
              <div>
                {/* For laptop and tablets */}
                {/* Header */}
                <div className="md:hidden flex justify-between border-l-[1px] border-r-[1px] border-t-[1px] px-6 py-3 lg:py-0 rounded-t-lg">
                  <div className="flex justify-center items-center gap-x-3 lg:py-3">
                    <img src={profile} className="md:w-6" />
                    <p className="font-bold text-24px text-black md:text-16px">
                      Your Profile
                    </p>
                  </div>
                  <button
                    type="button"
                    className="md:hidden font-semibold text-white text-18px px-7 py-1.5 lg:m-3 lg:mr-0 bg-primary rounded-lg md:text-12px md:px-5 md:py-1 "
                    onClick={handleEditProfileInformation}
                  >
                    Save
                  </button>
                </div>
                {/* Content*/}
                <div className="md:hidden px-6 border-[1px] py-4 space-y-4 rounded-b-lg lg:space-y-7 md:px-4 md:space-y-5">
                  {/* Change account name */}
                  <div className="w-full space-y-2">
                    <h3 className="font-bold text-20px text-black md:text-14px">
                      Account Name
                    </h3>
                    <input
                      type="text"
                      value={username}
                      className="w-80 py-3 rounded-lg border-gray-300 focus:ring-primary focus:border-primary text-18px font-semibold lg:w-60 md:text-14px md:py-1.5"
                      placeholder={user && user.userName}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  {/* Change password */}
                  <div className="grid grid-cols-12 md:gap-y-2">
                    <div className="col-span-9 lg:col-span-8 md:col-span-12">
                      <h3 className="font-bold text-20px text-black md:text-14px">
                        Change new password
                      </h3>
                      <p className="md:hidden">
                        You can reset password to make your password more
                        security.
                      </p>
                    </div>
                    <div className="col-span-3 ml-3 lg:col-span-4 lg:ml-9 md:ml-0 md:col-span-0 ">
                      <button
                        className="font-semibold text-18px border-[1px] rounded-lg px-3 py-2 lg:text-16px md:text-14px md:w-60"
                        onClick={() => setResetPassword(!resetPassword)}
                      >
                        Change Password
                      </button>
                    </div>
                  </div>

                  {/* Change profile */}
                  <div className="grid grid-cols-12 md:gap-y-2">
                    <div className="col-span-7 lg:col-span-7 md:col-span-12">
                      <h3 className="font-bold text-20px text-black md:text-14px">
                        Profile Picture
                      </h3>
                      <p className="md:hidden">
                        Displayed when collaborating with others.
                      </p>
                    </div>
                    <div className="col-span-5 flex justify-center items-center gap-x-3 ml-10 lg:col-span-5 lg:ml-0 md:-ml-1 md:w-52">
                      <label className="cursor-pointer">
                        <input
                          className="text-sm w-36 hidden"
                          type="file"
                          multiple
                          onChange={(e) => {
                            setProfileImage(e.target.files[0]);
                          }}
                        />
                        <div>
                          {user && user.profileImage === null ? (
                            <Avatar
                              variant="circular"
                              alt="candice wu"
                              className="cursor-pointer  w-11 h-11 rounded-full lg:w-8 lg:h-8 md:w-7 md:h-7"
                              src="https://firebasestorage.googleapis.com/v0/b/docengine-7e623.appspot.com/o/images%2Fprofile%2Fcb6df344-7dd9-4323-8961-cbd55a606e77_user.png?alt=media&token=6eb13cc7-734c-4292-bc74-2ea2b4e6b5c2"  
                              />
                          ) : (
                            <Avatar
                              variant="circular"
                              alt="candice wu"
                              className="cursor-pointer w-11 h-11  rounded-full lg:w-8 lg:h-8 md:w-7 md:h-7"
                              src={user && user.profileImage}
                            />
                          )}
                        </div>
                      </label>

                      <label>
                        <input
                          className="text-sm cursor-pointer w-36 hidden md:w-full"
                          type="file"
                          multiple
                          onChange={(e) => {
                            setProfileImage(e.target.files[0]);
                          }}
                        />
                        <p className="font-semibold text-18px border-[1px] rounded-lg px-3 py-1 cursor-pointer lg:text-16px md:text-14px">
                          Upload Photo
                        </p>
                      </label>

                      <div>
                        <button
                          type="button"
                          className="px-3 py-2 border-[1px] rounded-lg  md:px-2.5"
                          onClick={() =>
                            setOpenDeleteProfile(!openDeleteProfile)
                          }
                        >
                          <img src={trush} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Signin method */}
                  <div className="grid grid-cols-12">
                    <div className="col-span-7 lg:col-span-6 md:col-span-12">
                      <h3 className="font-bold text-20px text-black md:text-14px">
                        You are connected to Google
                      </h3>
                      <p className="md:hidden">
                        You can sign in to DocEngine using your Google account.
                      </p>
                    </div>
                    <div className="col-span-5 lg:col-span-6">
                      <span className="flex justify-center items-center gap-x-3 bg-[#F8F8F8] py-2.5 rounded-lg md:w-60 md:py-1.5 mt-2">
                        <img src={google} className="w-5 md:w-4" />
                        <p className="text-18px md:text-12px">
                          {user && user.email}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>

                {/* For mobile*/}
                {/* Header */}
                {openProfileSetting ? (
                  <div
                    className={
                      openProfileSetting
                        ? "hidden md:flex md:justify-between md:border-r-[1px] md:border-t-[1px] md:border-l-[1px] md:py-3 md:rounded-t-lg md:px-4"
                        : "hidden md:flex md:justify-between md:border-[1px] md:py-3 md:rounded-lg md:px-4"
                    }
                  >
                    <div className="flex justify-center items-center gap-x-3">
                      <img src={profile} className="md:w-6" />
                      <p className="font-bold text-24px text-black md:text-16px">
                        Your Profile
                      </p>
                      <span className="hidden md:inline-block md:-mt-1">
                        <button
                          type="button"
                          className="font-semibold text-white text-18px px-7 py-1.5 bg-primary rounded-lg md:text-12px md:px-5 md:py-1 md:mt-1 md:ml-12 "
                          onClick={handleEditProfileInformation}
                        >
                          Save
                        </button>
                      </span>
                    </div>
                  </div>
                ) : (
                  <button
                    className={
                      openProfileSetting
                        ? "hidden md:flex md:justify-between md:border-r-[1px] md:border-t-[1px] md:border-l-[1px] md:py-3 md:rounded-t-lg md:px-4 md:w-full"
                        : "hidden md:flex md:justify-between md:border-[1px] md:py-3 md:rounded-lg md:px-4 md:w-full"
                    }
                    onClick={() => {
                      setOpenProfileSetting(true);
                      setOpenAdvanceSetting(false);
                    }}
                  >
                    <div className="flex justify-center items-center gap-x-3">
                      <img src={profile} className="md:w-6" />
                      <p className="font-bold text-24px text-black md:text-16px">
                        Your Profile
                      </p>
                      <span className="hidden md:inline-block md:-mt-1">
                        {!openProfileSetting ? (
                          <img
                            src={dropdown}
                            className="md:mt-2 md:w-4 md:ml-24"
                            onClick={() =>
                              openProfileSetting(!openProfileSetting)
                            }
                          />
                        ) : null}
                      </span>
                    </div>
                  </button>
                )}

                {/* Content mobile */}
                <span className="hidden md:inline-block">
                  {openProfileSetting ? (
                    <div className="px-6 border-[1px] py-4 space-y-4 rounded-b-lg lg:space-y-7 md:px-4 md:space-y-2 md:mb-5">
                      {/* Change account name */}
                      <div className="w-full space-y-2">
                        <h3 className="font-bold text-18px text-black md:text-14px md:-mt-3">
                          Account Name
                        </h3>
                        <input
                          type="text"
                          className="w-full py-2.5 rounded-lg border-gray-300 focus:ring-primary focus:border-primary text-16px font-semibold lg:w-60 md:text-14px md:py-1.5"
                          placeholder={user && user.userName}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>

                      {/* Change password */}
                      <div className="grid grid-cols-12 md:gap-y-2">
                        <div className="col-span-9 lg:col-span-8 md:col-span-12">
                          <h3 className="font-bold text-18px text-black md:text-14px">
                            Change new password
                          </h3>
                          <p className="md:hidden">
                            You can reset password to make your password more
                            security.
                          </p>
                        </div>
                        <div className="col-span-3 ml-6 lg:col-span-4 lg:ml-9 md:ml-0 md:col-span-0 ">
                          <button
                            className="font-semibold text-16px border-[1px] rounded-lg px-3 py-2 md:text-14px md:w-60"
                            onClick={() => setResetPassword(!resetPassword)}
                          >
                            Change Password
                          </button>
                        </div>
                      </div>

                      {/* Change profile */}
                      <div className="grid grid-cols-12 md:gap-y-2">
                        <div className="col-span-7 lg:col-span-7 md:col-span-12">
                          <h3 className="font-bold text-18px text-black md:text-14px">
                            Profile Picture
                          </h3>
                          <p className="md:hidden">
                            Displayed when collaborating with others.
                          </p>
                        </div>

                        <div className="col-span-5 flex justify-center items-center gap-x-3 ml-14 lg:col-span-5 lg:ml-0 md:-ml-1 md:w-52">
                          <label className="cursor-pointer">
                            <input
                              className="text-sm w-36 hidden"
                              type="file"
                              multiple
                              onChange={(e) => {
                                setProfileImage(e.target.files[0]);
                              }}
                            />
                            <div>
                              {user && user.profileImage === null ? (
                                <Avatar
                                  variant="circular"
                                  alt="candice wu"
                                  className="cursor-pointer  w-11 h-11 rounded-full lg:w-8 lg:h-8 md:w-7 md:h-7"
                                  src="https://firebasestorage.googleapis.com/v0/b/docengine-7e623.appspot.com/o/images%2Fprofile%2Fcb6df344-7dd9-4323-8961-cbd55a606e77_user.png?alt=media&token=6eb13cc7-734c-4292-bc74-2ea2b4e6b5c2"
                                  />
                              ) : (
                                <Avatar
                                  variant="circular"
                                  alt="candice wu"
                                  className="cursor-pointer w-11 h-11  rounded-full lg:w-8 lg:h-8 md:w-7 md:h-7"
                                  src={user && user.profileImage}
                                />
                              )}
                            </div>
                          </label>

                          <label>
                            <input
                              className="text-sm cursor-pointer w-36 hidden md:w-full"
                              type="file"
                              multiple
                              onChange={(e) => {
                                setProfileImage(e.target.files[0]);
                              }}
                            />
                            <p className="font-semibold text-18px border-[1px] rounded-lg px-3 py-1 cursor-pointer lg:text-16px md:text-14px">
                              Upload Photo
                            </p>
                          </label>

                          <div>
                            <button
                              type="button"
                              className="px-3 py-2 border-[1px] rounded-lg  md:px-2.5"
                              onClick={() =>
                                setOpenDeleteProfile(!openDeleteProfile)
                              }
                            >
                              <img src={trush} className="md:w-3" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Signin method */}
                      <div className="grid grid-cols-12">
                        <div className="col-span-7 lg:col-span-6 md:col-span-12">
                          <h3 className="font-bold text-18px text-black md:text-14px">
                            You are connected to Google
                          </h3>
                          <p className="md:hidden">
                            You can sign in to DocEngine using your Google
                            account.
                          </p>
                        </div>
                        <div className="col-span-5 lg:col-span-6">
                          <span className="flex justify-center items-center gap-x-3 bg-[#F8F8F8] py-2.5 rounded-lg md:w-60 md:py-1.5 mt-2">
                            <img src={google} className="w-5 md:w-4" />
                            <p className="md:text-12px">{user && user.email}</p>
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </span>
              </div>

              {/* Advance Setting */}
              <div className="pb-5">
                {/* For laptop & tablet */}
                <div
                  className={
                    openAdvanceSetting
                      ? "md:hidden flex justify-between border-l-[1px] border-r-[1px] border-t-[1px] px-6 py-3 rounded-t-lg lg:-mt-7  md:mt-5"
                      : "md:hidden flex justify-between border-l-[1px] border-r-[1px] border-t-[1px] px-6 py-3 rounded-t-lg lg:mt-5  md:border-[1px] md:rounded-lg  md:-mt-6"
                  }
                >
                  <div className="flex justify-center items-center gap-x-3">
                    <img src={advance} className="md:w-6 md:-ml-2" />
                    <p className="font-bold text-24px text-black md:text-16px">
                      Advanced
                    </p>
                  </div>
                </div>

                {/* For mobile */}
                <button
                  className={
                    openAdvanceSetting
                      ? "hidden md:flex md:justify-between md:border-l-[1px] md:border-r-[1px] md:border-t-[1px] md:px-6 md:py-3 md:rounded-t-lg md:w-full md:-mt-5"
                      : "hidden md:flex  md:justify-between  md:border-l-[1px]  md:border-r-[1px]  md:border-t-[1px]  md:px-6  md:py-3  md:rounded-t-lg  md:border-[1px] md:rounded-lg  md:w-full md:-mt-5"
                  }
                  onClick={() => {
                    setOpenAdvanceSetting(!openAdvanceSetting);
                    setOpenProfileSetting(false);
                  }}
                >
                  <div className="flex justify-center items-center gap-x-3">
                    <img src={advance} className="md:w-6 md:-ml-2" />
                    <p className="font-bold text-24px text-black md:text-16px">
                      Advanced
                    </p>
                    <span className="hidden md:inline-block md:-mt-1">
                      {!openAdvanceSetting ? (
                        <img
                          src={dropdown}
                          className="md:mt-2 md:w-4 md:ml-[110px]"
                        />
                      ) : (
                        <img
                          src={reverse_dropdown}
                          className="md:mt-2 md:w-4 md:ml-[110px]"
                        />
                      )}
                    </span>
                  </div>
                </button>

                <div className="md:hidden px-6 border-[1px] py-4 space-y-4 rounded-b-lg md:px-4">
                  {/* Signout */}
                  <div className="grid grid-cols-12 justify-center items-center">
                    <div className="col-span-10 lg:col-span-9 md:col-span-6">
                      <h3 className="font-bold text-20px text-black md:text-16px">
                        Signing out
                      </h3>
                      <p className="md:hidden">
                        You can safely sign out from the current sessions and
                        choose to sign in back later
                      </p>
                    </div>
                    <div className="col-span-2 ml-3 lg:col-span-3 lg:ml-12 md:col-span-6 md:mr-20">
                      <button
                        className="font-semibold text-18px text-red-500 border-[1px] rounded-lg px-4 py-2 lg:text-16px md:text-14px md:w-20 md:px-2 md:py-1.5"
                        onClick={() => setOpenSignOut(!openSignOut)}
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full space-y-4">
                    <div>
                      <h3 className="font-bold text-20px text-black md:text-16px md:mt-3">
                        Close Account
                      </h3>
                      <p className="md:hidden">
                        By close your account, your account can’t see by other.
                      </p>
                    </div>
                    <button
                      className="font-semibold text-18px text-red-500 border-[1px] rounded-lg px-3 py-1 lg:text-16px md:text-14px md:w-32 md:px-2 md:py-1.5 md:ml-3"
                      onClick={() => setCloseAccount(!closeAccount)}
                    >
                      Close Account
                    </button>
                  </div>
                </div>

                {/* Responsive */}
                <span className="hidden lg:hidden md:inline-block">
                  {openAdvanceSetting ? (
                    <div className="px-6 border-[1px] py-4 space-y-2 rounded-b-lg md:px-4">
                      {/* Signout */}
                      <div className="grid grid-cols-12 justify-center items-center">
                        <div className="col-span-10 lg:col-span-9 md:col-span-6">
                          <h3 className="font-bold text-18px text-black md:text-16px">
                            Signing out
                          </h3>
                          <p className="md:hidden">
                            You can safely sign out from the current sessions
                            and choose to sign in back later
                          </p>
                        </div>
                        <div className="col-span-2 ml-6 lg:col-span-3 lg:ml-12 md:col-span-6 md:mr-20">
                          <button
                            className="font-semibold text-16px text-red-500 border-[1px] rounded-lg px-4 py-2 md:text-14px md:w-20 md:px-2 md:py-1.5"
                            onClick={() => setOpenSignOut(!openSignOut)}
                          >
                            Sign out
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center w-full space-y-4">
                        <div>
                          <h3 className="font-bold text-18px text-black md:text-16px md:mt-3">
                            Close Account
                          </h3>
                          <p className="md:hidden">
                            By close your account, your account can’t see by
                            other.
                          </p>
                        </div>
                        <button
                          className="font-semibold text-16px text-red-500 border-[1px] rounded-lg px-3 py-1 md:text-14px md:w-32 md:px-2 md:py-1.5 md:ml-3"
                          onClick={() => setCloseAccount(!closeAccount)}
                        >
                          Close Account
                        </button>
                      </div>
                    </div>
                  ) : null}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div>
        <SignOutModal
          openSignOut={openSignOut}
          setOpenSignOut={setOpenSignOut}
        />
        <DeleteProfileModal
          openDeleteProfile={openDeleteProfile}
          setOpenDeleteProfile={setOpenDeleteProfile}
        />
        <CloseAccountModal
          closeAccount={closeAccount}
          setCloseAccount={setCloseAccount}
        />
        <ResetPasswordModal
          resetPassword={resetPassword}
          setResetPassword={setResetPassword}
        />
      </div>
    </div>
  );
};