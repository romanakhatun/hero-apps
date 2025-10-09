import { toast } from "react-toastify";

const getStoreApps = () => {
  const GetAppsToLS = localStorage.getItem("installedApps");

  if (GetAppsToLS) {
    const appsData = JSON.parse(GetAppsToLS);
    return appsData;
  } else {
    return [];
  }
};

const addToStoreApps = (id, title) => {
  const appsData = getStoreApps();

  if (appsData.includes(id)) {
    console.log("already install");
  } else {
    appsData.push(id);
    toast.success(`Yahoo !! ${title} Installed Successfully`);
    const data = JSON.stringify(appsData);
    localStorage.setItem("installedApps", data);
  }
};

const removeStoreApps = (id, title) => {
  const appsData = getStoreApps();
  const updatedData = appsData.filter((appId) => parseInt(appId) !== id);
  toast.success(`${title} Uninstalled Successfully`);
  const data = JSON.stringify(updatedData);
  localStorage.setItem("installedApps", data);
};

export { getStoreApps, addToStoreApps, removeStoreApps };
