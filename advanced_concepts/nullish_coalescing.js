// Nullish coalescing → similar to logical OR operator, but it allows for more specific handling of null or undefined values but not when the expression is simply falsy

// ↓ Values considered truthy ↓
if (true);
if ({});
if ([]);
if (42);
if ('0');
if ('false');
if (new Date());
if (-47);
if (12n);
if (3.14);
if (-3.14);
if (Infinity);
if (-Infinity);

// ↓ Values considered falsy ↓
if (undefined);
if (null);
if (0);
if ('');

// ↓ Syntax ↓
const x = '';

// `x` is the expression that is evaluated and checked for being null or undefined
// `'default'` is the fallback value that will be used if x is null or undefined
const val = x ?? 'default'; // → ''
