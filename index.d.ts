/**
 * This class works like a watchdog timer, if it's not reset before timer finishes
 * it'll trigger a triggerFcn().
 * @argument timer integer, defaults to 100ms.
 * @argument triggerFcn function triggered when timer finishes.
 * @method start starts the timer.
 * @method cancel clears the timeout.
 * @method reset(timer) re-starts the timer, preventing triggerFcn execution.
 * If timer is provided it's used to set the new timeout
 *
 * @example
 * const wd = new Watchdog(5 * 1000, hidePlayerUI);
 * const eL = document.addEventListener('mousemove', wd.reset());
 * wd.start();
 */
export default class Watchdog {
	failed: boolean;
	triggerCount: number;
	timer: number;
	once: boolean;
	triggerFcn: any;
	countdown: NodeJS.Timeout;
	constructor(
		timer: any,
		triggerFcn: any,
		{
			once,
		}?: {
			once: any;
		},
	);
	start(newTimer: any): void;
	cancel(): void;
	reset(newTimer: any): void;
}
