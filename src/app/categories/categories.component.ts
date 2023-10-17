import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categoriesContent: any[] = this.categoriesService.categoriesContent;
  playerName = '';
  catLabel = '';

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoriesService.getCategoriesContent();
    this.route.params.subscribe((params) => {
      this.categoriesService.playerName = params['playerName'];
      this.playerName = params['playerName'];
    });
  }

  navigateToQuiz(label: string) {
    this.router.navigate(['/quiz', label, this.playerName]);
  }
}
