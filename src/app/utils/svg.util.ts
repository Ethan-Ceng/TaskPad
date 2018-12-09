import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

export const loadSvgResources = (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {
  iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/menu.svg'));
};
