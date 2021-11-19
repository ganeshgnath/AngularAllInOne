import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateInputMatcherDirective } from 'src/app/shared/directives/error-state-input-matcher.directive';
import { ReactiveFormAllService } from '../../services/reactive-form-all.service';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
	selector: 'app-all-samples-included',
	templateUrl: './all-samples-included.component.html',
	styleUrls: ['./all-samples-included.component.scss'],
})
export class AllSamplesIncludedComponent implements OnInit {
	hide = true;
	chide = true;
	allFormGroup!: FormGroup;
	matcher = new ErrorStateInputMatcherDirective();

	// for phone number validation obj starts
	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	// for phone number validation obj ends

	// for auto fill validation obj starts
	options: string[] = [];
	filteredOptions!: Observable<string[]>;
	// for auto fill validation obj ends

	// for select with grouping validation obj starts
	pokemonGroups!: PokemonGroup[];
	// for select with grouping validation obj ends

	constructor(private formBuilder: FormBuilder, private _reactiveFormAllService: ReactiveFormAllService) {}

	ngOnInit() {
		this.allFormGroup = this.formBuilder.group({
			fname: ['', Validators.required],
			lname: [''],
			email: ['', Validators.email],
			phone: ['', Validators.required],
			password: ['', Validators.required],
			cpassword: ['', Validators.required],
			textarea: ['', Validators.required],
			autocomplte: ['', Validators.required],
			selectoption: ['', Validators.required],
			selecton_with_group_option: ['', Validators.required],
			radio_btn: ['', Validators.required],
			checkbox: ['']
			
		});
		// for check value on every auto fill text changes
		this.autofill();
		this.pokemonGroups = this._reactiveFormAllService.SampleArrayWithGroupValues();
	}

	signUpSubmit(): void {
		const params = {
			email: this.allFormGroup.controls.username.value,
			password: this.allFormGroup.controls.password.value,
			name: this.allFormGroup.controls.name.value,
		};
	}
	/**
	 * Here we subscribe the auto fill input changes
	 */
	autofill() {
		this.options = this._reactiveFormAllService.SampleArrayValues();
		this.filteredOptions = this.allFormGroup.controls.autocomplte.valueChanges.pipe(
			startWith(''),
			map((value) => this._filter(value))
		);
	}

	/**
	 * This function used for auto fill
	 * @param value
	 * @returns
	 */
	private _filter(value: string): string[] {
		const filterValue = value.toLowerCase();

		return this.options.filter((option) => option.toLowerCase().includes(filterValue));
	}
}

interface Pokemon {
	value: string;
	viewValue: string;
}
interface PokemonGroup {
	disabled?: boolean;
	name: string;
	pokemon: Pokemon[];
}
