import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {

	constructor() {
		this.bindActions(NavbarActions);
		this.totalCharacters = 0;
		this.onlineUsers = 0;
		this.searchQuery = '';
		this.ajsxAnimationClass = '';
	}

	onFindCharacterSuccess(payload) {
		payload.router.transitionTo('/characters/' + payload.characterId);
	}

	onFindCharacterFail(payload) {
		payload.searchForm.classList.add('shake');
		setTimeout(() => {
			payload.searchForm.classList.remove('shake');
		}, 1000);
	}

	onUpdateOnlineUsers(data) {
		this.onlineUsers = data.onlineUsers;
	}

	onUpdateAjaxAnimation(className) {
		this.ajaxAnimationClass = className // fadein or fadeout
	}

	onUpdateSearchQuery(event) {
		this.searchQuery = event.target.value;
	}

	onGetCharacterCountSuccess(data) {
		this.totalCharacters = data.count;
	}

	onGetCharacterCountFail(jqXhr) {
		toast.error(jqXhr.responseJSON.message);
	}
}

export default alt.createStore(NavbarStore);