export function calculateLifePathNumber(birthDate) {
    const digits = birthDate.replace(/-/g, '');
    let sum = digits.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return sum;
}

export function calculateExpressionNumber(name) {
    const charValues = {
        A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9,
        J:1, K:2, L:3, M:4, N:5, O:6, P:7, Q:8, R:9,
        S:1, T:2, U:3, V:4, W:5, X:6, Y:7, Z:8
    };
    const upperName = name.toUpperCase();
    let sum = 0;
    for (let char of upperName) {
        if (charValues[char]) {
            sum += charValues[char];
        }
    }
    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return sum;
}

export function calculateSoulUrgeNumber(name) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const upperName = name.toUpperCase();
    let sum = 0;
    for (let char of upperName) {
        if (vowels.includes(char)) {
            sum += (char.charCodeAt(0) - 64); // A=1, B=2, etc.
        }
    }
    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return sum;
}

export const numerologyDescriptions = {
    lifePathNumbers: {
        1: "Independent, leader, pioneering.",
        2: "Diplomatic, sensitive, cooperative.",
        3: "Creative, expressive, social.",
        4: "Practical, disciplined, hardworking.",
        5: "Adventurous, freedom-loving, dynamic.",
        6: "Responsible, caring, nurturing.",
        7: "Analytical, introspective, intellectual.",
        8: "Ambitious, efficient, authoritative.",
        9: "Compassionate, generous, humanitarian."
    },
    expressionNumbers: {
        1: "Unique talents for leadership and initiative.",
        2: "Natural ability to work with others and mediate.",
        3: "Gifted in communication and creative expression.",
        4: "Strong organizational skills and attention to detail.",
        5: "Adaptable and thrives in dynamic environments.",
        6: "Excellent at nurturing and supporting others.",
        7: "Deep thinker with a quest for knowledge.",
        8: "Effective in management and business endeavors.",
        9: "Inherent desire to make the world a better place."
    },
    soulUrgeNumbers: {
        1: "Desire to lead and innovate.",
        2: "Desire for harmony and partnership.",
        3: "Desire to express and communicate.",
        4: "Desire for stability and order.",
        5: "Desire for freedom and variety.",
        6: "Desire to care and nurture others.",
        7: "Desire for knowledge and understanding.",
        8: "Desire for success and recognition.",
        9: "Desire to help and serve humanity."
    }
}