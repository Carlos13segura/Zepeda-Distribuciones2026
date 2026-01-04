import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-lth-auxiliar',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './lth-auxiliar.html',
    styleUrl: './lth-auxiliar.scss',
})
export class LthAuxiliarComponent implements AfterViewInit, OnDestroy {
    @ViewChild('productSlider') sliderTrack!: ElementRef<HTMLElement>;

    currentSlide = 0;
    totalSlides = 5; // Based on HTML provided (5 slides)
    private observer: IntersectionObserver | null = null;
    private autoPlayInterval: any;
    private isTransitioning = false;

    // Touch handling
    private touchStartX = 0;
    private touchEndX = 0;

    ngAfterViewInit() {
        this.initAnimations();
        this.startAutoPlay();
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        this.pauseAutoPlay();
    }

    // --- Slider Logic ---

    nextSlide() {
        if (this.isTransitioning) return;
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSlider();
    }

    prevSlide() {
        if (this.isTransitioning) return;
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlider();
    }

    goToSlide(index: number) {
        if (this.isTransitioning || this.currentSlide === index) return;
        this.currentSlide = index;
        this.updateSlider();
    }

    private updateSlider() {
        if (!this.sliderTrack) return;

        this.isTransitioning = true;
        const translateX = -this.currentSlide * 100;
        this.sliderTrack.nativeElement.style.transform = `translateX(${translateX}%)`;

        setTimeout(() => {
            this.isTransitioning = false;
        }, 600);
    }

    startAutoPlay() {
        this.pauseAutoPlay(); // Clear existing
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    // Touch Events
    onTouchStart(e: TouchEvent) {
        this.touchStartX = e.touches[0].clientX;
        this.pauseAutoPlay();
    }

    onTouchEnd(e: TouchEvent) {
        this.touchEndX = e.changedTouches[0].clientX;
        this.handleSwipe();
        this.startAutoPlay();
    }

    private handleSwipe() {
        const swipeThreshold = 75;
        const diff = this.touchStartX - this.touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }

    // --- Animation Logic ---

    private initAnimations() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');

                    // Cascading animations for cards
                    if (entry.target.classList.contains('equipment-grid')) {
                        const cards = entry.target.querySelectorAll('.equipment-card');
                        cards.forEach((card, index) => {
                            (card as HTMLElement).style.animationDelay = `${index * 0.1}s`;
                            card.classList.add('animate-up');
                        });
                    }
                }
            });
        }, options);

        // Observe elements
        const sections = document.querySelectorAll('section');
        sections.forEach(s => this.observer?.observe(s));

        const animatables = document.querySelectorAll('.hero-content, .agm-info, .equipment-grid, .start-stop-content, .warranty-content');
        animatables.forEach(el => this.observer?.observe(el));
    }
}
