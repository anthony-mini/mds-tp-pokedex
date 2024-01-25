const fetchUsersData = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=20');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchUsersData;
