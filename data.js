var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby",
      "name": "LOBBY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.015247653800081196,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7396468152242903,
          "pitch": 0.22418570086801282,
          "rotation": 0,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrada",
      "name": "ENTRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0540386262222974,
          "pitch": 0.45407468700845754,
          "rotation": 0,
          "target": "2-sala-comedor"
        },
        {
          "yaw": 3.1159286672221995,
          "pitch": 0.2506063359239583,
          "rotation": 0,
          "target": "4-sala"
        },
        {
          "yaw": -0.36399684482968375,
          "pitch": 0.13908337373525903,
          "rotation": 0,
          "target": "0-lobby"
        },
        {
          "yaw": -0.15114673997919148,
          "pitch": 0.10935105385858712,
          "rotation": 0,
          "target": "10-bao-visitas"
        },
        {
          "yaw": -0.015555963436064246,
          "pitch": 0.10288436429424053,
          "rotation": 0,
          "target": "6-family"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sala-comedor",
      "name": "SALA-COMEDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5882118674488481,
          "pitch": 0.49571805777202727,
          "rotation": 0,
          "target": "1-entrada"
        },
        {
          "yaw": 3.1231429339794374,
          "pitch": 0.3449160578269588,
          "rotation": 0,
          "target": "3-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-comedor",
      "name": "COMEDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.026621359007894085,
          "pitch": 0.2578427099131684,
          "rotation": 0,
          "target": "2-sala-comedor"
        },
        {
          "yaw": -1.8585823093884564,
          "pitch": 0.3134941183898121,
          "rotation": 0,
          "target": "6-family"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sala",
      "name": "SALA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2680825819982662,
          "pitch": 0.5091875207504195,
          "rotation": 0,
          "target": "5-den"
        },
        {
          "yaw": 3.1239040247435153,
          "pitch": 0.26637611526838256,
          "rotation": 0,
          "target": "1-entrada"
        },
        {
          "yaw": -2.749147076547672,
          "pitch": 0.27944047793638305,
          "rotation": 0,
          "target": "2-sala-comedor"
        },
        {
          "yaw": 2.998781189484305,
          "pitch": 0.2403398918488584,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-den",
      "name": "DEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0021507245116137,
          "pitch": 0.43776622517092,
          "rotation": 0,
          "target": "4-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-family",
      "name": "FAMILY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.111436495396422,
          "pitch": 0.3344792445051894,
          "rotation": 0,
          "target": "3-comedor"
        },
        {
          "yaw": 1.8205749420305306,
          "pitch": 0.10907100260237357,
          "rotation": 6.283185307179586,
          "target": "7-rec-principal"
        },
        {
          "yaw": 1.5681596271097753,
          "pitch": 0.03546566981403565,
          "rotation": 0,
          "target": "8-rec-nia"
        },
        {
          "yaw": 1.478083904628268,
          "pitch": 0.037995087721206744,
          "rotation": 0,
          "target": "9-rec-nios"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-rec-principal",
      "name": "REC PRINCIPAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.18627616525273,
          "pitch": 0.25040414851364545,
          "rotation": 0,
          "target": "6-family"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-rec-nia",
      "name": "REC NIÑA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.609789185229392,
          "pitch": 0.3732728645562311,
          "rotation": 0,
          "target": "6-family"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-rec-nios",
      "name": "REC NIÑOS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.461559983198292,
          "pitch": 0.2875839482860627,
          "rotation": 0,
          "target": "6-family"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bao-visitas",
      "name": "BAÑO VISITAS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3201428698957116,
          "pitch": 0.190092704007208,
          "rotation": 0,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
