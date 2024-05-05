import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(authService: AuthService, router: Router) {
    /*if (!authService.isLoggedIn()) {
      router.navigate(['login']);
    }*/
  }
}
