export const getCurrentDate = () => new Date().toLocaleString();

export const convertToUpperCase = (text: string) => text.toUpperCase();

const convertToGetTime = (date: Date) => date.getTime();

export default convertToGetTime;
