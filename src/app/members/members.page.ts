import { Component, OnInit } from '@angular/core';
import { MemberServiceService } from '../member-service.service'

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss']
})
export class MembersPage implements OnInit {
  public members: any;

  constructor(public memberService: MemberServiceService){
    this.loadMembers()
  }

  loadMembers(){
    this.memberService.load().then((result) => {
      this.members = result
      console.log(this.members)
    });
    
  }

  ngOnInit() {
  }

}
