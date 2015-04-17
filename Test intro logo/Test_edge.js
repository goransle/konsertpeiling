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
                            rect: ['0px', '0px', '360px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Logo_linje2',
                            type: 'text',
                            rect: ['-162px', '220px', 'auto', 'auto', 'auto', 'auto'],
                            text: "BERGEN",
                            align: "center",
                            font: ['passion-one, sans-serif', [36, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Logo_linje1',
                            type: 'text',
                            rect: ['396px', '180px', '104px', '40px', 'auto', 'auto'],
                            text: "LOGO",
                            align: "center",
                            font: ['arapey, sans-serif', [36, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", ""]
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
                            rect: ['208px', '215px', '150px', '40px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"sky2.png",'0px','0px'],
                            transform: [[],[],[],['-0.58667','0.75']]
                        },
                        {
                            id: 'logo_fjell_liten',
                            type: 'image',
                            rect: ['5px', '512px', '349px', '144px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"logo_fjell_liten.png",'0px','0px']
                        },
                        {
                            id: 'sky32',
                            type: 'image',
                            rect: ['-118px', '320px', '100px', '37px', 'auto', 'auto'],
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
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '360px', '640px', 'auto', 'auto'],
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
                            "eid65",
                            "top",
                            0,
                            2500,
                            "linear",
                            "${logo_fjell_liten}",
                            '512px',
                            '527px'
                        ],
                        [
                            "eid43",
                            "left",
                            2500,
                            2500,
                            "linear",
                            "${sky32}",
                            '-118px',
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
                            "eid45",
                            "top",
                            2500,
                            1000,
                            "linear",
                            "${sky32}",
                            '320px',
                            '313px'
                        ],
                        [
                            "eid18",
                            "opacity",
                            2500,
                            2500,
                            "linear",
                            "${logo_fjell_liten}",
                            '0',
                            '1'
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
                            5000,
                            "linear",
                            "${Rectangle}",
                            'rgba(188,224,197,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid28",
                            "left",
                            2000,
                            3000,
                            "linear",
                            "${sky2}",
                            '208px',
                            '356px'
                        ],
                        [
                            "eid23",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${Logo_linje1}",
                            '180px',
                            '180px'
                        ],
                        [
                            "eid26",
                            "left",
                            3000,
                            2000,
                            "linear",
                            "${Logo_linje1}",
                            '396px',
                            '128px'
                        ],
                        [
                            "eid32",
                            "opacity",
                            1500,
                            2000,
                            "linear",
                            "${sky2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${Logo_linje2}",
                            '220px',
                            '220px'
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
                            "eid30",
                            "top",
                            2000,
                            3000,
                            "linear",
                            "${sky2}",
                            '215px',
                            '235px'
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
                            "eid3",
                            "font-size",
                            3000,
                            2000,
                            "linear",
                            "${Logo_linje1}",
                            '36px',
                            '42px'
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
                        ],
                        [
                            "eid22",
                            "left",
                            3000,
                            2000,
                            "linear",
                            "${Logo_linje2}",
                            '-162px',
                            '128px'
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
                            "eid5",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '360px',
                            '360px'
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
                            "eid59",
                            "volume",
                            0,
                            1250,
                            "linear",
                            "${Life_of_Riley_kort2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Test_edgeActions.js");
})("EDGE-1281785");
