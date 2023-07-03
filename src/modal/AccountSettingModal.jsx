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

export const AccountSettingModal = ({ openSetting, setOpenSetting, user }) => {
  const [openSignOut, setOpenSignOut] = useState(false);

  const dispatch = useDispatch();

  const [openDeleteProfile, setOpenDeleteProfile] = useState(false);

  const [closeAccount, setCloseAccount] = useState(false);

  const [resetPassword, setResetPassword] = useState(false);

  const [username, setUsername] = useState();

  const [profileImage, setProfileImage] = useState();

  const [url, setUrl] = useState(user && user.profileImage);

  useEffect(() => {
    setUsername(user?.userName);
    return () => {
      setUsername("");
    };
  }, [user]);

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
        }}
      >
        <div className="w-[1200px] h-[840px] bg-white rounded-lg grid grid-cols-12">
          <div className="col-span-3 bg-[#FAFAF9] rounded-l-lg space-y-5">
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
                    strokeWidth="2"
                  />
                  <path
                    d="M9.80414 4.36597C10.7687 1.04468 15.2313 1.04468 16.1959 4.36597C16.7093 6.13384 18.4329 7.18232 20.1427 6.76688C23.355 5.9864 25.5862 10.0583 23.3386 12.5991C22.1422 13.9515 22.1422 16.0485 23.3386 17.4009C25.5862 19.9417 23.355 24.0136 20.1427 23.2331C18.4329 22.8177 16.7093 23.8662 16.1959 25.634C15.2313 28.9553 10.7687 28.9553 9.80414 25.634C9.2907 23.8662 7.56709 22.8177 5.85727 23.2331C2.64503 24.0136 0.413766 19.9417 2.66141 17.4009C3.85779 16.0485 3.85779 13.9515 2.66141 12.5991C0.413766 10.0583 2.64503 5.9864 5.85727 6.76688C7.56709 7.18232 9.2907 6.13384 9.80414 4.36597Z"
                    stroke="#1E9CEF"
                    strokeWidth="2"
                  />
                </svg>
                <p className="font-semibold text-18px">Setting</p>
              </button>
            </div>
          </div>
          <div className="col-span-9 p-3 shadow-xl bg-white rounded-r-lg">
            <div className="flex w-full justify-end">
              <button
                type="button"
                onClick={() => {
                  setOpenSetting(!openSetting);
                }}
              >
                <img src={close} />
              </button>
            </div>
            <div className="px-16 space-y-5">
              <div className="text-accent">
                <h1 className="font-bold text-34px">Account Setting</h1>
                <p>Manage your profile, preferences, and login settings</p>
              </div>
              <div>
                <div className="flex justify-between border-l-[1px] border-r-[1px] border-t-[1px] px-6 py-3 rounded-t-lg">
                  <div className="flex justify-center items-center gap-x-3">
                    <img src={profile} />
                    <p className="font-bold text-22px text-black">
                      Your Profile
                    </p>
                  </div>
                  <Button
                    onClick={handleEditProfileInformation}
                    className="font-semibold text-white text-18px px-7 py-1 bg-primary rounded-lg"
                  >
                    Save
                  </Button>
                </div>
                <div className="px-6 border-[1px] py-4 space-y-4 rounded-b-lg">
                  <div className="w-full space-y-2">
                    <h3 className="font-bold text-18px text-black">
                      Account Name
                    </h3>
                    <input
                      type="text"
                      value={username}
                      className="w-96 py-3 rounded-lg border-gray-300 focus:ring-primary focus:border-primary text-16px font-semibold"
                      placeholder={user && user.userName}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between items-center w-full space-y-4">
                    <div>
                      <h3 className="font-bold text-18px text-black">
                        Change new password
                      </h3>
                      <p>
                        You can reset password to make your password more
                        security.
                      </p>
                    </div>
                    <button
                      className="font-semibold text-16px border-[1px] rounded-lg px-3 py-1"
                      onClick={() => setResetPassword(!resetPassword)}
                    >
                      Change Password
                    </button>
                  </div>
                  <div className="flex justify-between items-center w-full space-y-4">
                    <div>
                      <h3 className="font-bold text-18px text-black">
                        Profile Picture
                      </h3>
                      <p>Displayed when collaborating with others.</p>
                    </div>
                    <div className="flex justify-center items-center gap-x-4">
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
                          {profileImage ? (
                            <Avatar
                              variant="circular"
                              alt="candice wu"
                              className="cursor-pointer rounded-full"
                              src={URL.createObjectURL(profileImage)}
                            />
                          ) : user && user.profileImage === null ? (
                            <Avatar
                              variant="circular"
                              alt="candice wu"
                              className="cursor-pointer rounded-full"
                              src="https://firebasestorage.googleapis.com/v0/b/docengine-7e623.appspot.com/o/images%2Fprofile%2Fcb6df344-7dd9-4323-8961-cbd55a606e77_user.png?alt=media&token=6eb13cc7-734c-4292-bc74-2ea2b4e6b5c2"
                            />
                          ) : (
                            <Avatar
                              variant="circular"
                              alt="candice wu"
                              className="cursor-pointer rounded-full"
                              src={user && user.profileImage}
                            />
                          )}
                        </div>
                      </label>
                      <label>
                        <input
                          className="text-sm cursor-pointer w-36 hidden"
                          type="file"
                          multiple
                          onChange={(e) => {
                            setProfileImage(e.target.files[0]);
                          }}
                        />
                        <p className="font-semibold text-16px border-[1px] rounded-lg px-3 py-1 cursor-pointer">
                          Upload Photo
                        </p>
                      </label>
                      <button
                        type="button"
                        className="px-3 py-2 border-[1px] rounded-lg"
                        onClick={() => setOpenDeleteProfile(!openDeleteProfile)}
                      >
                        <img src={trush} />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full space-y-4">
                    <div>
                      <h3 className="font-bold text-18px text-black">
                        You are connected to Google
                      </h3>
                      <p>
                        You can sign in to DocEngine using your Google account.
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-x-3 w-[300px] bg-[#F8F8F8] px-5 py-2 rounded-lg">
                      <img src={google} />
                      <p>{user && user.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between border-l-[1px] border-r-[1px] border-t-[1px] px-6 py-3 rounded-t-lg">
                  <div className="flex justify-center items-center gap-x-3">
                    <img src={advance} />
                    <p className="font-bold text-22px text-black">Advanced</p>
                  </div>
                </div>
                <div className="px-6 border-[1px] py-4 space-y-4 rounded-b-lg">
                  <div className="flex justify-between items-center w-full space-y-4">
                    <div>
                      <h3 className="font-bold text-18px text-black">
                        Sign out
                      </h3>
                      <p>
                        You can safely sign out from the current sessions and
                        choose to <br /> sign in back later
                      </p>
                    </div>
                    <button
                      className="font-semibold text-16px text-red-500 border-[1px] rounded-lg px-3 py-1"
                      onClick={() => setOpenSignOut(!openSignOut)}
                    >
                      Sign out
                    </button>
                  </div>
                  <div className="flex justify-between items-center w-full space-y-4">
                    <div>
                      <h3 className="font-bold text-18px text-black">
                        Close Account
                      </h3>
                      <p>
                        By close your account, your account can’t see by other.
                      </p>
                    </div>
                    <button
                      className="font-semibold text-16px text-red-500 border-[1px] rounded-lg px-3 py-1"
                      onClick={() => setCloseAccount(!closeAccount)}
                    >
                      Close Account
                    </button>
                  </div>
                </div>
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
