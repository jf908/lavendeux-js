# Lavendeux JS Extension

[Download](https://github.com/jf908/lavendeux-js/releases/latest/download/lavendeux-js.js)

A [Lavendeux](https://github.com/rscarson/Lavendeux) extension for evaluating JavaScript code. I'm still trying to figure out if this is a good idea.

> Note: There is currently no protection against infinite loops.

```
js("Array.from({ length: 10 }).map((_, i) => i * 2)")
```

evaluates to

```
[0,2,4,6,8,10,12,14,16,18]
```

Use it as a function `js('(() => (2+3))()')` or a decorator `'(() => (2+3))()' @js`.

JS types are converted to Lavendeux types so it's possible to mix and match JS code with Lavendeux expressions.
