const getStoreApps = () => {
  const GetAppsToLS = localStorage.getItem("installedApps");

  if (GetAppsToLS) {
    const appsData = JSON.parse(GetAppsToLS);
    return appsData;
  } else {
    return [];
  }
};

const addToStoreApps = (id) => {
  const appsData = getStoreApps();

  if (appsData.includes(id)) {
    alert("already exist");
  } else {
    appsData.push(id);
    const data = JSON.stringify(appsData);
    localStorage.setItem("installedApps", data);
  }
};

export { getStoreApps, addToStoreApps };
