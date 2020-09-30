import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

// https://medium.com/ngconf/animating-angular-route-transitions-ef02b871cc30
export const routeTransitionAnimations = trigger('triggerName',
  // Forandra på 'transitions' slepper å ha fleire linjer med kode med '<=>' operasjonen.
  [transition('One <=> Two, Two <=> Three, Three <=> Four, Four <=> One, Four <=> Two, Four <=> Three, One <=>Two, One<=>Three', [
    style({position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      })
    ]),
    query(':enter', [style({left: '-100%', opacity: 0})]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('.5s cubic-bezier(.35, 0, .25,1)', style({left: '100%', opacity: 0}))]),
      query(':enter', [animate('.5s cubic-bezier(.35, 0, .25,1)', style({left: '0%', opacity: 1}))])
    ]),
    query(':enter', animateChild())
    ])
  ])
;
