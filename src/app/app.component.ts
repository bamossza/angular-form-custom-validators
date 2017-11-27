import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    registerForm: FormGroup;
    forbiddenUsernames = ['bamossza', 'admin', 'superadmin'];

    constructor() {
    }

    ngOnInit() {
        this.registerForm = new FormGroup({
            'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
            'password': new FormControl(null, Validators.required)
        });
    }

    forbiddenNames(control: FormControl): { [s: string]: boolean } {

        if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
            return {'forbiddenNames': true};
        }
        return null;
    }
}
