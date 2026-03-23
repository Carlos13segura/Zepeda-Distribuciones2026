import { Component, signal, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscar.html',
  styleUrls: ['./buscar.scss']
})
export class BuscarComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild('autocompleteList') autocompleteList!: ElementRef;
  
  searchQuery: string = '';
  suggestions: string[] = [];
  showSpinner = signal(false);
  showAutocomplete = signal(false);
  activeIndex = signal(-1);
  
  constructor(private router: Router) {}
  
  onInput(): void {
    if (this.searchQuery.length > 0) {
      this.suggestions = this.generateMockSuggestions(this.searchQuery);
      this.showAutocomplete.set(true);
    } else {
      this.suggestions = [];
      this.showAutocomplete.set(false);
    }
  }
  
  onKeyDown(event: KeyboardEvent): void {
    if (!this.showAutocomplete()) return;
    
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const newIndex = this.activeIndex() < this.suggestions.length - 1 
        ? this.activeIndex() + 1 : 0;
      this.activeIndex.set(newIndex);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const newIndex = this.activeIndex() > 0 
        ? this.activeIndex() - 1 : this.suggestions.length - 1;
      this.activeIndex.set(newIndex);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (this.activeIndex() >= 0 && this.suggestions[this.activeIndex()]) {
        this.selectItem(this.suggestions[this.activeIndex()]);
      } else {
        this.performSearch();
      }
    } else if (event.key === 'Escape') {
      this.showAutocomplete.set(false);
    }
  }
  
  performSearch(): void {
    if (this.searchQuery.trim()) {
      this.showSpinner.set(true);
      this.showAutocomplete.set(false);
      setTimeout(() => {
        this.showSpinner.set(false);
        this.router.navigate(['/buscar'], { queryParams: { q: this.searchQuery } });
      }, 500);
    }
  }
  
  selectItem(suggestion: string): void {
    this.searchQuery = suggestion;
    this.showAutocomplete.set(false);
    this.activeIndex.set(-1);
    this.performSearch();
  }
  
  private generateMockSuggestions(query: string): string[] {
    const allSuggestions = [
      'Baterías LTH',
      'Baterías de auto',
      'Baterías para moto',
      'Baterías de gel',
      'Filtros de aceite',
      'Filtros de aire',
      'Lubricantes 5W30',
      'Lubricantes 10W40',
      'Moto baterías',
      'Evolution batteries'
    ];
    
    const lowerQuery = query.toLowerCase();
    return allSuggestions.filter(s => s.toLowerCase().includes(lowerQuery));
  }
}
