const getAllGen1 = async () => {
  try {
    const response = await fetch('https://tyradex.vercel.app/api/v1/gen/1');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllGen1;
