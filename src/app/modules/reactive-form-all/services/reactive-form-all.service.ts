import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { tap, catchError, map } from 'rxjs/operators';
import { from, throwError } from 'rxjs';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Injectable({
	providedIn: 'root',
})
export class ReactiveFormAllService {
	host = environment.api.data_api;
	constructor(private http: HttpClient, private _authService: AuthService) {}

	errorHandler(error: HttpErrorResponse) {
		return throwError(error.message || 'Service Error');
	}

	SampleArrayValues(): string[] {
		return [
			'Apple',
			'Apricots',
			'Avocado',
			'Banana',
			'Blackberries',
			'Blackcurrant',
			'Blueberries',
			'Breadfruit',
			'Cherries',
			'Clementine',
			'Cranberries',
			'Feijoa',
			'Gooseberries',
			'Grapes',
			'Guava',
			'Jackfruit',
			'Lemon',
			'Longan',
			'Mango',
			'Mulberries',
			'Nectarine',
			'Orange',
			'Papaya',
			'Passion Fruit',
			'Plums',
			'Pomegranate',
			'Pummelo',
			'Raspberries',
			'Soursop',
			'Strawberries',
			'Watermelon',
		];
	}

	SampleArrayWithGroupValues(): any {
	
    const  pokemonGroups= [
			{
				name: 'Grass',
				pokemon: [
					{ value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
					{ value: 'oddish-1', viewValue: 'Oddish' },
					{ value: 'bellsprout-2', viewValue: 'Bellsprout' },
				],
			},
			{
				name: 'Water',
				pokemon: [
					{ value: 'squirtle-3', viewValue: 'Squirtle' },
					{ value: 'psyduck-4', viewValue: 'Psyduck' },
					{ value: 'horsea-5', viewValue: 'Horsea' },
				],
			},
			{
				name: 'Fire',
				disabled: true,
				pokemon: [
					{ value: 'charmander-6', viewValue: 'Charmander' },
					{ value: 'vulpix-7', viewValue: 'Vulpix' },
					{ value: 'flareon-8', viewValue: 'Flareon' },
				],
			},
			{
				name: 'Psychic',
				pokemon: [
					{ value: 'mew-9', viewValue: 'Mew' },
					{ value: 'mewtwo-10', viewValue: 'Mewtwo' },
				],
			},
		];
    return pokemonGroups;
	}
}
