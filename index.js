export default class Watchdog {
	start(newTimer) {
		if (this.once && this.triggerCount > 0) {
			return;
		}

		const timer = newTimer ? newTimer : this.timer;
		this.countdown = setTimeout(() => {
			this.triggerCount += 1;
			this.triggerFcn();
		}, timer);
	}

	cancel() {
		if (this.countdown) {
			clearTimeout(this.countdown);
		}
	}

	reset(newTimer) {
		this.cancel();
		this.start(newTimer);
	}

	constructor(timer, triggerFcn, {once} = {}) {
		const defaultFcn = () => {
			this.failed = true;
			this.triggerCount += 1;
			console.log('Watchdog: Trigger function not provided.');
		};

		this.failed = false; // Used for testing purposes.
		this.triggerCount = 0; // Trigger count.
		this.timer = typeof timer === 'number' ? timer : 100;
		this.once = typeof once === 'boolean' ? once : false;
		this.triggerFcn =
			typeof triggerFcn === 'function' ? triggerFcn : defaultFcn;
	}
}
