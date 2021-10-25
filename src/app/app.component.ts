import { Component, OnInit, Inject, ViewEncapsulation   } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private dom, private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title, private metaService: Meta) {
}

ngOnInit() {
  const hostName = 'http://www.arogiyamstores.com';
  this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      const rt = this.getChild(this.activatedRoute);
      rt.data.subscribe(data => {
        this.titleService.setTitle(data.title);

        if (data.descrption) {
          this.metaService.updateTag({ name: 'description', content: data.descrption });
        } else {
          this.metaService.removeTag('name=\'description\'');
        }

        if (data.robots) {
          this.metaService.updateTag({ name: 'robots', content: data.robots });
        } else {
          this.metaService.updateTag({ name: 'robots', content: 'follow,index' });
        }

        if (data.ogUrl) {
          this.metaService.updateTag({ property: 'og:url', content: data.ogUrl });
        } else {
          this.metaService.updateTag({ property: 'og:url', content: this.router.url });
        }

        if (data.ogTitle) {
          this.metaService.updateTag({ property: 'og:title', content: data.ogTitle });
        } else {
          this.metaService.removeTag('property=\'og:title\'');
        }

        if (data.ogDescription) {
          this.metaService.updateTag({ property: 'og:description', content: data.ogDescription });
        } else {
          this.metaService.removeTag('property=\'og:description\'');
        }

        if (data.ogImage) {
          this.metaService.updateTag({ property: 'og:image', content: data.ogImage });
        } else {
          this.metaService.removeTag('property=\'og:image\'');
        }

        if (data.canonical) {
          this.updateCanonicalUrl(hostName + data.canonical);
        } else {
          this.updateCanonicalUrl(hostName + this.router.url);
        }
      });
    });
}
getChild(activatedRoute: ActivatedRoute) {
  if (activatedRoute.firstChild) {
    return this.getChild(activatedRoute.firstChild);
  } else {
    return activatedRoute;
  }
}
updateCanonicalUrl(url: string){
  const head = this.dom.getElementsByTagName('head')[0];
  let element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`) || null;
  if (element == null) {
    element = this.dom.createElement('link') as HTMLLinkElement;
    head.appendChild(element);
  }
  element.setAttribute('rel', 'canonical');
  element.setAttribute('href', url);
  }
}
