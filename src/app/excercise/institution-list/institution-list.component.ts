import { Component, OnInit } from '@angular/core';
export class Institution{
  InstitutionId?: string;
  InstituteName: string;
  Country: Country;
  Profile: Profile;
  ProfileImage: string;
  Ranking: string;
  Reviews: Reviews[];
}
export class Country{
  Code: string;
  Name: string;
}
export class Profile{
  ProfileID: string;
  StartDate: string;
  EndDate: string;
  Section: Section[];
  Gallery: Gallery[];
}
export class Section{
  SectionId: string;
  SectionTitle: string;
  Content: string;
  Media: Media;
  Sequence: number;
}
export class Gallery{
  GalleryId: string;
  GalleryTitle: string;
  Media: Media;
  Sequence: number;
}
export class Media{
  MediaId: string;
  Title: string;
  URL: string;
}
export class Reviews{
  ReviewId: string;
  Title: string;
  Description: string;
  Rating: number;
  Users: Users;
}
export class Users{
UserId: string;
Name: string;
}
@Component({
  selector: 'app-institution-list',
  templateUrl: './institution-list.component.html',
  styleUrls: ['./institution-list.component.css']
})
export class InstitutionListComponent implements OnInit {
institutions: Institution[] = [
  {InstitutionId: '11111', InstituteName: 'Madras University',
  Country: {Code: '+91', Name: 'India'},
  Profile: {ProfileID: '3421283', StartDate: '1885', EndDate: '2020',
          Section: [{SectionId: '341', SectionTitle: 'Arts', Content: 'Arts & Science College',
                    Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24},
                    {SectionId: '341', SectionTitle: 'Arts', Content: 'Arts & Science College',
                    Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24}],
          Gallery: [{GalleryId: 'Gal12', GalleryTitle: 'Award photos',
                    Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24},
                    {GalleryId: 'Gal12', GalleryTitle: 'Award photos',
                    Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24}
                  ]},
  ProfileImage: 'assets/images/products/export-products/groundnut_marachekku_oil_export.png', Ranking: '3',
  Reviews: [{ReviewId: 'Rev21', Title: 'Awards Review', Description: 'Excellent! Award review Publishing' , Rating: 4,
            Users: {UserId: 'UID21', Name: 'Aravind'}},
            {ReviewId: 'Rev22', Title: 'Awards Review', Description: 'Excellent! Award review Publishing' , Rating: 5,
            Users: {UserId: 'UID22', Name: 'Arun'}}]
  },

  {InstitutionId: '22222', InstituteName: 'Anna University',
  Country: {Code: '+91', Name: 'India'},
  Profile: {ProfileID: '3421283', StartDate: '1888', EndDate: '2019',
          Section: [{SectionId: '341', SectionTitle: 'Arts', Content: 'Arts & Science College',
                    Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24},
                    {SectionId: '341', SectionTitle: 'Arts', Content: 'Arts & Science College',
                    Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24}],
          Gallery: [{GalleryId: 'Gal12', GalleryTitle: 'Award photos',
                    Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24},
                    {GalleryId: 'Gal12', GalleryTitle: 'Award photos',
                    Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24}
                  ]},
  ProfileImage: 'assets/images/products/export-products/groundnut_marachekku_oil_export.png', Ranking: '4',
  Reviews: [{ReviewId: 'Rev21', Title: 'Awards Review', Description: 'Good! Awards review' , Rating: 3,
            Users: {UserId: 'UID21', Name: 'Aravind'}},
            {ReviewId: 'Rev23', Title: 'Awards Review', Description: 'Excellent! Award review Publishing' , Rating: 4,
            Users: {UserId: 'UID23', Name: 'Aruna'}}]
  },

  {InstitutionId: '33333', InstituteName: 'Chidambaram University',
  Country: {Code: '+91', Name: 'India'},
  Profile: {ProfileID: '3421285', StartDate: '1890', EndDate: '2019',
        Section: [{SectionId: '341', SectionTitle: 'Arts', Content: 'Arts & Science College',
                  Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24},
                  {SectionId: '341', SectionTitle: 'Arts', Content: 'Arts & Science College',
                  Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24}],
        Gallery: [{GalleryId: 'Gal12', GalleryTitle: 'Award photos',
                  Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24},
                  {GalleryId: 'Gal12', GalleryTitle: 'Award photos',
                  Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24}
                ]},
ProfileImage: 'assets/images/products/export-products/groundnut_marachekku_oil_export.png', Ranking: '3',
Reviews: [{ReviewId: 'Rev21', Title: 'Awards Review', Description: 'Good! Awards review' , Rating: 5,
                        Users: {UserId: 'UID21', Name: 'Aravind'}}]
  },

  {InstitutionId: '44444', InstituteName: 'SRM University',
  Country: {Code: '+91', Name: 'India'},
  Profile: {ProfileID: '4421285', StartDate: '1990', EndDate: '2020',
            Section: [{SectionId: '341', SectionTitle: 'Arts', Content: 'Arts & Science College',
                      Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24},
                      {SectionId: '341', SectionTitle: 'Arts', Content: 'Arts & Science College',
                      Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24}],
          Gallery: [{GalleryId: 'Gal12', GalleryTitle: 'Award photos',
                      Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24},
                      {GalleryId: 'Gal12', GalleryTitle: 'Award photos',
                      Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24}
                  ]},
  ProfileImage: 'assets/images/products/export-products/groundnut_marachekku_oil_export.png', Ranking: '4',
  Reviews: [{ReviewId: 'Rev21', Title: 'Awards Review', Description: 'Good! Awards review' , Rating: 5,
            Users: {UserId: 'UID21', Name: 'Aravind'}},
            {ReviewId: 'Rev24', Title: 'Awards Review', Description: 'Excellent! Award review Publishing' , Rating: 3,
            Users: {UserId: 'UID24', Name: 'Arunai'}}]
  },

  {InstitutionId: '55555', InstituteName: 'MRS University',
  Country: {Code: '+91', Name: 'India'},
  Profile: {ProfileID: '4421285', StartDate: '1990', EndDate: '2020',
          Section: [{SectionId: '341', SectionTitle: 'Arts', Content: 'Arts & Science College',
                  Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24},
                  {SectionId: '341', SectionTitle: 'Arts', Content: 'Arts & Science College',
                  Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24}],
        Gallery: [{GalleryId: 'Gal12', GalleryTitle: 'Award photos',
                  Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24},
                  {GalleryId: 'Gal12', GalleryTitle: 'Award photos',
                  Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 24}
        ]},
    ProfileImage: 'assets/images/products/export-products/groundnut_marachekku_oil_export.png', Ranking: '3',
    Reviews: [{ReviewId: 'Rev21', Title: 'Awards Review', Description: 'Good! Awards review' , Rating: 4,
            Users: {UserId: 'UID21', Name: 'Aravind'}}]
  },

  {InstitutionId: '66666', InstituteName: 'Aaditiya University',
  Country: {Code: '+91', Name: 'India'}, Profile: {ProfileID: '4421285', StartDate: '1889', EndDate: '2018',
  Section: [{SectionId: '321', SectionTitle: 'Arts', Content: 'Arts & Science College',
            Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 20}],
  Gallery: [{GalleryId: 'Gal12', GalleryTitle: 'Award photos',
            Media: {MediaId: '12', Title: 'Result Announce', URL: 'www.reseultsrelease.com'}, Sequence: 22}]},
  ProfileImage: 'assets/images/products/export-products/groundnut_marachekku_oil_export.png', Ranking: '2',
  Reviews: [{ReviewId: 'Rev21', Title: 'Awards Review', Description: 'Good! Awards review' , Rating: 5,
            Users: {UserId: 'UID21', Name: 'Aravind'}},
            {ReviewId: 'Rev26', Title: 'Awards Review', Description: 'Excellent! Award review Publishing' , Rating: 4,
            Users: {UserId: 'UID26', Name: 'Arunambikai'}}]
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
