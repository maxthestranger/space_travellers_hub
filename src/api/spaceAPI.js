class spaceAPI {
  static baseURL = 'https://api.spacexdata.com/v3';

  //   fetch missions
  static getMissions = async () => fetch(`${this.baseURL}/missions`).then(async (res) => {
    if (res.ok) {
      try {
        const data = await res.json();
        return data;
      } catch (e) {
        return [];
      }
    }

    return null;
  });

  // fetch rockets
  static getRockets = async () => fetch(`${this.baseURL}/rockets`).then(async (res) => {
    if (res.ok) {
      try {
        const data = await res.json();
        return data;
      } catch (e) {
        return [];
      }
    }

    return null;
  });
}

export default spaceAPI;
