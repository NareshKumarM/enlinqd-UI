import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'], standalone: false,
})
export class LoaderComponent {
  public isLoading: Subject<boolean> = this.loaderService.isLoading;
  constructor(private loaderService: LoaderService) { }
}
