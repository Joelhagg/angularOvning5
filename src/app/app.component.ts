import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ovning5';

  valueTrue: boolean = true

  click() {
    this.valueTrue = !this.valueTrue
  }

  imageUrl: string = "https://www.readyfortakeoff.se/wp-content/uploads/2020/09/Gotland-33.jpg"
}
