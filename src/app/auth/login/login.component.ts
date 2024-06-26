import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ImageModule } from 'primeng/image';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [RouterModule, StyleClassModule, CheckboxModule, InputTextModule, ButtonModule, RippleModule, ImageModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})
export class LoginComponent {

}
