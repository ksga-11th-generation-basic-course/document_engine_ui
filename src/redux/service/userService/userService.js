import { api, header } from "../../../utils/constant";

export const disableAccount = async () => {
  try {
    const response = await api.put(
      `users/close/account`,
      {},
      {
        ...header,
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
        ...header,
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
        ...header,
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
      ...header,
    });

    const user = JSON.stringify(response.data.payload);

    localStorage.setItem("user", user);
    return response.data.payload;
  } catch (error) {
    throw error.response.data.detail;
  }
};
