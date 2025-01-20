import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'fir-prueba-ae07e',
        appId: '1:408390469190:web:b26699ef303009c48bac47',
        storageBucket: 'fir-prueba-ae07e.firebasestorage.app',
        apiKey: 'AIzaSyDkvhtWYpNE0ow1afUnqjm3NLG3igwfmSc',
        authDomain: 'fir-prueba-ae07e.firebaseapp.com',
        messagingSenderId: '408390469190',
        measurementId: 'G-SJLNETZ86G',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideAnimations(),
  ],
};
