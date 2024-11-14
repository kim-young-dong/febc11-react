function solution(genres, plays) {
  var answer = [];
  // 재생 횟수가 많은 장르 순서대로 정렬하는 로직에 사용될 객체
  const genreMap = new Map();

  // 장르별로 재생 횟수를 더하는 로직
  for (let i = 0; i < genres.length; i++) {
    if (!genreMap.has(genres[i])) {
      const newItem = {
        totalPlay: plays[i],
        list: [{ idx: i, play: plays[i] }],
      };
      genreMap.set(genres[i], newItem);
    } else {
      const item = genreMap.get(genres[i]);
      item.totalPlay += plays[i];
      item.list = [...item.list, { idx: i, play: plays[i] }].sort(
        (a, b) => b.play - a.play
      );
    }
  }
  const sortedGenres = [...genreMap.entries()].sort(
    (a, b) => b[1].totalPlay - a[1].totalPlay
  );

  for (const [genre, { list }] of sortedGenres) {
    answer = [...answer, ...list.slice(0, 2).map((v) => v.idx)];
  }

  return answer;
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
// 예상 결과 [4, 1, 3, 0]
