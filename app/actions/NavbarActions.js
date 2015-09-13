import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {

	constructor() {
		this.generateActions(
			'updateOnlineUsers',
			'updateAjaxAnimation',
			'updateSearchQuery',
			'getCharacterCountSuccess',
			'getCharacterCountFail',
			'findCharacterSuccess',
			'findCharacterFail'
		);
	}

	findCharacter(payload) {
		$.ajax({
			url: '/api/character/search',
			data: {name: payload.searchQuery}
		})
		.done((data) => {
			assign(payload, data);
			this.actions.findCharacterSuccess(payload);
		})
		.fail(() => {
			this.actions.findCharacterFail(payload);
		});
	}

	getCharacterCount() {
		$.ajax({ url: '/api/characters/count'})
		.done((data) => {
			this.actions.getCharacterCountSuccess(data);
		})
		.fail((jqXhr) => {
			this.actions.getCharacterCountfail(jqXhr);
		})
	}
}

export default alt.createActions(NavbarActions);