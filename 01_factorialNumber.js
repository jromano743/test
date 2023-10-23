const factorialCache = new Map();

async function calculateFactorialAsync(n) {
    if (factorialCache.has(n)) {//is in cache
        return factorialCache.get(n);
    }

    if (n === 0 || n === 1) {
        factorialCache.set(n, 1);
        return 1;
    }

    const subfactorial = await calculateFactorialAsync(n - 1);
    const result = n * subfactorial;

    factorialCache.set(n, result);

    return result;
}

// Test
const FACTORIAL_NUMBER = 5;

(async () => {
    try {
        const n = FACTORIAL_NUMBER;
        const factorial = await calculateFactorialAsync(n);

        console.log(`Factorial of ${n} is ${factorial}`);
    } catch (error) {
        console.error(error);
    }
})();
