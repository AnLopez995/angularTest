import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ImageModule } from 'primeng/image';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [
		StyleClassModule,
		InputTextModule,
		ButtonModule,
		RippleModule,
		ImageModule,
		InputGroupModule,
		InputGroupAddonModule,
		InputNumberModule,
		DropdownModule,
		PasswordModule,
		DividerModule,
    RouterModule
	],
	templateUrl: './register.component.html',
	styleUrl: './register.component.css'
})
export default class RegisterComponent {
	roles = [{ rol: 'empleado' }, { rol: 'administrador' }, { rol: 'desarrollador' }];
}
