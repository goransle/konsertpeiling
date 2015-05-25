/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
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
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'sky2',
                            type: 'image',
                            rect: ['-141px', '364px', '105px', '28px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sky2.png",'0px','0px']
                        },
                        {
                            id: 'sky3',
                            type: 'image',
                            rect: ['12px', '303px', '75px', '28px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sky3.png",'0px','0px']
                        },
                        {
                            id: 'sky4',
                            type: 'image',
                            rect: ['407px', '195px', '100px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sky4.png",'0px','0px']
                        },
                        {
                            id: 'hode1',
                            type: 'image',
                            rect: ['105px', '-116px', '86px', '278px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"hode1.png",'0px','0px']
                        },
                        {
                            id: 'hode3',
                            type: 'image',
                            rect: ['232px', '-349px', '111px', '336px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"hode3.png",'0px','0px']
                        },
                        {
                            id: 'horbartbergen',
                            type: 'image',
                            rect: ['31px', '175px', '299px', '94px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"horbartbergen22.png",'0px','0px']
                        },
                        {
                            id: 'hode5',
                            type: 'image',
                            rect: ['10px', '-235px', '86px', '417px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"hode5.png",'0px','0px']
                        },
                        {
                            id: 'Intro_start',
                            type: 'image',
                            rect: ['-28px', '336px', '417px', '182px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Intro_start.png",'0px','0px']
                        },
                        {
                            id: 'introhb',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['-70', '139', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            source: [aud+"introhb.mp3"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '360px', '480px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(190,216,236,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 12564.898,
                    autoPlay: true,
                    data: [
                        [
                            "eid82",
                            "top",
                            4500,
                            2500,
                            "easeInBounce",
                            "${sky4}",
                            '195px',
                            '303px'
                        ],
                        [
                            "eid122",
                            "opacity",
                            2000,
                            250,
                            "easeInOutQuint",
                            "${Intro_start}",
                            '0',
                            '1'
                        ],
                        [
                            "eid124",
                            "top",
                            2000,
                            0,
                            "easeInBounce",
                            "${Intro_start}",
                            '336px',
                            '336px'
                        ],
                        [
                            "eid121",
                            "top",
                            7250,
                            500,
                            "linear",
                            "${hode3}",
                            '-349px',
                            '-145px'
                        ],
                        [
                            "eid74",
                            "top",
                            5500,
                            1000,
                            "easeOutQuad",
                            "${hode5}",
                            '-430px',
                            '-235px'
                        ],
                        [
                            "eid84",
                            "top",
                            6250,
                            2750,
                            "linear",
                            "${sky3}",
                            '303px',
                            '305px'
                        ],
                        [
                            "eid95",
                            "left",
                            3750,
                            1477,
                            "linear",
                            "${sky2}",
                            '-141px',
                            '75px'
                        ],
                        [
                            "eid70",
                            "top",
                            2000,
                            773,
                            "easeInOutCirc",
                            "${hode1}",
                            '-286px',
                            '-116px'
                        ],
                        [
                            "eid83",
                            "left",
                            4500,
                            2500,
                            "easeInExpo",
                            "${sky4}",
                            '407px',
                            '232px'
                        ],
                        [
                            "eid85",
                            "left",
                            6250,
                            2250,
                            "linear",
                            "${sky3}",
                            '-130px',
                            '12px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-11372302");
