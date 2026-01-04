import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface ContentMapping {
    [key: string]: string;
}

@Component({
    selector: 'app-buscar',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './buscar.html',
    styleUrls: ['./buscar.scss']
})
export class BuscarComponent {
    @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
    @ViewChild('autocompleteList') autocompleteList!: ElementRef<HTMLUListElement>;

    searchQuery = '';
    suggestions: string[] = [];
    activeIndex = -1;
    showSpinner = false;
    showAutocomplete = false;

    private contentMapping: ContentMapping = {
        "inicio": "/",
        "contacto": "/contacto",
        "productos": "/productos",
        "baterías": "/baterias",
        "filtros": "/filtros",
        "lubricantes": "/lubricantes",
        "moto-baterías": "/moto-bateria",
        "baterías alcalinas": "/baterias-alcalinas",
        "america batery": "/app-america-batery",
        "hi-tec": "/app-hi-tec",
        "diener": "/app-diener-batery",
        "battery lth": "/app-battery-lth",
        "evolution": "/app-battery-evolution",
        "evolution auxiliar": "/app-battery-evolution-auxiliar",
        "optima": "/app-battery-optima",
        "protect": "/app-battery-protect",
        "taxi": "/app-battery-taxi",
        "heavy duty": "/app-battery-heavy-duty",
        "ciclado profundo": "/app-battery-ciclado-profundo",
        "golf": "/app-battery-golf",
        "podadora": "/app-battery-podadora",
        "marina": "/app-battery-marina"
    };

    constructor(private router: Router) { }

    onInput(): void {
        this.showSpinner = true;

        setTimeout(() => {
            this.updateAutocomplete();
            this.showSpinner = false;
        }, 300);
    }

    updateAutocomplete(): void {
        const query = this.searchQuery.toLowerCase().trim();
        this.activeIndex = -1;

        if (query) {
            this.suggestions = Object.keys(this.contentMapping).filter(keyword =>
                keyword.includes(query)
            );
            this.showAutocomplete = this.suggestions.length > 0;
        } else {
            this.hideAutocomplete();
        }
    }

    hideAutocomplete(): void {
        this.suggestions = [];
        this.showAutocomplete = false;
    }

    selectItem(keyword: string): void {
        if (this.contentMapping.hasOwnProperty(keyword)) {
            this.searchQuery = keyword;
            this.hideAutocomplete();
            this.router.navigate([this.contentMapping[keyword]]);
        }
    }

    onKeyDown(event: KeyboardEvent): void {
        if (!this.suggestions.length) return;

        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                this.activeIndex = (this.activeIndex + 1) % this.suggestions.length;
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.activeIndex = (this.activeIndex - 1 + this.suggestions.length) % this.suggestions.length;
                break;
            case 'Enter':
                event.preventDefault();
                if (this.activeIndex >= 0) {
                    this.selectItem(this.suggestions[this.activeIndex]);
                } else if (this.searchQuery.trim()) {
                    this.performSearch();
                }
                break;
            case 'Escape':
                this.hideAutocomplete();
                break;
        }
    }

    performSearch(): void {
        if (this.searchQuery.trim()) {
            this.showSpinner = true;
            setTimeout(() => {
                console.log('Búsqueda realizada:', this.searchQuery);
                this.showSpinner = false;

                // Buscar coincidencia exacta o parcial
                const exactMatch = Object.keys(this.contentMapping).find(
                    key => key.toLowerCase() === this.searchQuery.toLowerCase()
                );

                if (exactMatch) {
                    this.router.navigate([this.contentMapping[exactMatch]]);
                } else if (this.suggestions.length > 0) {
                    this.router.navigate([this.contentMapping[this.suggestions[0]]]);
                }
            }, 500);
        }
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        if (this.searchInput && this.autocompleteList) {
            const clickedInside = this.searchInput.nativeElement.contains(target) ||
                this.autocompleteList.nativeElement.contains(target);
            if (!clickedInside) {
                this.hideAutocomplete();
            }
        }
    }
}
