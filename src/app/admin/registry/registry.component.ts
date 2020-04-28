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
  roleList = ['Admministrator', 'User'];
  registryForm: FormGroup;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.registryForm = new FormGroup({
      email: new FormControl ('', Validators.required),
      name: new FormControl ('', Validators.required),
      password: new FormControl ('', Validators.required),
      role: new FormControl ('', Validators.required),
      username: new FormControl ('', Validators.required)
    });
  }

  registry() {
    const user: User = this.registryForm.value;
    this.adminService.registry(user).subscribe( x => {
      console.log(x);
    });
  }
}
