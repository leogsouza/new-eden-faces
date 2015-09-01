import alt from '../alt';

class AddCharacterActions {

	constructor() {
		this.generateActions(
			'addCharacterSuccess',
			'addCharacterFail',
			'updateName',
			'updateGender',
			'invalidName',
			'invalidGender'
		);
	}

	addCharacter(name, gender) {
		$.ajax({
			type: 'POST',
			url: '/api/characters',
			data:{name: name, gender: gender}
		})
			.done((data) => {
				this.actions.addCharacterSuccess(data.message)
			})
	}
}