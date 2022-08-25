export const calculateDate =
  new Date("2022-08-27 08:46:51").getTime() - new Date().getTime();

export const fullKeyDate = new Date(calculateDate);

export const keyDate = {
  day: fullKeyDate.getDate(),
  hour: fullKeyDate.getHours(),
  minute: fullKeyDate.getMinutes(),
  second: fullKeyDate.getSeconds(),
};

export type IKeyDate = typeof keyDate;
