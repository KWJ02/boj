// 문제 : 세탁소 사장 동혁
// 5달러 이하의 거스름돈을 쿼터, 다임, 니켈, 페니의 개수로 반환

const solution = (change) => {
	let money = Number(change);

	let quater = Math.floor(money / 25);
	money -= 25 * quater;
	let dime = Math.floor((money % 25) / 10);
	money -= 10 * dime;
	let nickel = Math.floor((money % 10) / 5);
	money -= 5 * nickel;
	let penny = Math.floor((money % 5) / 1);

	console.log(quater, dime, nickel, penny);
};

/**
 *  개수를 구하고 money를 빼는 식으로 바꿨으니 floor내부의 모듈러 연산은 빼도 됨
    let quater = Math.floor(money / 25);
	money -= 25 * quater;
	let dime = Math.floor(money / 10);
	money -= 10 * dime;
	let nickel = Math.floor(money / 5);
	money -= 5 * nickel;
	let penny = Math.floor(money / 1);

*/

solution('194');
