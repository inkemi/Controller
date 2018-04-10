import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  btnDescription = 'Add';
  description = '';
  value = '';

  constructor(afDb: AngularFirestore) {
    const afList = afDb.collection('descriptions');
    afList.add({description: this.description = this.value});
    const listObservable = afList.snapshotChanges();
    listObservable.subscribe();


   /* const afList = afDb.collection('descriptions').add({'this.description'})
      .then(function (docRef) {
        console.log('Selite on kirjoitettu ID: ', +docRef.id);
      })
      .catch(function(error) {
        console.error('Virhe kirjoittaessa: ', error);
      });*/
  }

  ngOnInit() {
  }
  addValue() {
    console.log(this.value);
    console.log(this.description);
  }
}
