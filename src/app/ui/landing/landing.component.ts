import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  collaborationItems: CollaborationItem[];

  constructor(
    private meta: Meta,
    private titleService: Title,
   ) {
    this.collaborationItems=[
      {
        title: "string",
        subtitle: "string",
        description: "string",
        link: "string",
        linkName: "string",
        videoMp4Link: "string",
        videoWebmLink: "string",
        pictureWebpLink: "string",
        picturePngLink: "string",
      },
      {
        title: "string1",
        subtitle: "string1",
        description: "string1",
        link: "string1",
        linkName: "string1",
        videoMp4Link: "string1",
        videoWebmLink: "string1",
        pictureWebpLink: "string1",
        picturePngLink: "string1",
      }
    ]
  }

  ngOnInit() {
    this.setMetaTags();
  }
  setMetaTags() {
    this.titleService.setTitle('Nordynamic');

    // Set meta tags
    this.meta.updateTag({ name: 'og:title', content: 'Nordynamic' });
    this.meta.updateTag({ name: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'og:url', content: 'https://nordynamic.com/' });
    this.meta.updateTag({ name: 'og:description', content: 'Your ideal partner for product and service distribution in the Nordic market' });
    this.meta.updateTag({ name: 'og:image', content: 'https://nordynamic.com/assets/images/landing-img2.jpg' });

  }

}

export interface CollaborationItem {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  linkName: string;
  videoMp4Link: string;
  videoWebmLink: string;
  pictureWebpLink: string;
  picturePngLink: string;
}