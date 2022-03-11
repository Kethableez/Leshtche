import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormService } from 'src/app/core/services/form.service';
import { RootState } from 'src/app/core/store/app.states';
import { AuthActions } from 'src/app/core/store/auth';

@Component({
  selector: 'majk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [FormService]
})
export class LoginComponent {
  constructor(private builder: FormBuilder, protected formService: FormService, private store$: Store<RootState>) {}

  loginForm = this.builder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  isFieldValid(fieldName: string) {
    return this.formService.isFieldValid(fieldName, this.loginForm);
  }

  login() {
    const payload = this.loginForm.value;

    this.store$.dispatch(AuthActions.login({ loginPayload: payload }));
  }
}
