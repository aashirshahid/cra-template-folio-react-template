import APP_CONSTANTS from "Constants/app-constants";
import { AccessToken } from "Service/api-client";
import { getItem } from "Service/storage-service";
export const isLoggedIn = () => {
  if (getItem(APP_CONSTANTS.ACCESS_TOKEN)) {
    AccessToken.token = getItem(APP_CONSTANTS.ACCESS_TOKEN);
    return true;
  }
  return false;
};
