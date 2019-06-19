import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.page.html',
  styleUrls: ['./member-detail.page.scss'],
})
export class MemberDetailPage implements OnInit {
  public memberData

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.memberData = this.router.getCurrentNavigation().extras.state.member;
        console.log(JSON.stringify(this.memberData));
      }
    });
  }

  closeDetailScreen() {
    this.location.back()
  }
  ngOnInit() {
  }

}
