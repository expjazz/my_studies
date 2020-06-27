const mealApi = async (search) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  );
  const data = await res.json();
  return data.meals;
};

module.exports = { mealApi };
