import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog de Nico';
  billets = [
	  {  
			title: "Mon premier post",
		  content: "Le code complet et fonctionnel doit être déposé dans un dépôt Git en ligne que les validateurs doivent pouvoir cloner. Vous fournirez le lien vers le dépôt dans le champs de commentaires. Le projet doit être fonctionnel une fois que le projet a été cloné et que la commande npm install a été saisie à la racine.",
		  loveIts: 1,
		  created_at: new Date('2019, 1, 23, 03:24:00')},
		{  
			title: "Mon deuxième post",
		  content: "Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January 1970 UTC.",
		  loveIts: -1,
		  created_at: new Date('2019, 2, 10, 11:11:10')},
		{
			title: "Mon troisième post",
		  content: "Integer value representing the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored (Unix Epoch; but consider that most Unix timestamp functions count in seconds).",
		  loveIts: 0,
		  created_at: new Date('2019, 7, 5, 20:51:10')},

	  ]
}
