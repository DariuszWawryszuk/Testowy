import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../service/admin.service';
import {User} from '../../model/model';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  roleList = [
    {
      value: 'user',
      description: 'Użytkownik'
    },
    {
      value: 'admin',
      description: 'Administrator'
    }
  ];
  registryForm: FormGroup;
  registryOK = false;
  registryError = false;
  errorDescription: string;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.registryForm = new FormGroup({
      email: new FormControl ('', [Validators.required, Validators.email]),
      name: new FormControl ('', Validators.required),
      password: new FormControl ('', Validators.compose([Validators.required, Validators.minLength(6)])),
      role: new FormControl ('', Validators.required),
      username: new FormControl ('', Validators.required)
    });
  }

  registry() {
    this.registryOK = false;
    this.registryError = false;
    // const user: User = this.registryForm.value;
    const user: User = {role: []} as User;
    user.email = this.registryForm.value.email;
    user.name = this.registryForm.value.name;
    user.password = this.registryForm.value.password;
    user.username = this.registryForm.value.username;
    // @ts-ignore
    user.role.push(this.registryForm.value.role);
    console.log(user);
    this.adminService.registry(user).subscribe( x => {
      console.log(x);
      this.registryOK = true;
    }, error => {
      console.log(error.error);
      this.registryError = true;
      if (error.error.message === 'Fail -> Username is already taken!') {
        this.errorDescription = 'Nazwa Użytkowniak jest już zajęta';
      } else {
        this.errorDescription = 'E-mail jest już zajęty';
      }
    });
  }
}
