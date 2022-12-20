export const getDetoxScore = (standard, value) => {
  const diff = Math.abs(value - standard);
  if (diff >= 16) {
    return 0;
  } else if (11 <= diff && diff <= 15) {
    return 1;
  } else if (6 <= diff && diff <= 10) {
    return 2;
  } else if (diff <= 5) {
    return 3;
  } else {
    return 0;
  }
};

export const getDigestiveEnergyScore = (standard, value) => {
  const diff = Math.abs(value - standard);
  if (diff >= 16) {
    return 0;
  } else if (11 <= diff && diff <= 15) {
    return 1;
  } else if (6 <= diff && diff <= 10) {
    return 2;
  } else if (diff <= 5) {
    return 3;
  } else {
    return 0;
  }
};

export const getDigestiveScore = (value) => {
  if (50 <= value && value <= 65) {
    return 0;
  } else if (66 <= value && value <= 79) {
    return 1;
  } else if (80 <= value && value <= 90) {
    return 2;
  } else if (91 <= value && value <= 100) {
    return 3;
  } else {
    return 0;
  }
};

export const getEnergyScore = (value) => {
  if (value <= 350 || 601 <= value) {
    return 0;
  } else if (351 <= value && value <= 399) {
    return 1;
  } else if (400 <= value && value <= 549) {
    return 2;
  } else if (550 <= value && value <= 600) {
    return 3;
  } else {
    return 0;
  }
};

export const getImmuneScore = (standard, value) => {
  const diff = Math.abs(value - standard);
  if (diff >= 16) {
    return 0;
  } else if (11 <= diff && diff <= 15) {
    return 1;
  } else if (6 <= diff && diff <= 10) {
    return 2;
  } else if (diff <= 5) {
    return 3;
  } else {
    return 0;
  }
};

export const getLifeScore = (standard, value) => {
  const diff = Math.abs(value - standard);
  if (diff >= 16) {
    return 0;
  } else if (11 <= diff && diff <= 15) {
    return 1;
  } else if (6 <= diff && diff <= 10) {
    return 2;
  } else if (diff <= 5) {
    return 3;
  } else {
    return 0;
  }
};

export const getYinScore = (value) => {
  if (value <= 30 || 41 <= value) {
    return 2;
  } else if (31 <= value && value <= 40) {
    return 3;
  } else {
    return 0;
  }
};

export const getYangScore = (value) => {
  if (value <= 59 || 70 <= value) {
    return 2;
  } else if (60 <= value && value <= 69) {
    return 3;
  } else {
    return 0;
  }
};

export const getPurificationScore = (standard, value) => {
  const diff = Math.abs(value - standard);
  if (diff >= 16) {
    return 0;
  } else if (11 <= diff && diff <= 15) {
    return 1;
  } else if (6 <= diff && diff <= 10) {
    return 2;
  } else if (diff <= 5) {
    return 3;
  } else {
    return 0;
  }
};

export const getSleepScore = (value) => {
  if (50 <= value && value <= 65) {
    return 0;
  } else if (66 <= value && value <= 79) {
    return 1;
  } else if (80 <= value && value <= 90) {
    return 2;
  } else if (91 <= value && value <= 100) {
    return 3;
  } else {
    return 0;
  }
};

export const getStressScore = (value) => {
  if (50 <= value && value <= 65) {
    return 0;
  } else if (66 <= value && value <= 79) {
    return 1;
  } else if (80 <= value && value <= 90) {
    return 2;
  } else if (91 <= value && value <= 100) {
    return 3;
  } else {
    return 0;
  }
};
