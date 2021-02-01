import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaserviceService {
  private defaultTitle = 'Angular Demo Title';
  private defaultKeywords = 'Angular, Universal, Example';
  private defaultDescription = 'Angular Universaland other  Example';
  private defaultRobots = 'index, follow';
  private defaultOgTitle = 'Angular Development';
  private defaultOgUrl = 'https://www.influxiq.com/';
  private defaultOgType = 'website';
  private defaultOgDescription = 'website';
  private defaultOgImage = 'https://www.influxiq.com/images/logo.webp';
  private defaultTwitterCard = 'summery .. ';

  constructor(private titleService: Title, private metaService: Meta) { }

  setmeta(data: any) {
    this.titleService.setTitle((data.title == null) ? this.defaultTitle : data.title);
    this.metaService.addTags([
      { name: 'keywords', content: (data.keywords == null) ? this.defaultKeywords : data.keywords }
    ]);
    this.metaService.addTags([
      { name: 'description', content: (data.description == null) ? this.defaultDescription : data.description }
    ]);
    this.metaService.addTags([
      { name: 'robots', content: (data.robots == null) ? this.defaultRobots : data.robots }
    ]);

    this.metaService.addTags([
      { name: 'og:title', content: (data.og_title == null) ? this.defaultOgTitle : data.og_title }
    ]);
    this.metaService.addTags([
      { name: 'og:url', content: (data.og_url == null) ? this.defaultOgUrl : data.og_url }
    ]);
    this.metaService.addTags([
      { name: 'og:type', content: (data.og_type == null) ? this.defaultOgType : data.og_type }
    ]);
    this.metaService.addTags([
      { name: 'og:description', content: (data.og_description == null) ? this.defaultOgDescription : data.og_description }
    ]);
    this.metaService.addTags([
      { name: 'og:image', content: (data.og_image == null) ? this.defaultOgImage : data.og_image }
    ]);
    this.metaService.addTags([
      { name: 'twitter:card', content: (data.twitter_card == null) ? this.defaultTwitterCard : data.twitter_card }
    ]);


    // this.metaService.addTags([
    //   { name:type 'keywords', content: 'Angular, Universal, Example' },
    //   { name: 'description', content: 'Angular Universal Example' },
    //   { name: 'robots', content: 'index, follow' },
    //   { name: 'og:title', content: 'Title' },
    //   { name: 'og:url', content: 'https://www.influxiq.com/' },
    //   { name: 'og:type', content: 'website' },
    //   { name: 'og:description', content: 'Your entertaining and descriptive copy here, if your meta description is good, use it.' },
    //   { name: 'og:image', content: 'https://www.influxiq.com/images/logo.webp' },
    //   { name: 'twitter:card', content: 'summery' },
    //   { name: 'twitter:site', content: '@nytimesbits' },
    //   { name: 'twitter:creator', content: '@nickbilton' },
    // ]);
  }
}