export const getCellularHealthScore = (value) => {
    if (value >= 90) {
        return 3;
    } else if (value >= 80) {
        return 2;
    } else if (value >= 70) {
        return 1;
    } else {
        return 0;
    }
}

export const getHydrationScore = (gender, value) => {
    if (gender === 'male') {
        if (value >= 63) {
            return 3;
        } else if (value >= 53) {
            return 2;
        } else if (value >= 48) {
            return 1;
        } else {
            return 0;
        }
    } else if (gender === 'female') {
        if (value >= 60) {
            return 3;
        } else if (value >= 50) {
            return 2;
        } else if (value >= 45) {
            return 1;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

export const getBodyFatScore = (gender, age, value) => {
    if (gender === 'male') {
        if (age / 10 < 4) {
            if (value > 18.7) return 0;
            else if (value >= 14.9) return 1;
            else if (value >= 10.6) return 2;
            else if (value >= 8) return 3;
            else return 0;
        } else if (age / 10 < 5) {
            if (value > 23.5) return 0;
            else if (value >= 20.7) return 1;
            else if (value >= 17.5) return 2;
            else if (value >= 8) return 3;
            else return 0;
        } else if (age / 10 < 6) {
            if (value > 24.7) return 0;
            else if (value >= 22.2) return 1;
            else if (value >= 19.2) return 2;
            else if (value >= 8) return 3;
            else return 0;
        } else {
            if (value > 25.2) return 0;
            else if (value >= 22.7) return 1;
            else if (value >= 19.8) return 2;
            else if (value >= 8) return 3;
            else return 0;
        }
    } else if (gender === 'female') {
        if (age / 10 < 3) {
            if (value > 22.8) return 0;
            else if (value >= 19.5) return 1;
            else if (value >= 16.6) return 2;
            else if (value >= 14) return 3;
            else return 0;
        } else if (age / 10 < 4) {
            if (value > 24.7) return 0;
            else if (value >= 20.9) return 1;
            else if (value >= 27.5) return 2;
            else if (value >= 14) return 3;
            else return 0;
        } else if (age / 10 < 5) {
            if (value > 27.7) return 0;
            else if (value >= 23.9) return 1;
            else if (value >= 19.9) return 2;
            else if (value >= 14) return 3;
            else return 0;
        } else if (age / 10 < 6) {
            if (value > 30.5) return 0;
            else if (value >= 27.1) return 1;
            else if (value >= 22.6) return 2;
            else if (value >= 14) return 3;
            else return 0;
        } else {
            if (value > 31.4) return 0;
            else if (value >= 28) return 1;
            else if (value >= 23.3) return 2;
            else if (value >= 14) return 3;
            else return 0;
        }
    } else {
        return 0;
    }
}

export const getVisceralFatScore = (value) => {
    if (value <= 6) {
        return 3;
    } else if (value <= 9) {
        return 2;
    } else if (value <= 15) {
        return 1;
    } else {
        return 0;
    }
}

export const getInflammationScore = (value) => {
    if (value <= 0.37) {
        return 3;
    } else if (value <= 0.38) {
        return 2;
    } else if (value <= 0.385) {
        return 1;
    } else {
        return 0;
    }
}

export const getCellIntegrityScore = (gender, age, value) => {
    if (gender === 'male') {
        if (age / 10 < 2) {
            if (value >= 6.8) return 3;
            else if (value >= 5.9) return 2;
            else if (value >= 5.8) return 1;
            else return 0;
        } else if (age / 10 < 3) {
            if (value >= 6.8) return 3;
            else if (value >= 5.8) return 2;
            else if (value >= 5.7) return 1;
            else return 0;
        } else if (age / 10 < 4) {
            if (value >= 6.7) return 3;
            else if (value >= 5.7) return 2;
            else if (value >= 5.6) return 1;
            else return 0;
        } else if (age / 10 < 5) {
            if (value >= 6.5) return 3;
            else if (value >= 5.6) return 2;
            else if (value >= 5.5) return 1;
            else return 0;
        } else if (age / 10 < 6) {
            if (value >= 6.2) return 3;
            else if (value >= 5.5) return 2;
            else if (value >= 5.2) return 1;
            else return 0;
        } else if (age / 10 < 7) {
            if (value >= 5.8) return 3;
            else if (value >= 5.2) return 2;
            else if (value >= 4.8) return 1;
            else return 0;
        } else {
            if (value >= 5.2) return 3;
            else if (value >= 4.8) return 2;
            else if (value >= 4.2) return 1;
            else return 0;
        }
    } else if (gender === 'female') {
        if (age / 10 < 2) {
            if (value >= 6.1) return 3;
            else if (value >= 5.2) return 2;
            else if (value >= 5.1) return 1;
            else return 0;
        } else if (age / 10 < 3) {
            if (value >= 6.1) return 3;
            else if (value >= 5.1) return 2;
            else if (value >= 5.0) return 1;
            else return 0;
        } else if (age / 10 < 4) {
            if (value >= 6.0) return 3;
            else if (value >= 5.0) return 2;
            else if (value >= 4.9) return 1;
            else return 0;
        } else if (age / 10 < 5) {
            if (value >= 5.8) return 3;
            else if (value >= 4.9) return 2;
            else if (value >= 4.8) return 1;
            else return 0;
        } else if (age / 10 < 6) {
            if (value >= 5.5) return 3;
            else if (value >= 4.8) return 2;
            else if (value >= 4.5) return 1;
            else return 0;
        } else if (age / 10 < 7) {
            if (value >= 5.1) return 3;
            else if (value >= 4.5) return 2;
            else if (value >= 4.1) return 1;
            else return 0;
        } else {
            if (value >= 4.5) return 3;
            else if (value >= 4.1) return 2;
            else if (value >= 3.5) return 1;
            else return 0;
        }
    } else {
        return 0;
    }
}