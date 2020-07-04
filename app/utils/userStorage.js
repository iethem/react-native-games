import AsyncStorage from '@react-native-community/async-storage';

async function getUsers() {
  const jsonValue = await AsyncStorage.getItem('@users');
  return jsonValue != null ? JSON.parse(jsonValue) : [];
}

async function getUserByUsername(username, password) {
  const users = await getUsers();
  return users.find(
    user => user.username === username && user.password === password,
  );
}

async function setUser(name, username, password, email) {
  const users = await getUsers();

  const isRegistered = users.find(user => user.username === username);

  if (isRegistered)
    throw new Error(
      `${username} is not available, please use different username.`,
    );

  const user = { name, username, password, email };
  users.push(user);
  const jsonValue = JSON.stringify(users);
  await AsyncStorage.setItem('@users', jsonValue);

  return user;
}

export { getUsers, getUserByUsername, setUser };
