import { Component, OnInit } from '@angular/core';
import { GallaryService } from '../shared/services/gallary.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lang: string = 'ukr';
  constructor(private langService: GallaryService) { }

  ngOnInit() {
    console.log(this.langService.lang);
  }
  selectLang() {
    if (this.lang == 'ukr') {
      this.langService.lang = true;
    } else {
      this.langService.lang = false;
    }
  }
}
