import alt from '../alt';
import AddCharacterActions from '../actions/AddCharacterActions';

class AddCharacterStore {
	constructor() {
		this.bindActions(AddCharacterActions);
		this.name = '';
		this.gender = '';
		this.helpBlock = '';
		this.nameValidationState = '';
		this.genderValidationState = '';
	}

	onAddCharacterSuccess(successMessage) {
		this.nameValidationState = 'has-success';
		this.helpBlock = successMessage;
	}

	onAddCharacterFail(errorMessage) {
		this.nameValidationState = 'has-error';
		this.helpBlock = errorMessage;
	}

	onUpdateName(event) {
		this.name = event.target.value;
		this.nameValidationState = '';
		this.helpBlock = '';
	}

	onUpdateGender(event) {
		this.gender = event.target.value;
		this.genderValidationState = '';
	}

	onInvalidName() {
		this.helpBlock = 'Please enter a character name.';
		this.nameValidationState = 'has-error';
	}

	onInvalidGender() {
		this.genderValidationState = 'has-error';
	}
}

export default alt.createStore(AddCharacterStore);