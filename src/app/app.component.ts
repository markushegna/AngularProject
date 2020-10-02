import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {routeTransitionAnimations} from './animations/route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  title = 'AngularProject';

  // tslint:disable-next-line:typedef
  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData.animationState;
  }
}
