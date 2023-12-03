const getDataFromAPI = () => {
    return fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.results.map((user) => {
          return {
            id: user.login.uuid,
            name: user.name.first + " " + user.name.last,
            picture: user.picture.thumbnail,
            city: user.location.city,
            country: user.location.country,
            gender: user.gender,
          };
        });
        return cleanData;
      });
  };
  
  export default getDataFromAPI;