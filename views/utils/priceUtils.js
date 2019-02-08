export const calculatePrice = (area) => {
    let finalPrice = 0;
    if (area > 50) {
        const additionalArea = Math.min(area, 1000);
        finalPrice += additionalArea * 0.2;
    }
    if (area > 1000) {
        const additionalArea = area - 1000;
        finalPrice += additionalArea * 0.1;
    }
    return Math.round(finalPrice * 100) / 100

};