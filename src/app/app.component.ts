import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { LoadingService } from './services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly _loadingService: LoadingService) {}

  public showLoading: boolean = false;
  ngOnInit(): void {
    this.listenLoading();
  }

  public listenLoading(): void {
    this._loadingService.loadingSub.pipe(delay(0)).subscribe((loading) => {
      this.showLoading = loading;
    });
  }
  title = 'iNutrix';
}
