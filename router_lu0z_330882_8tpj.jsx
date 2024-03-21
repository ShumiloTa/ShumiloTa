const removeDuplicates = array => Array.from(new Set(array));
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const variableName = getRandomNumber();
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
