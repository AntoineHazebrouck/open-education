import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, MatToolbar, MatToolbarModule, MatButton],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
