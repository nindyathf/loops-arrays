function sumOfTripledEvens(array) {
    const A = array.filter((num) => num % 2 === 0);
    const B = A.map((num) => num * 3);
    const total = B.reduce((acc, curr) => acc+curr);
    return total;
}

const angkaTes = [1, 2, 3, 4, 5];
console.log(sumOfTripledEvens(angkaTes));