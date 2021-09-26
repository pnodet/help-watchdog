import test from 'ava';
import Watchdog from './index.js';

test('Watchdog', t => {
	const wd = new Watchdog(1000, () => console.log('hello'));
	wd.start();
	t.pass();
});
