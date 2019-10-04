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
  /* retourne la couleur css à appliquer à la police en fonction 
   * du nombre de likes
   */
  getColor(){
  	if(this.billet_loveIts > 0){
  		return 'green';
  	}else if(this.billet_loveIts < 0){
  		return 'red';
  	}else{
  		return 'gray';
  	}
  }
  /* ajoute un like au post au clique du bouton 'j'adore !!!''
  */
  onLoveIt(){
  	this.billet_loveIts++;
  }
  /* enlève un like au post au clique du bouton 'Null null !!!''
  */  
  onDontLoveIt(){
  	this.billet_loveIts--;
  }

}
