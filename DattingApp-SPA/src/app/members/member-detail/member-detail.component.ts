import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/_models/user';
import { NgxGalleryOptions, NgxGalleryAnimation, NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
user: User;
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService, private alertify: AlertifyService,
        private route: ActivatedRoute) { }

  ngOnInit() {
    // this.loadUser();
    this.route.data.subscribe(data => { this.user = data['user']; });

    this.galleryOptions = [ {
  width: '500px',
  height: '500px',
  imagePercent: 100,
  thumbnailsColumns: 4,
  imageAnimation: NgxGalleryAnimation.Slide,
  preview: false
  }];

  this.galleryOptions = this.getImages();

}

getImages() {
  const imageUrls = [];
  for (let index = 0; index < this.user.photos.length; index++) {
    const element = this.user.photos[index];
     imageUrls.push({
       small: element.url,
       medium: element.url,
       big: element.url,
       description: element.description
     });
  }
  return imageUrls;
}

}
