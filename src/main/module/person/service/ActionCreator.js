import { createAction } from '@reduxjs/toolkit';

class ActionCreator {
	constructor(prefix) {
		this.prefix = prefix;
	}
	setPrefix(prefix) {
		this.prefix = prefix;
	}
	getPrefix = () => this.prefix;
	create = type => createAction(`${this.prefix}/${type}`);
}

export default ActionCreator;