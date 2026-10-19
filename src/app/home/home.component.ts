import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Ludovica Schaerf | AI and Visual Culture Research');
  }
}
