import { api, header } from "../../../utils/constant";

export const disableAccount = async () => {
  try {
    const response = await api.put(
      `users/close/account`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const changePassword = async (
  currentPassword,
  newPassword,
  confirmNewPassword
) => {
  try {
    const response = await api.put(
      `users/change/password?currentPassword=${currentPassword}&newPassword=${newPassword}&confirmNewPassword=${confirmNewPassword}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const editProfileInformation = async (username, url) => {
  console.log(url);
  try {
    const response = await api.put(
      `users`,
      {
        username: username,
        profileImage: url,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type ": "application/json",
        },
      }
    );

    const user = JSON.stringify(response.data.payload);

    localStorage.setItem("user", user);
    console.log(response.data.payload);
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const deleteProfileImage = async () => {
  try {
    const response = await api.delete(`users/profile`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type ": "application/json",
      },
    });

    const user = JSON.stringify(response.data.payload);

    localStorage.setItem("user", user);
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
};
