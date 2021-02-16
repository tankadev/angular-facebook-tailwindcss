import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  bodyClass = 'bg-gray-100 dark:bg-dark-main';

  constructor(
    private renderer: Renderer2
  ) {
    this.bodyClass.split(' ').forEach((className: string) => {
      this.renderer.addClass(document.body, className);
    });
  }

  ngOnDestroy(): void {
    this.bodyClass.split(' ').forEach((className: string) => {
      this.renderer.removeClass(document.body, className);
    });
  }

}
