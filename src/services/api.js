const BASE_URL = "https://api.kidsru.uz/v1";
const ADMIN_ID = localStorage.getItem("ADMIN_ID")

export const endpoints = {
  LOGIN_API: BASE_URL + "/admin/login",
  GET_USERS_API: BASE_URL + "/user/pagination?page=1&perpage=24",
  ADMIN_EDIT: BASE_URL + `/admin/${ADMIN_ID}`,
  ADMIN_UPDATE_PASSWORD: BASE_URL + `/admin/${ADMIN_ID}/password`,
  MEDIA_UPLOAD: BASE_URL + "/media/upload",
  GET_MEDIA_UPLOADS: BASE_URL + "/media/uploads/",
  GET_MEDIA_INFO: BASE_URL + "/media/info/",
  DELETE_MEDIA: BASE_URL + "/media/",
  GET_MEDIA_URL: BASE_URL + "/media/url/"
};