import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  items: Array<any> = [{
    title: 'miTitulo',
    year: '2017',
    coincidence: '95 % de coincidencia',
    age: '99+',
    duration: '9h 99 min.',
    tags: {
      tag1: 'comedy',
      tag2: 'Acción contrarreloj',
      tag3: 'Ciencia ficción'
    },
    subtitle: 'Ver temporada 1 ahora',
    sinopsis: 'Esta precuela de "Breaking Bad" nominada al Emmy narra la vida del picapleitos Jimmy McGill y su transformación en Saul Goodman, el abogado de moral laxa.',
    cast: {
      cast1: 'Jesse Plemons',
      cast2: 'Crispin Klander',
      cast3: 'Jimmi Simpson'
    },
    genre: {
      genre1: 'Thriller',
      genre2: 'Drama TV',
      genre3: 'Policiaca'
    },
    logo: '../../../assets/images/logo-breaking-bad.webp',
    video: '../../../assets/video/video_breaking-bad.mp4' 
  },
  {
    title: 'Narcos',
    year: '2016',
    coincidence: '91 % de coincidencia',
    age: '93+',
    duration: '11h 33 min.',
    tags: {
      tag1: 'trhiller',
      tag2: 'Acción policiaca',
      tag3: 'Drogas'
    },
    subtitle: 'Ver temporada 4 ahora',
    sinopsis: 'El presidente Gaviria tiene un trabajo para un antiguo compañero. Las nuevas tácticas del Bloque de Búsqueda preocupan a Pablo, pero también incomodan a Steve y Javier.',
    cast: {
      cast1: 'Keaneu Reaves',
      cast2: 'Joquín Peñagrande',
      cast3: 'La prima de Joaquín'
    },
    genre: {
      genre1: 'Comedy',
      genre2: 'Drama',
      genre3: 'Fantasy'
    },
    logo: '../../../assets/images/logo-narcos.webp',
    video: 'https://www.youtube.com/embed/eHdRMOAT-Lc?start=10'
  }
]


  constructor() { }

  getChapters(){
    return this.items;
}
}
