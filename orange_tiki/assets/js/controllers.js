app.controller('WebAppCtrl', ['$scope', '$location', '$window', '$sce', '$timeout', 'Idle', function($scope, $location, $window, $sce, $timeout, Idle) {

    var vm = this;

    vm.questions = [
        // Question 0
        {
            name: "Question 1",
            answers: [
                {
                    next: 1,
                    label: "Je préfère une montre connectée à mon mobile",
                    filters: {
                        category: "Smartwatch"
                    },
                    image: "question-4-1.jpg"
                },
                {
                    next: 3,
                    label: "Je préfère un bracelet qui m’aide à suivre mon activité physique",
                    filters: {
                        category: "Tracker d'activité"
                    },
                    image: "smartwatch_fitwatch.jpg"
                },
                {
                    next: 7,
                    label: "Je veux les deux",
                    filters: {},
                    image: "question-3-1.jpg"
                }
            ]
        },
        // Question 1
        // Arbre 1 - Q1
        {
            name: "Question 2A",
            answers: [
                {
                    next: 5,
                    label: "Mon smartphone est sous Android",
                    filters: {
                        os: {
                            android: true
                        }
                    },
                    image: "question-1-1.jpg"
                },
                {
                    next: 5,
                    label: "Mon smartphone est sous iOS",
                    filters: {
                        os: {
                            ios: true
                        }
                    },
                    image: "question-1-2.jpg"
                },
                {
                    next: 5,
                    label: "Mon smartphone est sous Windows Phone",
                    filters: {
                        os: {
                            windowsphone: true
                        }
                    },
                    image: "question-1-3.jpg"
                },
                {
                    next: 2,
                    label: "Je ne sais pas",
                    filters: {},
                    image: "question-1-4.jpg"
                }
            ]
        },
        // Question 2
        // Arbre 1 - Q2
        {
            name: "Question 2B",
            answers: [
                {
                    next: 5,
                    label: "Mon écran d'accueil ressemble à ça",
                    filters: {
                        os: {
                            android: true
                        }
                    },
                    image: "home-screen-android.jpg"
                },
                {
                    next: 5,
                    label: "Mon écran d'accueil ressemble à ça",
                    filters: {
                        os: {
                            ios: true
                        }
                    },
                    image: "home-screen-ios.jpg"
                },
                {
                    next: 5,
                    label: "Mon écran d'accueil ressemble à ça",
                    filters: {
                        os: {
                            windowsphone: true
                        }
                    },
                    image: "home-screen-wp.jpg"
                },
            ]
        },
        // Question 3
        // Arbre 2 - Q1
        {
            name: "Question 3A",
            answers: [
                {
                    next: 6,
                    label: "Mon smartphone est sous Android",
                    filters: {
                        os: {
                            android: true
                        }
                    },
                    image: "question-1-1.jpg"
                },
                {
                    next: 6,
                    label: "Mon smartphone est sous iOS",
                    filters: {
                        os: {
                            ios: true
                        }
                    },
                    image: "question-1-2.jpg"
                },
                {
                    next: 6,
                    label: "Mon smartphone est sous Windows Phone",
                    filters: {
                        os: {
                            windowsphone: true
                        }
                    },
                    image: "question-1-3.jpg"
                },
                {
                    next: 4,
                    label: "Je ne sais pas",
                    filters: {},
                    image: "question-1-4.jpg"
                }
            ]
        },
        // Question 4
        // Arbre 2 - Q2
        {
            name: "Question 3B",
            answers: [
                {
                    next: 6,
                    label: "Mon écran d'accueil ressemble à ça",
                    filters: {
                        os: {
                            android: true
                        }
                    },
                    image: "home-screen-android.jpg"
                },
                {
                    next: 6,
                    label: "Mon écran d'accueil ressemble à ça",
                    filters: {
                        os: {
                            ios: true
                        }
                    },
                    image: "home-screen-ios.jpg"
                },
                {
                    next: 6,
                    label: "Mon écran d'accueil ressemble à ça",
                    filters: {
                        os: {
                            windowsphone: true
                        }
                    },
                    image: "home-screen-wp.jpg"
                },
            ]
        },
        // Question 5
        {
            name: "Question 6",
            answers: [

            {
                next: null,
                label: "Je veux prendre des appels directement depuis mon poignet",
                filters: {
                     take_call: true
                },
                image: "calling.png"
            },
            {
                next: null,
                label: "Je veux naviguer dans mes applications depuis mon poignet",
                filters: {
                    music : true
                },
                image: "apps.jpg"
            },
            {
                next: null,
                label: "Je veux interagir avec la montre grâce à la commande vocale",
                filters: {
                    voice: true
                },
                image: "voice.png"
            }
            ]
        },
        // Question 6
        {
            name: "Question 7",
            answers: [
                {
                    next: null,
                    label: "J'aimerais mesurer ma fréquence cardiaque",
                    filters: {
                        heartbeat : true
                    },
                    image: "heartbeat.png"
                },
                {
                    next: null,
                    label: "Je souhaite nager avec mon bracelet",
                    filters: {
                        dive: true
                    },
                    image: "swimming.png"
                },
                {
                    next: null,
                    label: "J'ai besoin d'un bracelet avec un GPS intégré",
                    filters: {
                        gps: true
                    },
                    image: "question-2-2.jpg"
                },
                {
                    next: null,
                    label: "Je suis multi-sport",
                    filters: {
                        gps : true,
                        dive: true
                    },
                    image: "question-2-1.jpg"
                }
            ]
        },
        // Question 7
        // Arbre 3 - Q1
        {
            name: "Question 8A",
            answers: [
                {
                    next: 9,
                    label: "Mon smartphone est sous Android",
                    filters: {
                        os: {
                            android: true
                        }
                    },
                    image: "question-1-1.jpg"
                },
                {
                    next: 9,
                    label: "Mon smartphone est sous iOS",
                    filters: {
                        os: {
                            ios: true
                        }
                    },
                    image: "question-1-2.jpg"
                },
                {
                    next: null,
                    label: "Mon smartphone est sous Windows Phone",
                    filters: {
                        os: {
                            windowsphone: true
                        }
                    },
                    image: "question-1-3.jpg"
                },
                {
                    next: 8,
                    label: "Je ne sais pas",
                    filters: {},
                    image: "question-1-4.jpg"
                }
            ]
        },
        // Question 8
        // Arbre 3 - Q2
        {
            name: "Question 8B",
            answers: [
                {
                    next: 9,
                    label: "Mon écran d'accueil ressemble à ça",
                    filters: {
                        os: {
                            android: true
                        }
                    },
                    image: "home-screen-android.jpg"
                },
                {
                    next: 9,
                    label: "Mon écran d'accueil ressemble à ça",
                    filters: {
                        os: {
                            ios: true
                        }
                    },
                    image: "home-screen-ios.jpg"
                },
                {
                    next: null,
                    label: "Mon écran d'accueil ressemble à ça",
                    filters: {
                        os: {
                            windowsphone: true
                        }
                    },
                    image: "home-screen-wp.jpg"
                },
            ]
        },
        // Question 9
        {
            name: "Question 9",
            answers: [

                {
                    next: 10,
                    label: "Je veux prendre des appels directement depuis mon poignet",
                    filters: {
                        take_call: true
                    },
                    image: "calling.png"
                },
                {
                    next: 10,
                    label: "Je veux naviguer dans mes applications depuis mon poignet",
                    filters: {
                        music : true
                    },
                    image: "apps.jpg"
                },
                {
                    next: 10,
                    label: "Je veux interagir avec la montre grâce à la commande vocale",
                    filters: {
                        voice: true
                    },
                    image: "voice.png"
                }
            ]
        },
        // Question 10
        {
            name: "Question 10",
            answers: [
                {
                    next: null,
                    label: "J'aimerais mesurer ma fréquence cardiaque",
                    filters: {
                        heartbeat : true
                    },
                    image: "heartbeat.png"
                },
                {
                    next: null,
                    label: "Je souhaite nager avec mon bracelet",
                    filters: {
                        dive: true
                    },
                    image: "swimming.png"
                },
                {
                    next: null,
                    label: "J'ai besoin d'un bracelet avec un GPS intégré",
                    filters: {
                        gps: true
                    },
                    image: "question-2-2.jpg"
                },
                {
                    next: null,
                    label: "Je suis multi-sport",
                    filters: {
                        gps : true,
                        dive: true
                    },
                    image: "question-2-1.jpg"
                }
            ]
        },
    ];

    vm.products = [
        {
            id: 0,
            name: "iWatch",
            brand: "APPLE",
            shortDescription: "Compatible avec les meilleures applications, capteur d'activité, affichage des notifications, de planning etc.…",
            longDescription: "Faites ce que vous avez l’habitude de faire, plus rapidement et de façon plus pratique grâce à l’Apple Watch! Plus besoin d’écrire pour vous exprimer :  dessinez, toquez, envoyez votre pouls à vos contacts. Utilisez votre voix pour répondre à vos messages, répondre à vos appels. Suivez votre activité, que ce soit une simple promenade, quand vous jouez avec vos enfants, ou lorsque vous faites du sport. Avec ses trois anneaux dans l’application activité, votre Apple Watch vous montre les progrès effectués chaque jour et vous incite à faire plus d'activité.",
            price: "399 €*",
            image: "iwatch.jpg",
            video: "",
            specifications: {
                category: {
                    label: "Type de montre",
                    values: "Smartwatch"
                },
                clock: {
                    label: "Affiche l'heure",
                    values: true
                },
               podometer: {
                    label: "Podomètre (pas et distance parcourue)",
                    values: true
                },
                heartbeat: {
                    label: "Mesure fréquence cardiaque",
                    values: true
                },
                calories: {
                    label: "Calories brulées",
                    values: true
                },
                sleep: {
                    label: "Suivi du sommeil",
                    values: true
                },
                notifications: {
                    label: "Affiche les notifications",
                    values: true
                },
                take_call: {
                    label: "Option décrocher/raccrocher",
                    values: true
                },
                 music: {
                    label: "Contrôle de la musique",
                    values: true
                },
                photo: {
                    label: "Contrôle de l'appareil photo",
                    values: true
                },
                speaker: {
                    label: "Haut-parleurs (musique et voix)",
                    values: true
                },
                voice: {
                    label: "Déclencher des actions par la voix",
                    values: true
                },
                water: {
                    label: "Résistance à l'eau (éclaboussures)",
                    values: true
                },
                dive: {
                    label: "Etanchéité (nage)",
                    values: false
                },
                gps: {
                    label: "GPS",
                    values: "Via iPhone"
                },
                case: {
                    label: "Boîtier",
                    values: "Carré"
                },
                autonomy: {
                    label: "Autonomie",
                    values: "Jusqu'à 18 heures"
                },
                os: {
                    label: "Systèmes d'exploitation",
                    values: {
                        ios: {
                            label: "iPhone 5+, iOS 8.2 et +"
                        }
                    }
                },
                bluetooth: {
                    label: "Bluetooth/processeur",
                    values: "Bluetooth 4.0"
                }
            }
        },
        {
            id: 1,
            name: "Gear s2",
            brand: "SAMSUNG",
            shortDescription: "Compatible avec les meilleures applications, capteur d'activité, tactile. Ultra fine, plusieurs looks",
            longDescription: "Une montre à la pointe de la technologie personnalisable ! Avec cette nouvelle Gear S2, la technologie à l'intérieur d'un design élégant tiendront sur votre poignet. Les amateurs de montres classiques succomberont à ce design épuré et ultra fin : seulement 11,4 mm ! Vivez une expérience unique avec une montre qui vous ressemble ! Votre Samsung Gear 2 est 100 % personnalisable : choix du thème, du type d’horloge et des widgets préenregistrés ! Votre montre s’associera parfaitement à votre tenue ou à vos humeurs ! Disponible en classique noire, classique or rose, sport blanche et sport noire.",
            price: "349 €*",
            image: "gears2.png",
            video: "",
            specifications: {
                category: {
                label: "Type de montre",
                values: "Smartwatch"
                },
                clock: {
                    label: "Affiche l'heure",
                    values: true
                },
               podometer: {
                    label: "Podomètre (pas et distance parcourue)",
                    values: true
                },
                heartbeat: {
                    label: "Mesure fréquence cardiaque",
                    values: true
                },
                calories: {
                    label: "Calories brulées",
                    values: true
                },
                sleep: {
                    label: "Suivi du sommeil",
                    values: true
                },
                notifications: {
                    label: "Affiche les notifications",
                    values: true
                },
                take_call: {
                    label: "Option décrocher/raccrocher",
                    values: true
                },
                 music: {
                    label: "Contrôle de la musique",
                    values: true
                },
                photo: {
                    label: "Contrôle de l'appareil photo",
                    values: false
                },
                speaker: {
                    label: "Haut-parleurs (musique et voix)",
                    values: false
                },
                voice: {
                    label: "Déclencher des actions par la voix",
                    values: true
                },
                water: {
                    label: "Résistance à l'eau (éclaboussures)",
                    values: true
                },
                dive: {
                    label: "Etanchéité (nage)",
                    values: false
                },
                gps: {
                    label: "GPS",
                    values: "Via Smartphone"
                },
                case: {
                    label: "Boîtier",
                    values: "Rond"
                },
                autonomy: {
                    label: "Autonomie",
                    values: "2 à 3 jours, chargeur à induction fournis"
                },
                os: {
                    label: "Systèmes d'exploitation",
                    values: {
                        android: {
                            label: "Android 4.4 et +"
                        }
                    }
                },
                bluetooth: {
                    label: "Bluetooth/processeur",
                    values: "Bluetooth 4.0"
                }
            }
        },
        {
            id: 2,
            name: "ZeFit 2",
            brand: "MYKRONOZ",
            shortDescription: "Bracelet connecté, suivi de l'activité et affichage des notifications",
            longDescription: "Vivez votre journée autrement ! ZeFit est un bracelet connecté qui vous informe de votre activité tout au long de la journée (sommeil, marche, course etc...). Avec le bracelet Ze fit, visualisez toutes vos statistiques qui concernent votre activité physique sur application mobile. Vous pouvez vous fixer des objectifs et les contrôler grâce au bracelet. Restez en forme! Portez ZeFit.",
            price: "39.99 €*",
            image: "thefit2.jpg",
            video: "",
            specifications: {
                category: {
                    label: "Type de montre",
                    values: "Tracker d'activité"
                },
                clock: {
                    label: "Affiche l'heure",
                    values: true
                },
               podometer: {
                    label: "Podomètre (pas et distance parcourue)",
                    values: true
                },
                heartbeat: {
                    label: "Mesure fréquence cardiaque",
                    values: false
                },
                calories: {
                    label: "Calories brulées",
                    values: true
                },
                sleep: {
                    label: "Suivi du sommeil",
                    values: true
                },
                notifications: {
                    label: "Affiche les notifications",
                    values: true
                },
                take_call: {
                    label: "Option décrocher/raccrocher",
                    values: false
                },
                 music: {
                    label: "Contrôle de la musique",
                    values: false
                },
                photo: {
                    label: "Contrôle de l'appareil photo",
                    values: false
                },
                speaker: {
                    label: "Haut-parleurs (musique et voix)",
                    values: false
                },
                voice: {
                    label: "Déclencher des actions par la voix",
                    values: false
                },
                water: {
                    label: "Résistance à l'eau (éclaboussures)",
                    values: true
                },
                dive: {
                    label: "Etanchéité (nage)",
                    values: false
                },
                gps: {
                    label: "GPS",
                    values: "Via Smartphone"
                },
                case: {
                    label: "Boîtier",
                    values: "Carré"
                },
                autonomy: {
                    label: "Autonomie",
                    values: "2 jours"
                },
                os: {
                    label: "Systèmes d'exploitation",
                    values: {
                        android: {
                            label: "Android 4.4 et +"
                        },
                        ios: {
                            label: "iOS 7.0 et +"
                        },
                        windowsphone: {
                            label: "Windows Phone 8.1"
                        }
                    }
                },
                bluetooth: {
                    label: "Bluetooth/processeur",
                    values: "Bluetooth 4.0"
                }
            }
        },
        {
            id: 3,
            name: "Withings pop",
            brand: "WITHINGS",
            shortDescription: " Suivi de l'activité journalière, alarme silencieuse, analyse du sommeil et suivi de vos progrès avec l’application",
            longDescription: "Découvrez cette nouvelle montre connectée au design élégant !L’Activité Pop est le mix idéal entre la montre connectée et la montre classique. Tout en gardant un cadran à l’aspect classique, elle propose via un indicateur analogique de consulter l’évolution de l'activité que vous décidez de suivre sur l'application Withings, disponible sur iOS et Android. Dotée d'une autonomie de 8 mois, d'une alarme silencieuse et étanche à l'eau, cette montre conviendra à tous vos usages.",
            price: "149.99 €*",
            image: "Withingspop.jpg",
            video: "",
            specifications: {
                category: {
                        label: "Type de montre",
                        values: "Tracker d'activité"
                    },
                    clock: {
                        label: "Affiche l'heure",
                        values: true
                    },
                   podometer: {
                        label: "Podomètre (pas et distance parcourue)",
                        values: true
                    },
                    heartbeat: {
                        label: "Mesure fréquence cardiaque",
                        values: false
                    },
                    calories: {
                        label: "Calories brulées",
                        values: true
                    },
                    sleep: {
                        label: "Suivi du sommeil",
                        values: true
                    },
                    notifications: {
                        label: "Affiche les notifications",
                        values: false
                    },
                    take_call: {
                        label: "Option décrocher/raccrocher",
                        values: false
                    },
                     music: {
                        label: "Contrôle de la musique",
                        values: false
                    },
                    photo: {
                        label: "Contrôle de l'appareil photo",
                        values: false
                    },
                    speaker: {
                        label: "Haut-parleurs (musique et voix)",
                        values: false
                    },
                    voice: {
                        label: "Déclencher des actions par la voix",
                        values: false
                    },
                    water: {
                        label: "Résistance à l'eau (éclaboussures)",
                        values: true
                    },
                    dive: {
                        label: "Etanchéité (nage)",
                        values: true
                    },
                    gps: {
                        label: "GPS",
                        values: false
                    },
                    case: {
                        label: "Boîtier",
                        values: "Carré"
                    },
                    autonomy: {
                        label: "Autonomie",
                        values: "Pile, 8 mois"
                    },
                    os: {
                        label: "Systèmes d'exploitation",
                        values: {
                            android: {
                                label: "Android"
                            },
                            ios: {
                                label: "iOS 7.0 et +"
                            }
                        }
                    },
                    bluetooth: {
                        label: "Bluetooth/processeur",
                        values: "Bluetooth 4.0"
                    }
            }
        },
        {
            id: 4,
            name: "Zecircle",
            brand: "MYKRONOZ",
            shortDescription: "Capteur d'activité, design tendance, applications dédiées",
            longDescription: "Restez actifs et notifié à votre poignet!  Cette montre munie d'un écran tactile permet l'affichage des données. Grâce à ses nombreux capteurs, la ZeCircle est capable, entre autres, de calculer le nombre de pas effectués, les calories brûlées et d'enregistrer la qualité du sommeil. Une fois connectée à un Smartphone via Bluetooth 4.0, la ZeCircle synchronise les notifications d’appels, SMS, e-mails, événements du calendrier et de l’activité de réseaux sociaux. Accessible et polyvalente, la montre MyKronoz ZeCircle saura vous séduire.",
            price: "59.99 €*",
            image: "zecircle.jpg",
            video: "",
            specifications: {
                category: {
                    label: "Type de montre",
                    values: "Tracker d'activité"
                },
                clock: {
                    label: "Affiche l'heure",
                    values: true
                },
               podometer: {
                    label: "Podomètre (pas et distance parcourue)",
                    values: true
                },
                heartbeat: {
                    label: "Mesure fréquence cardiaque",
                    values: false
                },
                calories: {
                    label: "Calories brulées",
                    values: true
                },
                sleep: {
                    label: "Suivi du sommeil",
                    values: true
                },
                notifications: {
                    label: "Affiche les notifications",
                    values: true
                },
                take_call: {
                    label: "Option décrocher/raccrocher",
                    values: false
                },
                 music: {
                    label: "Contrôle de la musique",
                    values: false
                },
                photo: {
                    label: "Contrôle de l'appareil photo",
                    values: false
                },
                speaker: {
                    label: "Haut-parleurs (musique et voix)",
                    values: false
                },
                voice: {
                    label: "Déclencher des actions par la voix",
                    values: false
                },
                water: {
                    label: "Résistance à l'eau (éclaboussures)",
                    values: true
                },
                dive: {
                    label: "Etanchéité (nage)",
                    values: false
                },
                gps: {
                    label: "GPS",
                    values: false
                },
                case: {
                    label: "Boîtier",
                    values: "Rond"
                },
                autonomy: {
                    label: "Autonomie",
                    values: "2 jours"
                },
                os: {
                    label: "Systèmes d'exploitation",
                    values: {
                        android: {
                            label: "Android 4.3  et +"
                        },
                        ios: {
                            label: "iOS 7.0 et +"
                        },
                        windowsphone: {
                            label: "Windows Phone 8.1 et +"
                        }
                    }
                },
                bluetooth: {
                    label: "Bluetooth/processeur",
                    values: "Bluetooth 4.0"
                }
            }
        },
        {
            id: 5,
            name: "ZeRound",
            brand: "MYKRONOZ",
            shortDescription: "Montre connectée, suivi de l'activité quotidienne,  permet la prise d'appels.",
            longDescription: "Montre connectée avec écran couleur tactile circulaire : ZeRound est une montre connectée élégante qui suit votre activité quotidienne. Dotée d’un microphone et haut-parleur intégré elle permet également aux utilisateurs de gérer leurs appels, de diffuser leur musique et d'effectuer des commandes vocales directement depuis leur poignet.",
            price: "99.99 €*",
            image: "zeround.jpg",
            video: "",
            specifications: {
                category: {
                    label: "Type de montre",
                    values: "Smartwatch"
                },
                clock: {
                    label: "Affiche l'heure",
                    values: true
                },
               podometer: {
                    label: "Podomètre (pas et distance parcourue)",
                    values: true
                },
                heartbeat: {
                    label: "Mesure fréquence cardiaque",
                    values: true
                },
                calories: {
                    label: "Calories brulées",
                    values: true
                },
                sleep: {
                    label: "Suivi du sommeil",
                    values: true
                },
                notifications: {
                    label: "Affiche les notifications",
                    values: true
                },
                take_call: {
                    label: "Option décrocher/raccrocher",
                    values: true
                },
                 music: {
                    label: "Contrôle de la musique",
                    values: true
                },
                photo: {
                    label: "Contrôle de l'appareil photo",
                    values: true
                },
                speaker: {
                    label: "Haut-parleurs (musique et voix)",
                    values: true
                },
                voice: {
                    label: "Déclencher des actions par la voix",
                    values: true
                },
                water: {
                    label: "Résistance à l'eau (éclaboussures)",
                    values: true
                },
                dive: {
                    label: "Etanchéité (nage)",
                    values: false
                },
                gps: {
                    label: "GPS",
                    values: false
                },
                case: {
                    label: "Boîtier",
                    values: "Rond"
                },
                autonomy: {
                    label: "Autonomie",
                    values: "2.5 jours"
                },
                os: {
                    label: "Systèmes d'exploitation",
                    values: {
                         android: {
                            label: "Android 4.3  et +"
                        },
                        ios: {
                            label: "iOS 7.0 et +"
                        }
                    }
                },
                bluetooth: {
                    label: "Bluetooth/processeur",
                    values: "Bluetooth 4.0 et 3G"
                }
            }
        },
        {
            id: 6,
            name: "ZeClock",
            brand: "MYKRONOZ",
            shortDescription: "Montre connectée, vibre lorsque votre mobile s'éloigne, permet la prise d'appels, commande vocale",
            longDescription: "ZeClock est la première montre connectée analogique qui combine un design haut de gamme et une technologie de pointe ! Equipée d’un mouvement à quartz, d’une connectivité Bluetooth 4.0, d’un microphone et haut-parleur intégrés et de boutons intuitifs latéraux, ZeClock permet aux utilisateurs de recevoir et passer des appels directement depuis leur poignet. elle affiche les notifications. Pour vous permettre d’interagir facilement avec votre téléphone en utilisant des commandes vocales, ZeClock est compatible avec Siri et Google Now.",
            price: "99.99 €*",
            image: "zeclock.png",
            video: "",
            specifications: {
                category: {
                    label: "Type de montre",
                    values: "Smartwatch"
                },
                clock: {
                    label: "Affiche l'heure",
                    values: true
                },
               podometer: {
                    label: "Podomètre (pas et distance parcourue)",
                    values: true
                },
                heartbeat: {
                    label: "Mesure fréquence cardiaque",
                    values: true
                },
                calories: {
                    label: "Calories brulées",
                    values: true
                },
                sleep: {
                    label: "Suivi du sommeil",
                    values: true
                },
                notifications: {
                    label: "Affiche les notifications",
                    values: true
                },
                take_call: {
                    label: "Option décrocher/raccrocher",
                    values: true
                },
                 music: {
                    label: "Contrôle de la musique",
                    values: true
                },
                photo: {
                    label: "Contrôle de l'appareil photo",
                    values: true
                },
                speaker: {
                    label: "Haut-parleurs (musique et voix)",
                    values: true
                },
                voice: {
                    label: "Déclencher des actions par la voix",
                    values: true
                },
                water: {
                    label: "Résistance à l'eau (éclaboussures)",
                    values: false
                },
                dive: {
                    label: "Etanchéité (nage)",
                    values: false
                },
                gps: {
                    label: "GPS",
                    values: false
                },
                case: {
                    label: "Boîtier",
                    values: "Rond"
                },
                autonomy: {
                    label: "Autonomie",
                    values: "3 jours"
                },
                os: {
                    label: "Systèmes d'exploitation",
                    values: {
                         android: {
                            label: "Android 4.3  et +"
                        },
                        ios: {
                            label: "iOS 7.0 et +"
                        }
                    }
                },
                bluetooth: {
                    label: "Bluetooth/processeur",
                    values: "Bluetooth 2.1 et 4.0"
                }
            }
        },
        {
            id: 7,
            name: "ZeWatch 3",
            brand: "MYKRONOZ",
            shortDescription: "Montre connectée, vibre lorsque votre mobile s'éloigne, permet la prise d'appels, commande vocale.",
            longDescription: "Restez connecté en permanence depuis votre poignet ! ZeWatch est une montre connectée compatible avec tous les dotés de Bluetooth. Lorsque vous recevez un appel, ZeWatch sonne, vibre, et affiche l’appel entrant. Grâce au haut-parleur et microphone intégrés, vous pourrez répondre directement depuis votre poignet !ZeWatch vous permet également d’écouter votre musique en toute mobilité.",
            price: "79.99 €*",
            image: "zewatch3.png",
            video: "",
            specifications: {
                category: {
                    label: "Type de montre",
                    values: "Smartwatch"
                },
                clock: {
                    label: "Affiche l'heure",
                    values: true
                },
               podometer: {
                    label: "Podomètre (pas et distance parcourue)",
                    values: true
                },
                heartbeat: {
                    label: "Mesure fréquence cardiaque",
                    values: true
                },
                calories: {
                    label: "Calories brulées",
                    values: true
                },
                sleep: {
                    label: "Suivi du sommeil",
                    values: true
                },
                notifications: {
                    label: "Affiche les notifications",
                    values: true
                },
                take_call: {
                    label: "Option décrocher/raccrocher",
                    values: true
                },
                 music: {
                    label: "Contrôle de la musique",
                    values: true
                },
                photo: {
                    label: "Contrôle de l'appareil photo",
                    values: false
                },
                speaker: {
                    label: "Haut-parleurs (musique et voix)",
                    values: true
                },
                voice: {
                    label: "Déclencher des actions par la voix",
                    values: true
                },
                water: {
                    label: "Résistance à l'eau (éclaboussures)",
                    values: false
                },
                dive: {
                    label: "Etanchéité (nage)",
                    values: false
                },
                gps: {
                    label: "GPS",
                    values: false
                },
                case: {
                    label: "Boîtier",
                    values: "Carré"
                },
                autonomy: {
                    label: "Autonomie",
                    values: "4 jours"
                },
                os: {
                    label: "Systèmes d'exploitation",
                    values: {
                        android: {
                            label: "Android 4.3  et +"
                        },
                        ios: {
                            label: "iOS 7.0 et +"
                        },
                        windowsphone: {
                            label: "Windows Phone 8.1 et +"
                        }
                    }
                },
                bluetooth: {
                    label: "Bluetooth/processeur",
                    values: "Bluetooth 2.1 et 4.0"
                }
            }
        },
        {
            id: 8,
            name: "LG Watch Urbane 2 3G",
            brand: "LG",
            shortDescription: "Compatible avec les meilleures applications, capteur d'activité, tactile, ultra fine, plusieurs looks.",
            longDescription: "Oubliez votre Smartphone, votre montre prend le relais ! Grâce à sa connectivité wifi, votre montre vous permet de rester connecté même sans avoir votre téléphone à portée de main. Faites défiler les notifications d'un simple mouvement de poignet. Accédez aux appels récents et à vos contacts pour passer des appels directement à partir de votre montre. Lorsqu'un casque Bluetooth est connecté, vous n'avez même plus besoin de sortir le téléphone de votre poche pour passer des appels. Progressez plus rapidement en contrôlant votre fréquence cardiaque grâce au capteur intégré.",
            price: "499.99 €*",
            image: "lg_urban.png",
            video: "",
            specifications: {
                category: {
                    label: "Type de montre",
                    values: "Smartwatch"
                },
                clock: {
                    label: "Affiche l'heure",
                    values: true
                },
               podometer: {
                    label: "Podomètre (pas et distance parcourue)",
                    values: true
                },
                heartbeat: {
                    label: "Mesure fréquence cardiaque",
                    values: true
                },
                calories: {
                    label: "Calories brulées",
                    values: true
                },
                sleep: {
                    label: "Suivi du sommeil",
                    values: true
                },
                notifications: {
                    label: "Affiche les notifications",
                    values: true
                },
                take_call: {
                    label: "Option décrocher/raccrocher",
                    values: true
                },
                 music: {
                    label: "Contrôle de la musique",
                    values: true
                },
                photo: {
                    label: "Contrôle de l'appareil photo",
                    values: false
                },
                speaker: {
                    label: "Haut-parleurs (musique et voix)",
                    values: true
                },
                voice: {
                    label: "Déclencher des actions par la voix",
                    values: true
                },
                water: {
                    label: "Résistance à l'eau (éclaboussures)",
                    values: true
                },
                dive: {
                    label: "Etanchéité (nage)",
                    values: false
                },
                gps: {
                    label: "GPS",
                    values: false
                },
                case: {
                    label: "Boîtier",
                    values: "Rond"
                },
                autonomy: {
                    label: "Autonomie",
                    values: "2.5 jours"
                },
                os: {
                    label: "Systèmes d'exploitation",
                    values: {
                         android: {
                            label: "Android 4.3  et +"
                        }
                    }
                },
                bluetooth: {
                    label: "Bluetooth/processeur",
                    values: "Bluetooth 4.0 et 3G"
                }
            }
        },
        {
            id: 9,
            name: "Smartwatch 3",
            brand: "SONY",
            shortDescription: "Journal d'appels, messages, moniteur d'activités, commande de la musique depuis la montre.",
            longDescription: "Adoptez la Sony SmartWatch 3 et donnez du style à votre vie !  La Sony SmartWatch 3 est une montre intelligente qui vous permet gérer vos notification, accéder à des informations sans avoir a prendre votre téléphone dans les mains. La présence du GPS permet à votre montre de vous fournir des informations pertinentes et adaptées lors de vos déplacements. Vous pouvez accéder à la météo, vos horaires de vols, vos notifications et bien d'autres choses encore.",
            price: "199.99 €*",
            image: "SWR50.png",
            video: "",
            specifications: {
                category: {
                    label: "Type de montre",
                    values: "Smartwatch"
                },
                clock: {
                    label: "Affiche l'heure",
                    values: true
                },
               podometer: {
                    label: "Podomètre (pas et distance parcourue)",
                    values: true
                },
                heartbeat: {
                    label: "Mesure fréquence cardiaque",
                    values: true
                },
                calories: {
                    label: "Calories brulées",
                    values: true
                },
                sleep: {
                    label: "Suivi du sommeil",
                    values: true
                },
                notifications: {
                    label: "Affiche les notifications",
                    values: true
                },
                take_call: {
                    label: "Option décrocher/raccrocher",
                    values: true
                },
                 music: {
                    label: "Contrôle de la musique",
                    values: true
                },
                photo: {
                    label: "Contrôle de l'appareil photo",
                    values: false
                },
                speaker: {
                    label: "Haut-parleurs (musique et voix)",
                    values: false
                },
                voice: {
                    label: "Déclencher des actions par la voix",
                    values: true
                },
                water: {
                    label: "Résistance à l'eau (éclaboussures)",
                    values: true
                },
                dive: {
                    label: "Etanchéité (nage)",
                    values: false
                },
                gps: {
                    label: "GPS",
                    values: false
                },
                case: {
                    label: "Boîtier",
                    values: "Carré"
                },
                autonomy: {
                    label: "Autonomie",
                    values: "1 jours"
                },
                os: {
                    label: "Systèmes d'exploitation",
                    values: {
                         android: {
                            label: "Android 4.3  et +"
                        }
                    }
                },
                bluetooth: {
                    label: "Bluetooth/processeur",
                    values: "Bluetooth 4.0 et Wifi"
                }
            }
        },
        {
            id: 10,
            name: "Huawei Watch",
            brand: "HUAWEI",
            shortDescription: "Compatible avec les meilleures applications, suivi de l'activité quotidienne, affichage des notifications.",
            longDescription: "Simplifiez-vous la vie ! Recevez vos appels, messages, emails ou notifications directement depuis votre poignet. Faites des recherches ou obtenez des informations directement sur votre montre grâce aux services Google. Munie d'un Tracker, votre Huawei Watch suivra votre santé au quotidien : distance parcourue, calorie dépensées, temps de sommeils, capteur de pulsation etc. Avec près d’une journée et demie d’autonomie en utilisation normal vous pourrez recharger votre montre grâce à son dock magnétique permettant une connexion facile et une charge ultra-rapide.",
            price: "399.99 €*",
            image: "HUAWEIWatch.png",
            video: "",
            specifications: {
                category: {
                    label: "Type de montre",
                    values: "Smartwatch"
                },
                clock: {
                    label: "Affiche l'heure",
                    values: true
                },
               podometer: {
                    label: "Podomètre (pas et distance parcourue)",
                    values: true
                },
                heartbeat: {
                    label: "Mesure fréquence cardiaque",
                    values: true
                },
                calories: {
                    label: "Calories brulées",
                    values: true
                },
                sleep: {
                    label: "Suivi du sommeil",
                    values: true
                },
                notifications: {
                    label: "Affiche les notifications",
                    values: true
                },
                take_call: {
                    label: "Option décrocher/raccrocher",
                    values: true
                },
                 music: {
                    label: "Contrôle de la musique",
                    values: true
                },
                photo: {
                    label: "Contrôle de l'appareil photo",
                    values: false
                },
                speaker: {
                    label: "Haut-parleurs (musique et voix)",
                    values: false
                },
                voice: {
                    label: "Déclencher des actions par la voix",
                    values: true
                },
                water: {
                    label: "Résistance à l'eau (éclaboussures)",
                    values: true
                },
                dive: {
                    label: "Etanchéité (nage)",
                    values: false
                },
                gps: {
                    label: "GPS",
                    values: false
                },
                case: {
                    label: "Boîtier",
                    values: "Rond"
                },
                autonomy: {
                    label: "Autonomie",
                    values: "1 jour et demi"
                },
                os: {
                    label: "Systèmes d'exploitation",
                    values: {
                        android: {
                            label: "Android 4.3  et +"
                        },
                        ios: {
                            label: "iOS 8.2 et +"
                        }
                    }
                },
                bluetooth: {
                    label: "Bluetooth/processeur",
                    values: "Bluetooth 4.0 et 4.1"
                }
            }
        },
        {
            id: 11,
            name: "ZeFit 2 Pulse",
            brand: "MYKRONOZ",
            shortDescription: "Bracelet connecté, mesure la fréquence cardiaque, suivi de l'activité et notifications.",
            longDescription: "Le Capteur de pulsation en plus ! ZeFit 2 Pulse est un bracelet connecté qui vous informe de votre activité tout au long de la journée (sommeil, marche, course , fréquence cardiaque etc...). Avec le bracelet Ze fit, visualisez toutes vos statistiques  qui concernent votre activité physique sur application mobile et  fixez-vous des objectifs que vous contrôlerez  grâce au bracelet. Restez en forme! Portez ZeFit 2 pulse.",
            price: "79.99 €*",
            image: "zefitpulse.png",
            video: "",
            specifications: {
                category: {
                    label: "Type de montre",
                    values: "Tracker d'activité"
                },
                clock: {
                    label: "Affiche l'heure",
                    values: true
                },
               podometer: {
                    label: "Podomètre (pas et distance parcourue)",
                    values: true
                },
                heartbeat: {
                    label: "Mesure fréquence cardiaque",
                    values: true
                },
                calories: {
                    label: "Calories brulées",
                    values: true
                },
                sleep: {
                    label: "Suivi du sommeil",
                    values: true
                },
                notifications: {
                    label: "Affiche les notifications",
                    values: true
                },
                take_call: {
                    label: "Option décrocher/raccrocher",
                    values: false
                },
                 music: {
                    label: "Contrôle de la musique",
                    values: false
                },
                photo: {
                    label: "Contrôle de l'appareil photo",
                    values: false
                },
                speaker: {
                    label: "Haut-parleurs (musique et voix)",
                    values: false
                },
                voice: {
                    label: "Déclencher des actions par la voix",
                    values: false
                },
                water: {
                    label: "Résistance à l'eau (éclaboussures)",
                    values: true
                },
                dive: {
                    label: "Etanchéité (nage)",
                    values: false
                },
                gps: {
                    label: "GPS",
                    values: false
                },
                case: {
                    label: "Boîtier",
                    values: "Carré"
                },
                autonomy: {
                    label: "Autonomie",
                    values: "2 jours"
                },
                os: {
                    label: "Systèmes d'exploitation",
                    values: {
                        android: {
                            label: "Android 4.3  et +"
                        },
                        ios: {
                            label: "iOS 7.0 et +"
                        },
                        windowsphone: {
                            label: "Windows Phone 8.1 et +"
                        }
                    }
                },
                bluetooth: {
                    label: "Bluetooth/processeur",
                    values: "Bluetooth 4.0"
                }
            }
        },
        {
            id: 12,
            name: "Acer Leap",
            brand: "ACER",
            shortDescription: "Suivi de l'activité quotidienne, qualité du sommeil et alarme silencieuse, contrôle de la musique depuis le bracelet.",
            longDescription: "Un véritable coach sportif qui vous accompagne dans la durée ! Le jour, votre bracelet  effectue un suivi de votre activité (sommeil, marche, course etc...) Vous pourrez via l’application gratuite, Leap Manager suivre vos réalisations ainsi que fixer  vos propres objectifs. De plus cette application vous permet également d’appareiller et d’accéder aux différents réglages de votre montre.",
            price: "79.99 €*",
            image: "acerLeap.png",
            video: "",
            specifications: {
                category: {
                    label: "Type de montre",
                    values: "Tracker d'activité"
                },
                clock: {
                    label: "Affiche l'heure",
                    values: true
                },
               podometer: {
                    label: "Podomètre (pas et distance parcourue)",
                    values: true
                },
                heartbeat: {
                    label: "Mesure fréquence cardiaque",
                    values: false
                },
                calories: {
                    label: "Calories brulées",
                    values: true
                },
                sleep: {
                    label: "Suivi du sommeil",
                    values: true
                },
                notifications: {
                    label: "Affiche les notifications",
                    values: true
                },
                take_call: {
                    label: "Option décrocher/raccrocher",
                    values: false
                },
                 music: {
                    label: "Contrôle de la musique",
                    values: true
                },
                photo: {
                    label: "Contrôle de l'appareil photo",
                    values: false
                },
                speaker: {
                    label: "Haut-parleurs (musique et voix)",
                    values: false
                },
                voice: {
                    label: "Déclencher des actions par la voix",
                    values: false
                },
                water: {
                    label: "Résistance à l'eau (éclaboussures)",
                    values: true
                },
                dive: {
                    label: "Etanchéité (nage)",
                    values: false
                },
                gps: {
                    label: "GPS",
                    values: false
                },
                case: {
                    label: "Boîtier",
                    values: "Carré"
                },
                autonomy: {
                    label: "Autonomie",
                    values: "5 jours"
                },
                os: {
                    label: "Systèmes d'exploitation",
                    values: {
                        android: {
                            label: "Android 4.3  et +"
                        },
                        ios: {
                            label: "iOS 7.0 et +"
                        },
                        windowsphone: {
                            label: "Windows Phone 8.1 et +"
                        }
                    }
                },
                bluetooth: {
                    label: "Bluetooth/processeur",
                    values: "Bluetooth 4.0"
                }
            }
        },
        {
            id: 13,
            name: "Fitbit Flex",
            brand: "FITBIT",
            shortDescription: "Analyse des activités quotidiennes, qualité du sommeil et alarme silencieuse.",
            longDescription: "Restez concentré sur vos objectifs! Motivez-vous pour bouger plus avec Flex, un appareil élégant  qui suit vos activités quotidiennes comme le nombre de pas effectués, la distance parcourue, les calories brûlées et les minutes actives. Des DEL s'illuminent comme un tableau de bord à chaque fois que vous vous rapprochez de l'objectif que vous vous êtes fixé.",
            price: "99.99 €*",
            image: "fitbit_flex.png",
            video: "",
            specifications: {
                category: {
                    label: "Type de montre",
                    values: "Tracker d'activité"
                },
                clock: {
                    label: "Affiche l'heure",
                    values: false
                },
               podometer: {
                    label: "Podomètre (pas et distance parcourue)",
                    values: true
                },
                heartbeat: {
                    label: "Mesure fréquence cardiaque",
                    values: false
                },
                calories: {
                    label: "Calories brulées",
                    values: true
                },
                sleep: {
                    label: "Suivi du sommeil",
                    values: true
                },
                notifications: {
                    label: "Affiche les notifications",
                    values: false
                },
                take_call: {
                    label: "Option décrocher/raccrocher",
                    values: false
                },
                 music: {
                    label: "Contrôle de la musique",
                    values: false
                },
                photo: {
                    label: "Contrôle de l'appareil photo",
                    values: false
                },
                speaker: {
                    label: "Haut-parleurs (musique et voix)",
                    values: false
                },
                voice: {
                    label: "Déclencher des actions par la voix",
                    values: false
                },
                water: {
                    label: "Résistance à l'eau (éclaboussures)",
                    values: true
                },
                dive: {
                    label: "Etanchéité (nage)",
                    values: false
                },
                gps: {
                    label: "GPS",
                    values: false
                },
                case: {
                    label: "Boîtier",
                    values: "Carré"
                },
                autonomy: {
                    label: "Autonomie",
                    values: "5 jours"
                },
                os: {
                    label: "Systèmes d'exploitation",
                    values: {
                        android: {
                            label: "Android 4.3  et +"
                        },
                        ios: {
                            label: "iOS 7.0 et +"
                        },
                        windowsphone: {
                            label: "Windows Phone 8.1 et +"
                        }
                    }
                },
                bluetooth: {
                    label: "Bluetooth/processeur",
                    values: "Bluetooth 4.0"
                }
            }
        },
        {
            id: 14,
            name: "Fitbit Charge HR",
            brand: "FITBIT",
            shortDescription: "Analyse des activités et du sommeil, alarme silencieuse, présentation du numéro de l'appelant, partage et défis.",
            longDescription: "Soyez au top de votre forme ! Portez le bracelet FitbitCharge. écran connecté et montre en même temps, Il mesure votre activité tout au long de la journée, vous donne l'heure et affiche vos notifications. Il mesure la qualité de votre sommeil , vous aide à mieux dormir et vous réveille silencieusement le matin. l'application avec laquelle le bracelet est associé vous permet de visualiser les résultats de votre activité journalière et l'améliorer de jour en jour.",
            price: "149.99 €*",
            image: "fitbitchargehr.png",
            video: "",
            specifications: {
                category: {
                    label: "Type de montre",
                    values: "Tracker d'activité"
                },
                clock: {
                    label: "Affiche l'heure",
                    values: true
                },
               podometer: {
                    label: "Podomètre (pas et distance parcourue)",
                    values: true
                },
                heartbeat: {
                    label: "Mesure fréquence cardiaque",
                    values: true
                },
                calories: {
                    label: "Calories brulées",
                    values: true
                },
                sleep: {
                    label: "Suivi du sommeil",
                    values: true
                },
                notifications: {
                    label: "Affiche les notifications",
                    values: true
                },
                take_call: {
                    label: "Option décrocher/raccrocher",
                    values: false
                },
                 music: {
                    label: "Contrôle de la musique",
                    values: false
                },
                photo: {
                    label: "Contrôle de l'appareil photo",
                    values: false
                },
                speaker: {
                    label: "Haut-parleurs (musique et voix)",
                    values: false
                },
                voice: {
                    label: "Déclencher des actions par la voix",
                    values: false
                },
                water: {
                    label: "Résistance à l'eau (éclaboussures)",
                    values: true
                },
                dive: {
                    label: "Etanchéité (nage)",
                    values: false
                },
                gps: {
                    label: "GPS",
                    values: false
                },
                case: {
                    label: "Boîtier",
                    values: "Carré"
                },
                autonomy: {
                    label: "Autonomie",
                    values: "5 jours"
                },
                os: {
                    label: "Systèmes d'exploitation",
                    values: {
                        android: {
                            label: "Android 4.3  et +"
                        },
                        ios: {
                            label: "iOS 7.0 et +"
                        },
                        windowsphone: {
                            label: "Windows Phone 8.1 et +"
                        }
                    }
                },
                bluetooth: {
                    label: "Bluetooth/processeur",
                    values: "Bluetooth 4.0"
                }
            }
        },
        {
            id: 15,
            name: "Polar M400",
            brand: "POLAR",
            shortDescription: "Suivi d’activité 24h/24, entraînement avancées et GPS.",
            longDescription: "Surpassez-vous ! Polar M400 est une référence du marché du sport, l'idéal pour suivre son activité sportive. Vous y adapterez facilement grâce à sa précision et sa simplicité. Tout au long de votre entraînement, la M400 vous guidera en vous indiquant si vous devez accélérer ou ralentir. Après chaque course la M400 effectue des calculs et vous donne l’évolution de vos performances en matière de course à pied. Examinez vos performances grâce à une série de résumés d’activité très complets (jour / semaine / mois) et améliorer les.",
            price: "159.99 €*",
            image: "polarm400.png",
            video: "",
            specifications: {
                category: {
                    label: "Type de montre",
                    values: "Tracker d'activité"
                },
                clock: {
                    label: "Affiche l'heure",
                    values: true
                },
               podometer: {
                    label: "Podomètre (pas et distance parcourue)",
                    values: true
                },
                heartbeat: {
                    label: "Mesure fréquence cardiaque",
                    values: false
                },
                calories: {
                    label: "Calories brulées",
                    values: true
                },
                sleep: {
                    label: "Suivi du sommeil",
                    values: true
                },
                notifications: {
                    label: "Affiche les notifications",
                    values: true
                },
                take_call: {
                    label: "Option décrocher/raccrocher",
                    values: false
                },
                 music: {
                    label: "Contrôle de la musique",
                    values: false
                },
                photo: {
                    label: "Contrôle de l'appareil photo",
                    values: false
                },
                speaker: {
                    label: "Haut-parleurs (musique et voix)",
                    values: false
                },
                voice: {
                    label: "Déclencher des actions par la voix",
                    values: false
                },
                water: {
                    label: "Résistance à l'eau (éclaboussures)",
                    values: true
                },
                dive: {
                    label: "Etanchéité (nage)",
                    values: true
                },
                gps: {
                    label: "GPS",
                    values: true
                },
                case: {
                    label: "Boîtier",
                    values: "Carré"
                },
                autonomy: {
                    label: "Autonomie",
                    values: "30 jours/10h si GPS"
                },
                os: {
                    label: "Systèmes d'exploitation",
                    values: {
                        android: {
                            label: "Android 4.3  et +"
                        },
                        ios: {
                            label: "iOS 7.0 et +"
                        }
                    }
                },
                bluetooth: {
                    label: "Bluetooth/processeur",
                    values: "Bluetooth 4.0"
                }
            }
        }
    ];

    vm.filters = [];
    vm.compareList = [];

    vm.goTo = function(url) {
        $location.url(url);
    };

    vm.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    };

    $scope.$back = function() {
        window.history.back();
    };

	// envois de stats
    $scope.stats = function(action, label) {
        if (prod) {
            document.getElementById("stats").innerHTML = '<img width="1" height="1" src="'+domaine+'stats.php?' +
                'site='  + encodeURIComponent("merch-digital") +
                '&subsite=' + encodeURIComponent(appli) +
                '&rub=' + encodeURIComponent(label) +
                '&source=' + encodeURIComponent(action) +
                '&from=' + encodeURIComponent(boutique) +
                '&page=' + encodeURIComponent(label) +
                '&referrer=' + encodeURIComponent(document.referrer) +
                '&Rdm=' + Math.random() +
                '" />';
        }
	};

    // gestion events/timeout
    $scope.events = [];

    $scope.$on('IdleStart', function() {
        //console.log("IdleStart");
    });

    $scope.$on('IdleWarn', function(e, countdown) {
        //console.log("IdleWarn: " + countdown);
    });

    $scope.$on('IdleTimeout', function() {
        //console.log("IdleTimeout");
        //$location.url("/thanks");
        //$scope.$apply();
    });

}]);

app.controller('HomeCtrl', ['$scope', '$location', '$window', '$interval', 'Idle', function($scope, $location, $window, $interval, Idle) {

    var vm = this;

    Idle.unwatch();

    $scope.app.filters = [];

    $scope.go = function ( path ) {
        $interval.cancel(anim);
        $location.path( path );
	};

	$scope.textIndex = 0;

    var anim = $interval(function() {
        if ($scope.textIndex < 2) {
            $scope.textIndex++;
        } else {
            $scope.textIndex = 0;
        }
    }, 3000) ;

}]);

app.controller('QuestionCtrl', ['$scope', '$location', '$window', 'Idle', '$timeout', function($scope, $location, $window, Idle, $timeout) {

    var vm = this;

    $scope.clicked = false;

    Idle.watch();

    // Index de question précédente
    $scope.prevQuestions = [];
    // Index de question en cours (par défaut : première question)
    $scope.currentQuestionIndex = 0;
    // Nombre total de questions
    $scope.nbQuestions = $scope.app.questions.length;

    // Sélectionne une réponse
    $scope.select = function(index) {
        // Couleur onClick
        $scope.selectedIndex = index;
        // Légère attente
        $timeout(function() {
            // On enregistre la question précédente
            $scope.prevQuestions.push($scope.currentQuestionIndex);
            // TODO : Valider la réponse / Ajouter les filtres au tableau
            $scope.app.filters.push($scope.app.questions[$scope.currentQuestionIndex].answers[index].filters);
            // On avance a la question suivante
            $scope.nextQuestion($scope.app.questions[$scope.currentQuestionIndex].answers[index].next);
            // Annulation couleur onClick
            $scope.selectedIndex = null;
        }, 200);
    };

    // Question précédente
    $scope.prevQuestion = function() {
        // on retire le dernier filtre
        $scope.app.filters.pop();
        // on réaffiche la question précédente (si on n'est pas sur la question root)
        if ($scope.prevQuestions.length > 0) {
            $scope.currentQuestionIndex = $scope.prevQuestions.pop();
        }
    };

    // Question suivante
    $scope.nextQuestion = function(index) {
        // Si index =! null, question suivante
        if (index) {
            $scope.currentQuestionIndex = index;
        } else {
            $location.path('/results');
        }
    };

    $scope.go = function ( path ) {
	  $location.path( path );
	};

}]);

app.controller('ResultsCtrl', ['$scope', '$location', '$window', function($scope, $location, $window) {

    var vm = this;

    vm.compareList = [];

    $scope.app.compareList = [];

    $scope.isFiltered = function(products, filters) {

        if (filters.length === 0) return false;

        // Tableau contenant les produits filtrés
        var filtered = 0;

        // Pour chaque produit...
        angular.forEach(products, function(product) {

            var filtersMatches = 0;
            var filtersCount = 0;

            // Variable définissant si le produit qu'on teste est approuvé par les filtres
            angular.forEach(filters, function(filterGroup) {
                angular.forEach(filterGroup, function(filter, filterKey) {

                    if (typeof filter === 'object') {

                        var subFiltersMatches = 0;
                        var subFiltersCount = 0;

                        angular.forEach(filter, function(subFilter, subFilterKey) {
                            if (product.specifications[filterKey].values[subFilterKey] !== undefined) {
                                if (subFilter === true) {
                                    subFiltersMatches++;
                                }
                            }

                            subFiltersCount++;
                        });

                        if (subFiltersMatches === subFiltersCount) {
                            filtersMatches++;
                        }

                    } else if (typeof filter === 'boolean') {
                        if (product.specifications[filterKey].values === filter) {
                            filtersMatches++;
                        }
                    } else if (typeof filter === 'string') {
                        if (product.specifications[filterKey].values === filter) {
                            filtersMatches++;
                        }
                    }

                    filtersCount++;

                });
            });

            if (filtersMatches === filtersCount) {
                filtered++;
            }
        });

        if (filtered > 0) {
            return true;
        } else {
            return false;
        }
    };

    $scope.videoSelected = null;
    $scope.modalVideoOpened = false;

    $scope.isInCompareList = function(product) {
        if (vm.compareList.indexOf(product) !== -1) {
            return true;
        } else {
            return false;
        }
    };

    $scope.countCompareList = function() {
        return vm.compareList.length;
    };

    $scope.addToCompareList = function(product) {
        if ($scope.isInCompareList(product) === false) {
            if (vm.compareList.length < 3) {
                vm.compareList.push(product);
            }
        } else {
            vm.compareList.splice(vm.compareList.indexOf(product), 1);
        }
    };

    $scope.openVideo = function(url) {
        if (url !== null) {
            $scope.videoSelected = url;
            $scope.modalVideoOpened = true;
        }
    };

    $scope.closeVideo = function(url) {
        $scope.videoSelected = null;
        $scope.modalVideoOpened = false;
    };

    $scope.openCompare = function() {
        if (vm.compareList.length > 0) {
            $scope.app.compareList = vm.compareList;
            $location.path('/compare');
        }
    };

}]);

app.controller('CompareCtrl', ['$scope', '$location', '$window', '$timeout', 'MailFactory', function($scope, $location, $window, $timeout, MailFactory) {

    var vm = this;

    $scope.modalMailOpened = false;
    $scope.modalVideoOpened = false;

    $scope.focusEmailField = function() {
        $timeout(function() {
            angular.element('#email').focus();
        }, 400);
    };

    $scope.sendMail = function() {
        $scope.httpProcessing = true;

        // sauvegarde des checks
        MailFactory.sendMail("?action=mail&type=selection", $scope.email, $scope.app.compareList).then(
            function(results) {
                $scope.httpProcessing = false;
                $scope.message = results.data.message;
                $scope.modalMailOpened = false;
                $scope.email = "";
            },
            function(error) {
                $scope.httpProcessing = false;
                $scope.message = error.data.message;
                $scope.modalMailOpened = false;
                $scope.email = "";
            }
        );
    };

    $scope.go = function ( path ) {
	  $location.path( path );
	};

    $scope.openVideo = function(url) {
        if (url !== null) {
            $scope.videoSelected = url;
            $scope.modalVideoOpened = true;
        }
    };

    $scope.closeVideo = function(url) {
        $scope.videoSelected = null;
        $scope.modalVideoOpened = false;
    };

}]);

app.controller('ProductCtrl', ['$scope', '$location', '$window', '$routeParams', '$timeout', 'MailFactory', function($scope, $location, $window, $routeParams, $timeout, MailFactory) {

    var vm = this;

    $scope.productIndex = $routeParams.index;

    $scope.modalMailOpened = false;
    $scope.modalInfoOpened = false;

    $scope.focusEmailField = function() {
        $timeout(function() {
            angular.element('#email').focus();
        }, 400);
    };

    $scope.sendMail = function() {
        $scope.httpProcessing = true;

        // sauvegarde des checks
        MailFactory.sendMail("?action=mail&type=product", $scope.email, $scope.app.products[$scope.productIndex]).then(
            function(results) {
                $scope.httpProcessing = false;
                $scope.message = results.data.message;
                $scope.modalMailOpened = false;
                $scope.email = "";
            },
            function(error) {
                $scope.httpProcessing = false;
                $scope.message = error.data.message;
                $scope.modalMailOpened = false;
                $scope.email = "";
            }
        );
    };

    $scope.go = function ( path ) {
      $location.path( path );
    };

    $scope.openVideo = function(url) {
        if (url !== null) {
            $scope.videoSelected = url;
            $scope.modalVideoOpened = true;
        }
    };

    $scope.closeVideo = function(url) {
        $scope.videoSelected = null;
        $scope.modalVideoOpened = false;
    };

}]);

app.controller('ThanksCtrl', ['$scope', '$location', '$window', '$timeout', function($scope, $location, $window, $timeout) {

    var vm = this;

    $timeout(function() {
        $location.path("/");
    }, 3000);

}]);