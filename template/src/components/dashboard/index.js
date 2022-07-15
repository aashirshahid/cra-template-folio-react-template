import React from "react";
import { useTranslation } from "react-i18next";
import { removeItem } from "Service/storage-service";
import APP_CONSTANTS from "Constants/app-constants";
import "./styles.css";

function Dashboard() {
  const { t } = useTranslation();

  const logout = () => {
    removeItem(APP_CONSTANTS.ACCESS_TOKEN);
    location.reload();
  };

  return (
    <div className="dashboard-page">
      <div>{t("dashboardComponent")}</div>
      
      <button className="logout-btn" onClick={logout}>
        {t("logout")}
      </button>
    </div>
  );
}

export default Dashboard;
