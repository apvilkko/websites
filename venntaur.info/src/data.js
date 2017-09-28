import R from 'ramda';

const data = {
  discography: {},
  djmixes: {},
};

const getJson = url => fetch(url).then(res => res.json());

const sort = R.pipe(
  R.sortBy(R.prop('date')),
  R.reverse,
);

export const fetchData = () =>
  Promise.all([
    getJson('discography.json')
      .then(R.pipe(
        R.path(['discography']),
        R.groupBy(R.prop('type')),
        R.toPairs,
        R.map(item => [
          item[0],
          sort(item[1]),
        ]),
        R.fromPairs,
        ret => { data.discography = ret; },
      )),
    getJson('djmixes.json')
      .then(R.pipe(
        R.path(['djmixes']),
        sort,
        ret => { data.djmixes = ret; },
      ))
  ]);


export default data;
