import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

// https://medium.com/ngconf/animating-angular-route-transitions-ef02b871cc30
export const routeTransitionAnimations = trigger('triggerName',
  [transition('One => Two, Two => Three, Three => Four', [
    style({position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({left: '-100%', opacity: 0})]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1s ease-out', style({left: '100%', opacity: 0}))]),
      query(':enter', [animate('1s ease-out', style({left: '0%', opacity: 1}))])
    ]),
    query(':enter', animateChild())
    ]), transition('Four => Three, Three => Two, Two => One, Three => One', [
    style({position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({left: '-100%', opacity: 0})]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1s ease-out', style({left: '100%', opacity: 0}))]),
      query(':enter', [animate('1s ease-out', style({left: '0%', opacity: 1}))])
    ]),
    query(':enter', animateChild())
  ]),
    transition('One => Two, Two => Three, One => Three, One => Four', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [style({left: '-100%', opacity: 0})]),
      query(':leave', animateChild()),
      group([
        query(':leave', [animate('1s ease-out', style({left: '100%', opacity: 0}))]),
        query(':enter', [animate('1s ease-out', style({left: '0%', opacity: 1}))])
      ]),
      query(':enter', animateChild())
    ]),
    transition('Three => Two, Two => One, Three => One, Two => Four', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [style({left: '-100%', opacity: 0})]),
      query(':leave', animateChild()),
      group([
        query(':leave', [animate('1 ease-out', style({left: '100%', opacity: 0}))]),
        query(':enter', [animate('1s ease-out', style({left: '0%', opacity: 1}))])
      ]),
      query(':enter', animateChild())
    ]),
    transition('Four => Three, Four => Two, Four => One', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [style({left: '-100%', opacity: 0})]),
      query(':leave', animateChild()),
      group([
        query(':leave', [animate('1s ease-out', style({left: '100%', opacity: 0}))]),
        query(':enter', [animate('1s ease-out', style({left: '0%', opacity: 1}))])
      ]),
      query(':enter', animateChild())
    ])
  ])
;
