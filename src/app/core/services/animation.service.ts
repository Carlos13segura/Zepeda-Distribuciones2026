import { Injectable } from '@angular/core';
import * as anime from 'animejs';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  
  /**
   * Staggered entrance animation for a list of elements.
   * Useful for product lists or menu items.
   */
  staggeredEntrance(targets: string | HTMLElement[], delay: number = 100) {
    return (anime as any)({
      targets,
      translateY: [30, 0],
      opacity: [0, 1],
      delay: (anime as any).stagger(delay),
      duration: 800,
      easing: 'easeOutElastic(1, .8)'
    });
  }

  /**
   * Fade in animation for a single element or group.
   */
  fadeIn(targets: string | HTMLElement, duration: number = 1000) {
    return (anime as any)({
      targets,
      opacity: [0, 1],
      duration,
      easing: 'easeInOutQuad'
    });
  }

  /**
   * Gentle pop effect, good for buttons or icons on load.
   */
  elementPop(targets: string | HTMLElement) {
    return (anime as any)({
      targets,
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutBack'
    });
  }

  /**
   * Realistic hover effect setup (scale + subtle shadow).
   * Note: This usually is done via CSS, but Anime.js can handle it for complex multi-property paths.
   */
  cardHover(element: HTMLElement, isHovering: boolean) {
    (anime as any).remove(element);
    return (anime as any)({
      targets: element,
      scale: isHovering ? 1.05 : 1,
      boxShadow: isHovering 
        ? '0 20px 40px rgba(0,0,0,0.15)' 
        : '0 5px 15px rgba(0,0,0,0.08)',
      duration: 300,
      easing: 'easeOutQuad'
    });
  }

  /**
   * Slide in from a specific direction.
   */
  slideIn(targets: string | HTMLElement, direction: 'left' | 'right' | 'top' | 'bottom' = 'bottom') {
    const translateProp = (direction === 'left' || direction === 'right') ? 'translateX' : 'translateY';
    const offset = (direction === 'left' || direction === 'top') ? -50 : 50;

    return (anime as any)({
      targets,
      [translateProp]: [offset, 0],
      opacity: [0, 1],
      duration: 700,
      easing: 'easeOutCubic'
    });
  }
}
