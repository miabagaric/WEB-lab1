const data = {
    "website": "BeautyShop",
    "categories": [
        { 
            "name": "Lice",
            "products": [
                { 
                    "name": "Tekući puder 30ml", 
                    "image": "images/puder.jpg", 
                    "price": "15.99€",
                    "description": "Lagani tekući puder za besprijekoran ten."
                },
                { 
                    "name": "Korektor 10ml", 
                    "image": "images/korektor.jpg", 
                    "price": "9.99€",
                    "description": "Izvrsno prekriva podočnjake, nepravilnosti i sitne bore."
                },
                { 
                    "name": "Rumenilo 5g", 
                    "image": "images/rumenilo.jpg", 
                    "price": "7.99€",
                    "description": "Dodaje svježinu i prirodan izgled licu."
                },
                { 
                    "name": "Highlighter 10g", 
                    "image": "images/highlighter.jpg", 
                    "price": "13.99€",
                    "description": "Highlighter za isticanje crta lica."
                },
                { 
                    "name": "Primer 20ml", 
                    "image": "images/primer.jpg", 
                    "price": "11.99€",
                    "description": "Primer za dugotrajnu postojanost šminke."
                }
            ]
        },
        { 
            "name": "Oči",
            "products": [
                { 
                    "name": "Maskara 8ml", 
                    "image": "images/maskara.jpg", 
                    "price": "12.99€",
                    "description": "Produžuje i daje volumen trepavicama."
                },
                { 
                    "name": "Paleta sjenila", 
                    "image": "images/sjenila.jpg", 
                    "price": "18.99€",
                    "description": "Različite nijanse za dnevni i večernji look."
                },
                { 
                    "name": "Olovka za oči", 
                    "image": "images/olovka_oci.jpg", 
                    "price": "5.99€",
                    "description": "Vodootporna olovka za precizno iscrtavanje očiju."
                },
                { 
                    "name": "Umjetne trepavice", 
                    "image": "images/trepavice.jpg", 
                    "price": "9.99€",
                    "description": "Umjetne trepavice za dramatičan izgled."
                },
                { 
                    "name": "Skidač šminke 350ml", 
                    "image": "images/skidac_sminke.jpg", 
                    "price": "6.99€",
                    "description": "Nježno uklanja šminku s očiju."
                }
            ]
        },
        { 
            "name": "Usne",
            "products": [
                { 
                    "name": "Mat ruž", 
                    "image": "images/ruz.jpg", 
                    "price": "10.99€",
                    "description": "Dugotrajni mat ruž u različitim nijansama."
                },
                { 
                    "name": "Sjajilo za usne", 
                    "image": "images/sjajilo.jpg", 
                    "price": "8.99€",
                    "description": "Sjajilo s hidratantnim učinkom."
                },
                { 
                    "name": "Balzam za usne", 
                    "image": "images/balzam.jpg", 
                    "price": "4.99€",
                    "description": "Balzam za usne s prirodnim sastojcima."
                },
                { 
                    "name": "Olovka za usne", 
                    "image": "images/olovka_usne.jpg", 
                    "price": "3.99€",
                    "description": "Olovka za usne za precizno iscrtavanje."
                },
                { 
                    "name": "Lip Tint", 
                    "image": "images/lip_tint.jpg", 
                    "price": "9.99€",
                    "description": "Lip Tint za dugotrajnu boju usana."
                }
            ]
        },
        { 
            "name": "Koža",
            "products": [
                { 
                    "name": "Hidratantna krema", 
                    "image": "images/krema.jpg", 
                    "price": "14.99€",
                    "description": "Dubinski hidratizira i obnavlja kožu."
                },
                { 
                    "name": "Serum za lice", 
                    "image": "images/serum.jpg", 
                    "price": "22.99€",
                    "description": "Serum s hijaluronskom kiselinom za mladenački izgled."
                },
                { 
                    "name": "Toner za lice", 
                    "image": "images/toner.jpg", 
                    "price": "12.99€",
                    "description": "Toner za osvježavanje i čišćenje kože. Pogodno za kožu sklonu aknama."
                },
                { 
                    "name": "Maska za lice", 
                    "image": "images/maska.jpg", 
                    "price": "9.99€",
                    "description": "Maska za lice s glinom za dubinsko čišćenje."
                },
                { 
                    "name": "Krema za sunčanje", 
                    "image": "images/suncanje.jpg", 
                    "price": "15.99€",
                    "description": "Krema za sunčanje sa SPF 50."
                }
            ]
        },
        { 
            "name": "Kosa",
            "products": [
                { 
                    "name": "Šampon 250ml", 
                    "image": "images/sampon.jpg", 
                    "price": "6.99€",
                    "description": "Šampon za svakodnevnu upotrebu."
                },
                { 
                    "name": "Regenerator 200ml", 
                    "image": "images/regenerator.jpg", 
                    "price": "7.99€",
                    "description": "Regenerator za sjajnu i mekanu kosu."
                },
                { 
                    "name": "Maska za kosu", 
                    "image": "images/maska_kosa.jpg", 
                    "price": "8.99€",
                    "description": "Maska za kosu za dubinsku njegu."
                },
                { 
                    "name": "Ulje za kosu", 
                    "image": "images/ulje.jpg", 
                    "price": "10.99€",
                    "description": "Ulje za kosu za sjaj i mekoću."
                },
                { 
                    "name": "Sprej za zaštitu od topline", 
                    "image": "images/sprej.jpg", 
                    "price": "9.99€",
                    "description": "Sprej za zaštitu kose od topline."
                }
            ]
        },
        { 
            "name": "Nokti",
            "products": [
                { 
                    "name": "Lak za nokte", 
                    "image": "images/lak.jpg", 
                    "price": "4.99€",
                    "description": "Lak za nokte u različitim bojama."
                },
                { 
                    "name": "Odstranjivač laka", 
                    "image": "images/skidac.jpg", 
                    "price": "3.99€",
                    "description": "Skidač laka bez acetona."
                },
                { 
                    "name": "Turpija za nokte", 
                    "image": "images/turpija.jpg", 
                    "price": "2.99€",
                    "description": "Turpija za oblikovanje noktiju."
                },
                { 
                    "name": "Gel lak za nokte", 
                    "image": "images/gel_lak.jpg", 
                    "price": "7.99€",
                    "description": "Gel lak za dugotrajand dizajn na noktima."
                },
                { 
                    "name": "Ulje za zanoktice", 
                    "image": "images/ulje_zanoktice.jpg", 
                    "price": "5.99€",
                    "description": "Ulje za njegu zanoktica."
                }
            ]
        },
        { 
            "name": "Tijelo",
            "products": [
                { 
                    "name": "Losion za tijelo", 
                    "image": "images/losion.jpg", 
                    "price": "11.99€",
                    "description": "Hidratantni losion za tijelo."
                },
                { 
                    "name": "Gel za tuširanje", 
                    "image": "images/gel.jpg", 
                    "price": "5.99€",
                    "description": "Osvježavajući gel za tuširanje."
                },
                { 
                    "name": "Piling za tijelo", 
                    "image": "images/piling.jpg", 
                    "price": "7.99€",
                    "description": "Piling za tijelo za glatku kožu."
                },
                { 
                    "name": "Krema za ruke", 
                    "image": "images/krema_ruke.jpg", 
                    "price": "4.99€",
                    "description": "Krema za ruke za hidrataciju."
                },
                { 
                    "name": "Anticelulitna krema", 
                    "image": "images/anticelulit.jpg", 
                    "price": "14.99€",
                    "description": "Krema za smanjenje celulita."
                }
            ]
        },
        { 
            "name": "Mirisi",
            "products": [
                { 
                    "name": "Parfem 50ml", 
                    "image": "images/parfem.jpg", 
                    "price": "29.99€",
                    "description": "Elegantni parfem za posebne prilike."
                },
                { 
                    "name": "Dezodorans", 
                    "image": "images/dezodorans.jpg", 
                    "price": "6.99€",
                    "description": "Dezodorans s dugotrajnim učinkom."
                },
                { 
                    "name": "Mirisna svijeća", 
                    "image": "images/svijeca.jpg", 
                    "price": "12.99€",
                    "description": "Mirisna svijeća za opuštanje."
                },
                { 
                    "name": "Mirisni sprej za tijelo", 
                    "image": "images/sprej_tijelo.jpg", 
                    "price": "8.99€",
                    "description": "Mirisni sprej za tijelo s dugotrajnim mirisom."
                },
                { 
                    "name": "Parfemski losion za tijelo", 
                    "image": "images/losion_parfem.jpg", 
                    "price": "14.99€",
                    "description": "Parfemski losion za tijelo za dugotrajan miris."
                }
            ]
        },
        { 
            "name": "Dodatci",
            "products": [
                { 
                    "name": "Četka za kosu", 
                    "image": "images/cetka.jpg", 
                    "price": "8.99€",
                    "description": "Četka za kosu za svakodnevnu upotrebu."
                },
                { 
                    "name": "Kopča", 
                    "image": "images/kopca.jpg", 
                    "price": "2.99€",
                    "description": "Kopča za kosu."
                },
                { 
                    "name": "Ogledalo", 
                    "image": "images/ogledalo.jpg", 
                    "price": "5.99€",
                    "description": "Ogledalo za šminkanje."
                },
                { 
                    "name": "Torbica za šminku", 
                    "image": "images/torbica.jpg", 
                    "price": "9.99€",
                    "description": "Torbica za šminku za putovanja."
                },
                { 
                    "name": "Set četkica za šminku", 
                    "image": "images/cetkice.jpg", 
                    "price": "15.99€",
                    "description": "Set četkica za šminku s različitim veličinama."
                }
            ]
        },
        { 
            "name": "Muškarci",
            "products": [
                { 
                    "name": "Gel za brijanje", 
                    "image": "images/gel_brijanje.jpg", 
                    "price": "5.99€",
                    "description": "Gel za brijanje za osjetljivu kožu."
                },
                { 
                    "name": "Aftershave", 
                    "image": "images/balzam_brijanje.jpg", 
                    "price": "7.99€",
                    "description": "Balzam za umirenje kože poslije brijanja."
                },
                { 
                    "name": "Šampon za kosu", 
                    "image": "images/sampon_muski.jpg", 
                    "price": "6.99€",
                    "description": "Šampon za kosu za muškarce."
                },
                { 
                    "name": "Gel za tuširanje", 
                    "image": "images/gel_tusiranje.jpg", 
                    "price": "4.99€",
                    "description": "Osvježavajući gel za tuširanje za muškarce."
                },
                { 
                    "name": "Dezodorans", 
                    "image": "images/dezodorans_muski.jpg", 
                    "price": "5.99€",
                    "description": "Dezodorans za dugotrajnu svježinu."
                },
                { 
                    "name": "Krema za lice", 
                    "image": "images/krema_muski.jpg", 
                    "price": "12.99€",
                    "description": "Hidratantna krema za lice za muškarce."
                }
            ]
        }
    ]
};
