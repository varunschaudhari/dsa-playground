function shipWithDays(weights, days) {
    // Function to check if the given capacity can ship the weights within the specified days
    function canShipWithCapacity(capacity) {
        let daysNeeded = 1, currentLoad = 0;
        for (const weight of weights) {
            if (currentLoad + weight > capacity) {
                daysNeeded++;
                currentLoad = 0;
            }
            currentLoad += weight;
        }
        return daysNeeded <= days;
    }

    // Initialize binary search bounds
    let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b, 0);

    // Perform binary search to find the minimum capacity
    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (canShipWithCapacity(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

// const weights = [3, 2, 2, 4, 1, 4], days = 3;
const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days = 5;
console.log(shipWithDays(weights, days));
