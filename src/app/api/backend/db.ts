export const db = {
    galleries: {
        gallery1: {
            id: 'gallery1',
            name: 'The Metropolitan Museum of Art',
            location: `1000 Fifth Avenue New York City 10028`,
            photo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg',
            website: 'www.metmuseum.org'
        },
        gallery2: {
            id: 'gallery2',
            name: 'Le Louvre',
            location: `Musée du Louvre, 75001 Paris, France`,
            photo: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Louvre_aile_Richelieu.jpg',
            website: 'www.louvre.fr'
        },
        gallery3: {
            id: 'gallery3',
            name: 'The Prado',
            location: `Paseo del Prado, Madrid, Spain`,
            photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Madrid-1758045.jpg',
            website: 'www.museodelprado.es'
        }
    },
    drawingsByGalleries: {
        gallery1: {
            drawing5: 'drawing5'
        },
        gallery2: {
            drawing4: 'drawing4'
        },
        gallery3: {
            drawing1: 'drawing1',
            drawing2: 'drawing2',
            drawing3: 'drawing3'
        }
    },
    drawingsByArtists: {
      artist1: {
          drawing1: 'drawing1',
          drawing2: 'drawing2'
      },
        artist2: {
          drawing3: 'drawing3'
        },
        artist3: {
          drawing4: 'drawing4'
        },
        artist4: {
          drawing5: 'drawing5'
        }
    },
    drawings: {
        drawing1: {
            id: 'drawing1',
            name: ' La maja vestida',
            material: 'oil_on_canvas',
            url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Maja_vestida_%28Prado%29.jpg',
            dates: '1797–1800'
        },
        drawing2: {
            id: 'drawing2',
            name: 'Charles IV of Spain and His Family',
            material: 'oil_on_canvas',
            url: 'https://upload.wikimedia.org/wikipedia/commons/5/55/La_familia_de_Carlos_IV.jpg',
            dates: '1800-1801'
        },
        drawing3: {
            id: 'drawing3',
            name: 'The Fall of Man',
            material: 'oil_on_canvas',
            url: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Peter_Paul_Rubens_004.jpg',
            dates: '1628-1629'
        },
        drawing4: {
            id: 'drawing4',
            name: 'Mona Lisa',
            material: 'oil_on_poplar_panel',
            url: 'https://media.npr.org/assets/img/2012/02/02/mona-lisa_custom-31a0453b88a2ebcb12c652bce5a1e9c35730a132-s1400.webp',
            dates: 'c. 1503–1506'
        },
        drawing5: {
            id: 'drawing5',
            name: 'Washington Crossing the Delaware',
            material: 'oil_on_canvas',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg/2560px-Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg',
            dates: '1851'
        }
    },
    artists: {
        artist1: {
            id: 'artist1',
            firstName: 'Francisco',
            lastName: 'Goya',
            bornUTC: -7061080481000
        },
        artist2: {
            id: 'artist2',
            firstName: 'Peter',
            lastName: 'Paul Rubens',
            bornUTC: -12383838881000
        },
        artist3: {
            id: 'artist3',
            firstName: 'Leonardo',
            lastName: 'Da Vinci',
            bornUTC: -16337462400000
        },
        artist4: {
            id: 'artist4',
            firstName: 'Emanuel',
            lastName: 'Leutze',
            bornUTC: -4852608658000
        }
    },
    artistsByGalleries: {
        gallery1: {
            artist4: 'artist4'
        },
        gallery2: {
            artist3: 'artist3'
        },
        gallery3: {
            artist1: 'artist1',
            artist2: 'artist2'
        }
    }
}
