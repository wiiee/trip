import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../providers/user';
import { User } from '../../entity/user';
import { FormPage } from '../../pages/shared/form';

/**
 * Generated class for the LogInComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'log-in',
  templateUrl: 'log-in.html'
})
export class LogInComponent extends FormPage {
  user: User = new User("", "", "");
  isProcessing: boolean = false;

  constructor(public fb: FormBuilder, public events: Events, public userService: UserService) {
    super(null);
    this.formErrors = {
      'id': [],
      'password': []
    };
    this.validationMessages = {
      'id': {
        'required': '请输入手机号码',
        'pattern': '请输入11位手机号码'
      },
      'password': {
        'required': '请输入密码',
        'minlength': "密码至少6位"
      }
    };

    this.buildForm();
  }

  onSubmit() {
    this.errorMsg = "";
    this.isProcessing = true;
    this.user = this.form.value;
    this.user.confirmPassword = this.user.password;
    this.userService.logIn(this.user)
      .then(data => {
        this.isProcessing = false;
        if (data.isSuccessful) {
            this.events.publish("user:login");
        }
        else {
          this.errorMsg = data.message;
        }
      });
  }

  buildForm(): void {
    this.form = this.fb.group({
      'id': [this.user.id, [
        Validators.required,
        Validators.pattern("[0-9]{11}")
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6)
      ]]
    });

    this.form.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

}
