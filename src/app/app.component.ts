import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week2day3tasks';
  price=["$0","$9","$49"];
  data=[{heading:"Free",newprice:this.price[0],duration:"/month",user:"Single User",storage:"5GB Storage",project:"Unlimited Public Projects",access:"Community Access",privateproject:"Unlimited Private Projects",phone:"Dedicated Phone Support",domain:"Free Subdomain",reports:"Monthly Status Reports",button:"BUTTON",bold:false,show:false},
  {heading:"Plus",newprice:this.price[1],duration:"/month",user:"5 User",storage:"50GB Storage",project:"Unlimited Public Projects",access:"Community Access",privateproject:"Unlimited Private Projects",phone:"Dedicated Phone Support",domain:"Free Subdomain",reports:"Monthly Status Reports",button:"BUTTON",bold:true,show:false},
  {heading:"Pro",newprice:this.price[2],duration:"/month",user:"Unlimited User",storage:"150GB Storage",project:"Unlimited Public Projects",access:"Community Access",privateproject:"Unlimited Private Projects",phone:"Dedicated Phone Support",domain:"Free Subdomain",reports:"Monthly Status Reports",button:"BUTTON",bold:true,show:true}];  
}
