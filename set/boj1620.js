// 문제 : 나는야 포켓몬 마스터 이다솜
// [N, M]이 주어질 때, 1번부터 N+1번까지 번호 부여, M 개수만큼 출력
// M이 영어로 나오면 번호 출력, 번호로 나오면 이름 출력

const solution = (pokemons, list) => {
	const map = new Map();
	for (let i = 0; i < pokemons.length; i++) {
		map.set(pokemons[i], i + 1);
	}

	for (test of list) {
		// 숫자일 땐 배열에서
		if (!isNaN(test)) {
			console.log(pokemons[Number(test) - 1]);
		} else {
			// 문자일 땐 map
			console.log(map.get(test));
		}
	}
};

solution(
	[
		'Bulbasaur',
		'Ivysaur',
		'Venusaur',
		'Charmander',
		'Charmeleon',
		'Charizard',
		'Squirtle',
		'Wartortle',
		'Blastoise',
		'Caterpie',
		'Metapod',
		'Butterfree',
		'Weedle',
		'Kakuna',
		'Beedrill',
		'Pidgey',
		'Pidgeotto',
		'Pidgeot',
		'Rattata',
		'Raticate',
		'Spearow',
		'Fearow',
		'Ekans',
		'Arbok',
		'Pikachu',
		'Raichu',
	],
	['25', 'Raichu', '3', 'Pidgey', 'Kakuna']
);
