export const getPostureScore = (value) => {
    if (value >= 31) {
        return 0;
    } else if (value >= 21) {
        return 1;
    } else if (value >= 11) {
        return 2;
    } else if (value >= 0) {
        return 3;
    } else {
        return 0;
    }
}

export const getCervicalScore = (value) => {
    if (value >= 7/8) {
        return 3;
    } else if (value >= 6/8) {
        return 2;
    } else if (value >= 5/8) {
        return 1;
    } else {
        return 0;
    }
}

export const getSpineScore = (value) => {
    if (value >= 7/8) {
        return 3;
    } else if (value >= 6/8) {
        return 2;
    } else if (value >= 5/8) {
        return 1;
    } else {
        return 0;
    }
}

export const getUpperExtremityScore = (value) => {
    if (value >= 7/8) {
        return 3;
    } else if (value >= 6/8) {
        return 2;
    } else if (value >= 5/8) {
        return 1;
    } else {
        return 0;
    }
}

export const getLowerExtremityScore = (value) => {
    if (value >= 0.875) {
        return 3;
    } else if (value >= 0.75) {
        return 2;
    } else if (value >= 0.625) {
        return 1;
    } else {
        return 0;
    }
}

export const getMovementScore = (value) => {
    if (value >= 0.875) {
        return 3;
    } else if (value >= 0.75) {
        return 2;
    } else if (value >= 0.625) {
        return 1;
    } else {
        return 0;
    }
}

export const getCardioRespiratoryScore = (value) => {
    if (value === 'excellent') {
        return 3;
    } else if (value === 'good') {
        return 2;
    } else if (value === 'fair') {
        return 1;
    } else {
        return 0;
    }
}

export const getMusculoskeletalScore = (value) => {
    if (value === 'excellent') {
        return 3;
    } else if (value === 'good') {
        return 2;
    } else if (value === 'fair') {
        return 1;
    } else {
        return 0;
    }
}