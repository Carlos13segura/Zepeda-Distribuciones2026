import { Component, ElementRef, AfterViewInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lth-evolution',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lth-evolution.html',
  styleUrl: './lth-evolution.scss',
})
export class LthEvolutionComponent implements AfterViewInit {
  @ViewChild('featuresSlider') sliderRef!: ElementRef<HTMLElement>;

  slides = [
    {
      title: "VEHÍCULO APAGADO",
      description: "luces, protección contra robo, actualizaciones inalámbricas.",
      image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/nueva-bateria/slides/sl_img_evo-01.png?sfvrsn=178c4da0_0", // Updated with real image from HTML
    },
    {
      title: "AL CONDUCIR",
      description: "soporta los picos de energía.",
      image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/nueva-bateria/slides/sl_img_evo-02.png?sfvrsn=8e097a83_0",
    },
    {
      title: "EN EMERGENCIA",
      description: "suministra energía a los sistemas de 12v si la batería de alto voltaje falla.",
      image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/nueva-bateria/slides/sl_img_evo-03.png?sfvrsn=82291e56_1",
    },
  ];

  currentSlideIndex = 0;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object, private el: ElementRef) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      console.log("LTH Evolution page loaded successfully");

      this.initAnimations();
      this.initScrollEffects();
      this.initInteractiveElements();
      this.initSlider(); // Note: HTML might need updates to bind to this if strictly following JS structure, but adapted here.
      this.initScrollAnimations();
      this.initSliders(); // Feature slider drag
      this.initBackToTop();
      this.initSmoothScrolling();
      this.initContactBar();
      this.initPerformanceMonitoring();
      this.initLazyLoading();
      this.initAccessibility();

      // Video Player Enhancement
      const iframes = this.el.nativeElement.querySelectorAll(".video-iframe");
      iframes.forEach((iframe: any) => {
        iframe.addEventListener("load", function (this: any) {
          this.style.opacity = "1";
        });
      });
    }
  }

  // Animation initialization
  initAnimations() {
    const elements = this.el.nativeElement.querySelectorAll(".equipment-card, .hero-content, .agm-info-card");
    elements.forEach((el: HTMLElement, index: number) => {
      el.classList.add("loading");
      el.style.animationDelay = `${index * 0.1}s`;
    });
  }

  // Scroll effects
  initScrollEffects() {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar?.classList.add("navbar-scrolled");
      } else {
        navbar?.classList.remove("navbar-scrolled");
      }
    });

    const heroSection = this.el.nativeElement.querySelector(".hero-section");
    const optimizedSection = this.el.nativeElement.querySelector(".target-section"); // Target section includes features slider

    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY; // pageYOffset deprecated
      const rate = scrolled * -0.2; // Adjusted for subtle effect

      if (heroSection) {
        // Only if background is set via CSS url, manipulate position? 
        // Or transform. Custom script said backgroundPosition.
        heroSection.style.backgroundPosition = `center ${rate}px`;
      }

      if (optimizedSection) {
        optimizedSection.style.backgroundPosition = `center ${rate}px`;
      }
    });
  }

  // Interactive elements
  initInteractiveElements() {
    // Equipment cards hover effect
    const equipmentCards = this.el.nativeElement.querySelectorAll(".equipment-card");
    equipmentCards.forEach((card: HTMLElement) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-10px) scale(1.05)";
        this.style.boxShadow = "0 8px 25px rgba(0, 102, 204, 0.3)";
      });

      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)";
        this.style.boxShadow = "none";
      });
    });

    // Button click effects (Ripple)
    const buttons = this.el.nativeElement.querySelectorAll(".btn");
    buttons.forEach((button: HTMLElement) => {
      button.addEventListener("click", function (e: MouseEvent) {
        const ripple = document.createElement("span");
        const rect = (this as HTMLElement).getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";
        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  // Slider functionality (Adapted)
  initSlider() {
    const slideTitle = this.el.nativeElement.querySelector("#slide-title");
    const slideDescription = this.el.nativeElement.querySelector("#slide-description");
    const slideImage = this.el.nativeElement.querySelector("#slide-image");
    const slideDotsContainer = this.el.nativeElement.querySelector("#slide-dots");

    if (!slideTitle || !slideDotsContainer) return;

    const updateSlideContent = () => {
      const slide = this.slides[this.currentSlideIndex];

      slideTitle.style.opacity = "0";
      slideDescription.style.opacity = "0";
      slideImage.style.opacity = "0";

      setTimeout(() => {
        slideTitle.textContent = slide.title;
        slideDescription.textContent = slide.description;
        slideImage.src = slide.image;

        slideTitle.style.opacity = "1";
        slideDescription.style.opacity = "1";
        slideImage.style.opacity = "1";
      }, 300);

      Array.from(slideDotsContainer.children).forEach((dot: any, index) => {
        if (index === this.currentSlideIndex) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    };

    // Auto-advance
    setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
      updateSlideContent();
    }, 5000);

    // Initial
    updateSlideContent();
  }

  // Scroll Animations (Intersection Observer)
  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add classes for CSS animations
          entry.target.classList.add("animate-in");
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    // Observe specific elements plus generic sections
    const animateElements = this.el.nativeElement.querySelectorAll(".equipment-card, .hero-content, .agm-info-card, .scroll-animate, .gs-section"); // gs-section from HTML
    animateElements.forEach((el: Element) => {
      observer.observe(el);
    });
  }

  // Sliders Functionality (Drag for features-slider)
  initSliders() {
    const slider = this.sliderRef?.nativeElement;
    if (!slider) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  // Back to Top
  initBackToTop() {
    const backToTopBtn = this.el.nativeElement.querySelector(".back-to-top");
    if (!backToTopBtn) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "flex";
        backToTopBtn.style.opacity = "1";
      } else {
        backToTopBtn.style.opacity = "0";
        setTimeout(() => {
          if (window.scrollY <= 300) {
            backToTopBtn.style.display = "none";
          }
        }, 300);
      }
    });
  }

  initSmoothScrolling() {
    const links = this.el.nativeElement.querySelectorAll('a[href^="#"]');
    links.forEach((anchor: HTMLElement) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });
  }

  initContactBar() {
    const contactBar = document.querySelector(".contact-bar");
    if (!contactBar) return;
    const stickyOffset = (contactBar as HTMLElement).offsetTop;

    window.addEventListener("scroll", () => {
      if (window.scrollY > stickyOffset) {
        contactBar.classList.add("sticky");
      } else {
        contactBar.classList.remove("sticky");
      }
    });
  }

  initLazyLoading() {
    const images = this.el.nativeElement.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset['src'] || '';
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });
    images.forEach((img: Element) => imageObserver.observe(img));
  }

  initPerformanceMonitoring() {
    window.addEventListener("load", () => {
      const perf = window.performance;
      if (perf && perf.timing) {
        const loadTime = perf.timing.loadEventEnd - perf.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
      }
    });
  }

  initAccessibility() {
    // Placeholder
  }
}
