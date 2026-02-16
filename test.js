// se importan todas las funciones al principio
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


// tests
test('adds 14 + 9 to equal 23', () => {
    expect(sum(14, 9)).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected); 
});

test("One dollar should be 146.26 yens", function() {
    const yens = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5; 
    expect(yens).toBeCloseTo(expected, 2); 
});

test("1000 yens should be approximately 5.55 pounds", function() {
    const pounds = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected, 2);
});