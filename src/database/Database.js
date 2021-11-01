import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveBracelet(listItem) {
  listItem.id = new Date().getTime();
  let savedItems = [];
  const response = await AsyncStorage.getItem('bracelets');

  if (response) savedItems = JSON.parse(response);
  savedItems.push(listItem);

  return AsyncStorage.setItem('bracelets', JSON.stringify(savedItems));
}

async function saveFence(listItem) {
  listItem.id = new Date().getTime();
  let savedItems = [];
  const response = await AsyncStorage.getItem('fences');

  if (response) savedItems = JSON.parse(response);
  savedItems.push(listItem);

  return AsyncStorage.setItem('fences', JSON.stringify(savedItems));
}

function getBracelets() {
  return AsyncStorage.getItem('bracelets').then(response => {
    if (response) return Promise.resolve(JSON.parse(response));
    else return Promise.resolve([]);
  });
}

function getFences() {
  return AsyncStorage.getItem('fences').then(response => {
    if (response) return Promise.resolve(JSON.parse(response));
    else return Promise.resolve([]);
  });
}

module.exports = {
  saveBracelet,
  getBracelets,
  saveFence,
  getFences,
};
