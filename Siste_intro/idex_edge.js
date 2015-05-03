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
                            rect: ['238px', '408px', '113px', '30px', 'auto', 'auto'],
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
                            rect: ['-137px', '404px', '100px', '37px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"sky3.png",'0px','0px']
                        },
                        {
                            id: 'sky4',
                            type: 'image',
                            rect: ['297px', '453px', '73px', '30px', 'auto', 'auto'],
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
                            id: 'horbartbergen22',
                            type: 'image',
                            rect: ['47px', '259px', '312px', '85px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"horbartbergen2.png",'0px','0px']
                        },
                        {
                            id: 'headphone',
                            type: 'image',
                            rect: ['256px', '130px', '129px', '162px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"headphone.png",'0px','0px']
                        },
                        {
                            id: 'headphone3',
                            type: 'image',
                            rect: ['3px', '-241px', '200px', '251px', 'auto', 'auto'],
                            autoOrient: false,
                            overflow: 'visible',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"headphone.png",'0px','0px'],
                            transform: [[],['-29'],[],['0.5','0.5']]
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
                            "eid108",
                            "top",
                            2000,
                            2397,
                            "easeInOutBounce",
                            "${headphone}",
                            '-226px',
                            '128px'
                        ],
                        [
                            "eid107",
                            "top",
                            4397,
                            230,
                            "easeInOutBounce",
                            "${headphone}",
                            '128px',
                            '130px'
                        ],
                        [
                            "eid111",
                            "top",
                            4627,
                            873,
                            "easeInOutBounce",
                            "${headphone}",
                            '130px',
                            '70px'
                        ],
                        [
                            "eid102",
                            "left",
                            1115,
                            2635,
                            "linear",
                            "${sky32}",
                            '-137px',
                            '27px'
                        ],
                        [
                            "eid53",
                            "top",
                            1737,
                            3246,
                            "linear",
                            "${sky4}",
                            '66px',
                            '453px'
                        ],
                        [
                            "eid103",
                            "top",
                            1115,
                            2635,
                            "linear",
                            "${sky32}",
                            '404px',
                            '371px'
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
                            "eid86",
                            "left",
                            3183,
                            1444,
                            "linear",
                            "${sky2}",
                            '411px',
                            '-22px'
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
                            "eid128",
                            "opacity",
                            2307,
                            876,
                            "easeInOutBounce",
                            "${headphone3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "top",
                            2307,
                            1943,
                            "easeInOutBounce",
                            "${headphone3}",
                            '-241px',
                            '-46px'
                        ],
                        [
                            "eid131",
                            "top",
                            4250,
                            733,
                            "easeInOutBounce",
                            "${headphone3}",
                            '-46px',
                            '65px'
                        ],
                        [
                            "eid12",
                            "top",
                            2000,
                            2983,
                            "linear",
                            "${sky}",
                            '300px',
                            '408px'
                        ],
                        [
                            "eid87",
                            "top",
                            3183,
                            1444,
                            "linear",
                            "${sky2}",
                            '224px',
                            '448px'
                        ],
                        [
                            "eid73",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]],
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]
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
                            "eid110",
                            "left",
                            4627,
                            0,
                            "linear",
                            "${headphone}",
                            '256px',
                            '256px'
                        ],
                        [
                            "eid104",
                            "opacity",
                            1115,
                            0,
                            "linear",
                            "${sky32}",
                            '1',
                            '1'
                        ],
                        [
                            "eid10",
                            "left",
                            2000,
                            2627,
                            "easeInOutQuint",
                            "${sky}",
                            '-137px',
                            '238px'
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
                            "eid95",
                            "opacity",
                            0,
                            4983,
                            "linear",
                            "${horbartbergen22}",
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
                            "eid126",
                            "left",
                            2307,
                            2676,
                            "easeInOutBounce",
                            "${headphone3}",
                            '3px',
                            '27px'
                        ],
                        [
                            "eid52",
                            "left",
                            1737,
                            3246,
                            "linear",
                            "${sky4}",
                            '401px',
                            '297px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("idex_edgeActions.js");
})("EDGE-1281785");
