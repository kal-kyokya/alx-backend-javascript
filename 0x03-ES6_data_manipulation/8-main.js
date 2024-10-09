import cleanSet from './8-clean_set';

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', '', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
console.log(cleanSet(new Set(['banjovi', 'banaparte', 'banappetit', null, 'banana']), 'ba'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), []));
console.log(cleanSet(new Set(['banjovi', 'banaparte', 'banappetit', 8, 'banana']), 'ba'));
