import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Givaldo';

  userDate = {
    email: 'givaldo@email.com',
    role: 'Admin',
  };

  title = 'Curso-Angular';
}
