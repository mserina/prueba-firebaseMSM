import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, docData, Firestore, updateDoc, deleteDoc } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Articulo } from '../modelos/articulo';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private afs = inject(Firestore);

  constructor() { }

  getCollection(path: string): Observable<Articulo[]> {
    const refCol = collection(this.afs, path);
    return collectionData(refCol, { idField: 'id' }) as Observable<Articulo[]>;
  }

  getDocument(path: string): Observable<Articulo> {
    const refDoc = doc(this.afs, path);
    return docData(refDoc) as Observable<Articulo>;
  }

  updateDocument(path: string, data: any) {
    const docRef = doc(this.afs,path);
    return updateDoc(docRef, data);
  }

  createDocument(path: string, data: any) {
    const colRef = collection(this.afs, path);
    return addDoc(colRef, data);
  }


  deleteDoc(path: string, id: string) {
    const colRef = doc(this.afs, path);
    return deleteDoc(colRef);
  }
}
