import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.setMetaTags();
  }
  

  setMetaTags() {
    this.titleService.setTitle('Page');

    // Set meta tags
    this.meta.updateTag({ name: 'og:title', content: 'title' });
    this.meta.updateTag({ name: 'og:type', content: 'product.group' });
    this.meta.updateTag({ name: 'og:url', content: 'https://github.com/floman35' });
    this.meta.updateTag({ name: 'og:description', content: 'Description' });


  }

}
