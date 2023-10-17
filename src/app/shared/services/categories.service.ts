import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categoriesContent: any[] = [];
  playerName: string = '';

  constructor(private http: HttpClient) {}

  getCategoriesContent() {
    this.http
      .get('http://localhost:3000/categories')
      .subscribe((categories: any) => {
        for (const category of categories) {
          this.http
            .get(`http://localhost:3000/questions?categoryId=${category.id}`)
            .subscribe((questions: any) => {
              this.categoriesContent.push({
                id: category.id,
                categoryLabel: category.category,
                questions,
              });
            });
        }
      });
    console.log(this.categoriesContent);
  }
}
