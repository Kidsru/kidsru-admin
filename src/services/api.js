const BASE_URL = "https://api.kidsru.uz/v1";

export const endpoints = {
  LOGIN_API: BASE_URL + "/admin/login",
  GET_USERS_API: BASE_URL + "/user/pagination?page=1&perpage=24",
  ADMIN_EDIT: BASE_URL + "/admin/f2edfff9-90c2-4d35-accc-a7e38ca3536b",
  ADMIN_UPDATE_PASSWORD: BASE_URL + "/admin/f2edfff9-90c2-4d35-accc-a7e38ca3536b/password",
};
