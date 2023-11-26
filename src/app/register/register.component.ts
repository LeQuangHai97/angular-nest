import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interface/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  user: User = {
    name: '',
    password: '',
    email: '',
    role: 'Thành viên',
    area: '',
    permissions: 0,
  };

  ngOnInit(): void {}

  create() {
    this.userService.create(this.user).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
