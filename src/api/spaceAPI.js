class spaceAPI {
  static baseURL = 'https://api.spacexdata.com/v3';

  //   fetch missions
  static getMissions = async () => fetch(`${this.baseURL}/missions`).then((res) => res.json());
}

export default spaceAPI;
