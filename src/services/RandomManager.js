/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
const max = 100;
const min = 1;
const RandomManager = { randomPassedCount: () => Math.floor(Math.random() * max) + min };

export default RandomManager;
