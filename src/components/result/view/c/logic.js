export const getBloodCirculationScore = (value) => {
    const rate = Math.floor((value / 21) * 100);
    if (rate <= 100 && rate >= 90) {
        return 3;
    } else if (rate >= 80) {
        return 2;
    } else if (rate >= 65) {
        return 1;
    } else {
        return 0;
    }
}

export const getLymphCirculationScore = (value) => {
    const rate = Math.floor((value / 18) * 100);
    if (rate <= 100 && rate >= 90) {
        return 3;
    } else if (rate >= 80) {
        return 2;
    } else if (rate >= 65) {
        return 1;
    } else {
        return 0;
    }
}

export const getToxicityLevelScore = (value) => {
    const rate = Math.floor((value / 21) * 100);
    if (rate <= 100 && rate >= 90) {
        return 3;
    } else if (rate >= 80) {
        return 2;
    } else if (rate >= 65) {
        return 1;
    } else {
        return 0;
    }
}

export const getVisceralFatScore = (value) => {
    if (value === "excellent") {
        return 3;
    } else if (value === "good") {
        return 2;
    } else if (value === "fair") { 
        return 1;
    } else {
        return 0;
    }
}

export const getSystolicPressureScore = (value) => {
    if (value > 140) {
        return 0;
    } else if (value > 120) {
        return 2;
    } else if (value > 90) {
        return 3;
    } else {
        return 1;
    }
}

export const getDiastolicPressureScore = (value) => {
    if (value > 90) {
        return 0;
    } else if (value > 80) {
        return 2;
    } else if (value > 60) {
        return 3;
    } else {
        return 1;
    }
}

export const getOxygenLevelScore = (value) => {
    if (value >= 96) {
        return 3;
    } else if (value > 94) {
        return 2;
    } else if (value > 92) {
        return 1;
    } else {
        return 0;
    }
}

export const getPulseRateScore = (value) => {
    if (value > 130) {
        return 0;
    } else if (value >= 110) {
        return 1;
    } else if (value > 100) {
        return 2;
    } else if (value >= 40) {
        return 3;
    } else {
        return 0;
    }
}

export const getBloodGlucoseScore = (value) => {
    if (value > 140) {
        return 0;
    } else if (value > 120) {
        return 1;
    } else if (value > 110) {
        return 2;
    } else if (value > 100) {
        return 3;
    } else if (value > 50) {
        return 1;
    } else {
        return 0;
    }
}

export const getBloodCholesterolScore = (value) => {
    if (value >= 240) {
        return 0;
    } else if (value > 200) {
        return 2;
    } else  {
        return 3;
    }
}

export const getRespiratoryCirculationScore = (value) => {
    if (value > 50) {
        return 3;
    } else if (value > 40) {
        return 2;
    } else if (value > 25) {
        return 1;
    } else {
        return 0;
    }
}

export const getNitricOxideLevelScore = (value) => {
    if (value === "optimal") {
        return 3;
    } else if (value === "low") {
        return 2;
    } else {
        return 0;
    }
}

export const getRedBloodCellScore = (value) => {
    if (value === "excellent") {
        return 3;
    } else if (value === "good") {
        return 2;
    } else if (value === "fair") {
        return 1;
    } else {
        return 0;
    }
}

