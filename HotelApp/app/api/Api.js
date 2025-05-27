const endPoint =
  "https://hotel-f2f7c-default-rtdb.europe-west1.firebasedatabase.app";
async function getUsers() {
  const reponse = await fetch(`${endPoint}/users.json`);
  const data = await reponse.json();
  const usersArray = Object.keys(data).map((key) => ({
    id: key,
    ...data[key],
  }));
  return usersArray;
}
async function postUser(user) {
  const reponse = await fetch(`${endPoint}/users.json`, {
    method: "POST",
    body: JSON.stringify(user),
  });

  if (reponse.ok) {
    console.log("User created ");
  }
  return user;
}
export { getUsers, postUser };
