/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'passion-one, sans-serif': '<script src=\"http://use.edgefonts.net/passion-one:n9,n7,n4:all.js\"></script>',
            'arapey, sans-serif': '<script src=\"http://use.edgefonts.net/arapey:n4,i4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "height",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '401px', '640px', 'auto', 'auto'],
                            fill: ["rgba(102,68,97,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sky',
                            type: 'image',
                            rect: ['41px', '300px', '113px', '30px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sky.png",'0px','0px']
                        },
                        {
                            id: 'sky2',
                            type: 'image',
                            rect: ['464px', '224px', '150px', '40px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"sky2.png",'0px','0px'],
                            transform: [[],[],[],['-0.58667','0.75']]
                        },
                        {
                            id: 'Intro_start',
                            type: 'image',
                            rect: ['-18px', '483px', '442px', '193px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Intro_start.png",'0px','0px']
                        },
                        {
                            id: 'sky32',
                            type: 'image',
                            rect: ['-137px', '127px', '100px', '37px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"sky3.png",'0px','0px']
                        },
                        {
                            id: 'sky4',
                            type: 'image',
                            rect: ['401px', '66px', '73px', '30px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"sky4.png",'0px','0px']
                        },
                        {
                            id: 'Life_of_Riley_kort2',
                            display: 'none',
                            volume: '1',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['137', '200', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            source: [aud+"Life%20of%20Riley_kort2.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'horbartbergen',
                            type: 'image',
                            rect: ['64px', '229px', '272px', '91px', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"horbartbergen.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '400px', '640px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 7912.594,
                    autoPlay: true,
                    data: [
                        [
                            "eid91",
                            "left",
                            2000,
                            2983,
                            "linear",
                            "${sky32}",
                            '-163px',
                            '47px'
                        ],
                        [
                            "eid43",
                            "left",
                            4983,
                            17,
                            "linear",
                            "${sky32}",
                            '47px',
                            '18px'
                        ],
                        [
                            "eid53",
                            "top",
                            1737,
                            3246,
                            "linear",
                            "${sky4}",
                            '66px',
                            '64px'
                        ],
                        [
                            "eid92",
                            "top",
                            2000,
                            1483,
                            "linear",
                            "${sky32}",
                            '375px',
                            '320px'
                        ],
                        [
                            "eid45",
                            "top",
                            3483,
                            17,
                            "linear",
                            "${sky32}",
                            '320px',
                            '313px'
                        ],
                        [
                            "eid93",
                            "top",
                            3500,
                            1483,
                            "linear",
                            "${sky32}",
                            '313px',
                            '377px'
                        ],
                        [
                            "eid51",
                            "opacity",
                            1737,
                            1165,
                            "linear",
                            "${sky4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "background-color",
                            0,
                            2365,
                            "linear",
                            "${Rectangle}",
                            'rgba(193,130,184,1.00)',
                            'rgba(102,68,97,1)'
                        ],
                        [
                            "eid76",
                            "background-color",
                            2365,
                            2635,
                            "linear",
                            "${Rectangle}",
                            'rgba(102,68,97,1)',
                            'rgba(102,68,97,1.00)'
                        ],
                        [
                            "eid85",
                            "left",
                            2000,
                            1183,
                            "linear",
                            "${sky2}",
                            '464px',
                            '411px'
                        ],
                        [
                            "eid86",
                            "left",
                            3183,
                            818,
                            "linear",
                            "${sky2}",
                            '411px',
                            '197px'
                        ],
                        [
                            "eid88",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${sky2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid73",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            [270,[['rgba(255,255,255,0)',0],['rgba(255,255,255,0)',100]]],
                            [270,[['rgba(255,255,255,0)',0],['rgba(255,255,255,0)',100]]]
                        ],
                        [
                            "eid72",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgb(0, 0, 0)',
                            'rgb(0, 0, 0)'
                        ],
                        [
                            "eid12",
                            "top",
                            2000,
                            2500,
                            "linear",
                            "${sky}",
                            '300px',
                            '108px'
                        ],
                        [
                            "eid87",
                            "top",
                            3183,
                            818,
                            "linear",
                            "${sky2}",
                            '224px',
                            '171px'
                        ],
                        [
                            "eid42",
                            "opacity",
                            2500,
                            1141,
                            "linear",
                            "${sky32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "volume",
                            0,
                            750,
                            "linear",
                            "${Life_of_Riley_kort2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid52",
                            "left",
                            1737,
                            3246,
                            "linear",
                            "${sky4}",
                            '401px',
                            '269px'
                        ],
                        [
                            "eid63",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid66",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '401px',
                            '401px'
                        ],
                        [
                            "eid62",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '640px',
                            '640px'
                        ],
                        [
                            "eid10",
                            "left",
                            2000,
                            2500,
                            "linear",
                            "${sky}",
                            '-137px',
                            '41px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("idex_edgeActions.js");
})("EDGE-1281785");
