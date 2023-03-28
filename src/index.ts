declare module 'extension' {
  global {
    // Add your global functions here
    function evalJs(args: Lavendeux.Value[]): Lavendeux.Value;
    function evalJsToString(args: Lavendeux.Value): string;
  }
}

globalThis.extension = (): Lavendeux.Extension => ({
  name: 'lavendeux-js',
  author: 'jf908',
  version: __VERSION__,
  functions: {
    js: 'evalJs',
  },
  decorators: {
    js: 'evalJsToString',
  },
});

function getStringValue(value: Lavendeux.Value): string {
  return Object.values(value)[0].toString();
}

function convertJsValue(arg: unknown): Lavendeux.Value {
  if (typeof arg === 'string') {
    return { String: arg };
  } else if (typeof arg === 'number') {
    return Number.isInteger(arg) ? { Integer: arg } : { Float: arg };
  } else if (typeof arg === 'boolean') {
    return { Boolean: arg };
  } else if (typeof arg === 'object') {
    return Array.isArray(arg)
      ? { Array: arg.map((x) => convertJsValue(x)) }
      : { String: JSON.stringify(arg) };
  } else {
    return { String: (arg as any).toString() };
  }
}

globalThis.evalJs = function (args) {
  return convertJsValue(eval(getStringValue(args[0])));
};

globalThis.evalJsToString = function (args) {
  return getStringValue(convertJsValue(eval(getStringValue(args))));
};
