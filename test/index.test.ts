import { test, expect } from 'vitest';
import '../src/index';

test('eval', () => {
  expect(globalThis.evalJs([{ String: "'hello' + 'world'" }]).String).toBe(
    'helloworld'
  );

  expect(globalThis.evalJs([{ String: '3 + 2' }]).Integer).toBe(5);
});
