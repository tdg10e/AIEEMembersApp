import { Component, OnInit } from '@angular/core';
import { MemberServiceService } from '../member-service.service'
import { Member } from '../models/Member'
import { Router, NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss']
})
export class MembersPage implements OnInit {
  public members: Array<any>;

  constructor(public memberService: MemberServiceService, public router: Router){
    this.loadMembers()
  }

  loadMembers(){
    var array = []
    this.memberService.load().then((result) => {
      for (var i = 0; i < result.length; i++) {
        array.push(new Member(result[i]));
        this.members = array
      }
    });
    
  }

  viewMemberDetails(member) {
    let navigationExtras: NavigationExtras = {
      state: {
        member: member
      }
    };
    this.router.navigate(['member-detail'], navigationExtras);
   
  }

  ngOnInit() {
  }

}
