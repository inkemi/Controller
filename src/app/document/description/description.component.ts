import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/first';
import {AngularFireStorage} from 'angularfire2/storage';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  demos: Observable<any[]>;
  onSelect: boolean;
  btnDescription = 'Add';
  description1: '';
  description2: '';
  demoU: string;
  profileUrl: Observable<string | null>;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  demoImage: string;
  storageURL = `https://firebasestorage.googleapis.com//v0/b/showroom-50743.appspot.com/o`;
  imgURL: string;

  public constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
    this.demos = db.collection('demo').valueChanges();
  }

  public addDescription() {
    const  demosCollection = this.db.collection('demo');
    demosCollection.add({demoImage: (this.storageURL + this.imgURL), description1: this.description1, description2: this.description2});
    this.description1 = '';
    this.description2 = '';
  }

  onDemoSelect(demo){
    demo.description1 = demo.description1;
    demo.description2 = demo.description2;
    this.onSelect = true;
    this.demoU = `${demo.description1} ${demo.description2}`;
    console.log(demo.description1 + ' ' + demo.description2);
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = '/demos/' + file.name;
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    this.downloadURL = task.downloadURL();
  }

  ngOnInit() {
  }

}
