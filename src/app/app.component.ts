import { Component }          from '@angular/core';
import { TranslateService }   from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gardiary';
  languages = ['en', 'id'];
  selectedLanguage: string = 'en';

  constructor(private translate: TranslateService) {
    translate.addLangs(this.languages);

    translate.setDefaultLang(this.selectedLanguage);
    translate.use(this.selectedLanguage);
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
