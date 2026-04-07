function sumOfTripledEvens(array) {
    const A = array.filter((num) => num % 2 === 0);
    const B = A.map((num) => num * 3);
    const total = B.reduce((acc, curr) => acc+curr);
    return total;
}