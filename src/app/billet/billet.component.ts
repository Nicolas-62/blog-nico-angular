import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-billet',
  templateUrl: './billet.component.html',
  styleUrls: ['./billet.component.css']
})
export class BilletComponent implements OnInit {
  
  @Input() billet_title: string;
  @Input() billet_content: string;
  @Input() billet_loveIts: number;
  @Input() billet_created_at: Date;

  constructor() { }

  ngOnInit() {
  }
  getColor(){
  	if(this.billet_loveIts > 0){
  		return 'green';
  	}else if(this.billet_loveIts < 0){
  		return 'red';
  	}else{
  		return 'gray';
  	}
  }
  onLoveIt(){
  	this.billet_loveIts++;
  }
  onDontLoveIt(){
  	this.billet_loveIts--;
  }

}
