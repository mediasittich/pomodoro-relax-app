export const calculateTimeLeft = (difference) => {
  return {
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export const displayFormat = (val) => ("0" + val).slice(-2);

export const calculateTimeInSec = (difference) => difference / 1000;
