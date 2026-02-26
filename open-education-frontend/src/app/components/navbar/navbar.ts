import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbar, MatButton, MatSidenavContainer],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
