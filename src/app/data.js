export default {
"config":
{
"version":"configdomo.json 04/09/2017 10:30",
"configWeb": {
  "bottomMenus": [
    { "glyphicon":"glyphicon-home", 
      "label":"Domo",
      "components": [
        {"type":"command", "label": "Salon On",  "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.on"}},
        {"type":"command", "label": "Salon Off",  "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.off"}, "break":true},
        {"type":"separator", "label": "-"},
        {"type":"command", "label": "TV On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"tvon"}},
        {"type":"command", "label": "TV Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"tvoff"}, "break":true},
        {"type":"separator", "label": "-"},
        {"type":"command", "label": "Ampli On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.on"}},
        {"type":"command", "label": "Ampli Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.off"}, "break":true}
      ]
    },
    { "glyphicon":"glyphicon-headphones", 
      "label":"Média",
      "components": [
        {"type":"command", "label": "TV On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"tvon"}},
        {"type":"command", "label": "TV Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"tvoff"}, "break":true},
        {"type":"separator", "label": "-"},
        {"type":"command", "label": "Ampli On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.on"}},
        {"type":"command", "label": "Ampli Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.off"}, "break":true},
        {"type":"separator", "label": "-"},
        {"type":"command", "label": "VP On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"vpon"}},
        {"type":"command", "label": "VP Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"vpoff"}, "break":true}
      ]
    },
    { "glyphicon":"glyphicon-lamp", 
      "label":"Salon",
      "components": [
        {"type":"command", "label": "1 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.1.on"}},
        {"type":"command", "label": "1 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.1.off"}, "break":true},
        {"type":"command", "label": "2 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.2.on"}},
        {"type":"command", "label": "2 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.2.off"}, "break":true},
        {"type":"command", "label": "3 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.3.on"}},
        {"type":"command", "label": "3 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.3.off"}, "break":true},
        {"type":"command", "label": "4 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.4.on"}},
        {"type":"command", "label": "4 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.4.off"}, "break":true},
        {"type":"command", "label": "5 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.5.on"}},
        {"type":"command", "label": "5 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.5.off"}, "break":true}
      ]
    },
    { "glyphicon":"glyphicon-lamp", 
      "label":"Studio",
      "components": [
        {"type":"command", "label": "1 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.1.on"}},
        {"type":"command", "label": "1 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.1.off"}, "break":true},
        {"type":"command", "label": "2 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.2.on"}},
        {"type":"command", "label": "2 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.2.off"}, "break":true},
        {"type":"command", "label": "3 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.3.on"}},
        {"type":"command", "label": "3 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.3.off"}, "break":true}
      ]
    },
    { "glyphicon":"glyphicon-hdd", 
      "label":"Devices",
      "components": [
        {"type":"command", "label": "TV On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"tvon"}},
        {"type":"command", "label": "TV Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"tvoff"}, "break":true},
        {"type":"separator", "label": "-"},
        {"type":"command", "label": "Ampli On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.on"}},
        {"type":"command", "label": "Ampli Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.off"}, "break":true},
        {"type":"separator", "label": "-"},
        {"type":"command", "label": "VP On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"vpon"}},
        {"type":"command", "label": "VP Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"vpoff"}, "break":true}
      ]
    },
    { "glyphicon":"glyphicon-cog", 
      "label":"Options",
      "components": [
        {"type":"command", "label": "Mode", "command": {"type":"cmdCtrl", "payload":"toggleMode"}},
        {"type":"command", "label": "Taille", "command": {"type":"cmdCtrl", "payload":"toggleSize"}},
        {"type":"command", "label": "Popup mode", "command": {"type":"cmdCtrl", "payload":"togglePopup"}}
      ]
    }
  ],

  "components": [
    {"type":"tabset", "tabs": [
      {"type":"tab", "id":"tabMedia", "label": "Média", "components": [
        {"type":"dropdownMenu", "id":"dropTVONOFF", "label": "On/Off", "modalLabel": "On/Off", "components": [
          {"type":"command", "label": "TV On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"tvon"}},
          {"type":"command", "label": "TV Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"tvoff"}, "break":true},
          {"type":"separator"},
          {"type":"command", "label": "TVLG On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/tvlg", "payload":"system/turnOn"}},
          {"type":"command", "label": "TVLG Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/tvlg", "payload":"system/turnOff"}, "break":true},
          {"type":"separator"},
          {"type":"command", "label": "Ampli On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.on"}},
          {"type":"command", "label": "Ampli Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.off"}, "break":true},
          {"type":"separator"},
          {"type":"command", "label": "VP On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"vpon"}},
          {"type":"command", "label": "VP Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"vpoff"}, "break":true}
        ]},
        {"type":"dropdownMenu", "id":"dropHDMI", "label": "HDMI", "components": [
          {"type":"command", "label": "1", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"hdmi.1"}},
          {"type":"command", "label": "2", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"hdmi.2"}},
          {"type":"command", "label": "3", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"hdmi.3"}},
          {"type":"command", "label": "4", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"hdmi.4"}},
          {"type":"command", "label": "5", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"hdmi.5"}}
        ]},
        {"type":"dropdownMenu", "id":"dropAmpli", "label": "Ampli", "components": [
          {"type":"command", "label": "Ampli On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.on"}},
          {"type":"command", "label": "Ampli Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.off"}, "break":true},
          {"type":"separator"},
          {"type":"command", "label": "Mode", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.mode"}},
          {"type":"separator"},
          {"type":"command", "label": "E1", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.e1"}},
          {"type":"command", "label": "E2", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.e2"}},
          {"type":"command", "label": "E3", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.e3"}}
        ], "break":true},
        {"type":"separator"},
        {"type":"command", "label": "", "glyphicon":"volume-up", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.volp"}},
        {"type":"command", "label": "", "glyphicon":"volume-down", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.volm"}},
        {"type":"command", "label": "", "glyphicon":"volume-off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"ampli.mute"}}
      ]},

      {"type":"tab", "id":"tabSalon", "label": "Salon", "components": [
        {"type":"command", "label": "On",  "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.on"}},
        {"type":"command", "label": "Off",  "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.off"}, "break":true},
        {"type":"command", "label": "1 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.1.on"}},
        {"type":"command", "label": "1 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.1.off"}},
        {"type":"command", "label": "Salon 1", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"toggle.salon.1"}, "status": {"url":"http://82.66.49.29:8888/api/status?id=salon.1", "key":"salon.1"}, "break":true},
        {"type":"command", "label": "2 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.2.on"}},
        {"type":"command", "label": "2 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.2.off"}},
        {"type":"command", "label": "Salon 2", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"toggle.salon.2"}, "status": {"url":"http://82.66.49.29:8888/api/status?id=salon.2", "key":"salon.2"}, "break":true},
        {"type":"command", "label": "3 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.3.on"}},
        {"type":"command", "label": "3 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.3.off"}},
        {"type":"command", "label": "Salon 3", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"toggle.salon.3"}, "status": {"url":"http://82.66.49.29:8888/api/status?id=salon.3", "key":"salon.3"}, "break":true},
        {"type":"command", "label": "4 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.4.on"}},
        {"type":"command", "label": "4 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.4.off"}},
        {"type":"command", "label": "Salon 4", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"toggle.salon.4"}, "status": {"url":"http://82.66.49.29:8888/api/status?id=salon.4", "key":"salon.4"}, "break":true},
        {"type":"command", "label": "5 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.5.on"}},
        {"type":"command", "label": "5 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.5.off"}},
        {"type":"command", "label": "Salon 5 On/Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"toggle.salon.5"}, "status": {"url":"http://82.66.49.29:8888/api/status?id=salon.5", "key":"salon.5"}, "break":true}
      ]},

      {"type":"tab", "id":"tabSalon2", "label": "Salon 2", "components": [
        {"type":"command", "label": "On",  "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.on"}},
        {"type":"command", "label": "Off",  "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.off"}, "break":true},
      
        {"type":"doubleCommand", "label": "1", "glyphicon":"glyphicon-lamp", "status": {"key":"salon.1"}, "components": [
          {"type":"command", "label": "On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.1.on"}},
          {"type":"command", "label": "Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.1.off"}}
        ], "break":true},
        {"type":"doubleCommand", "label": "2", "glyphicon":"glyphicon-lamp", "status": {"key":"salon.2"}, "components": [
          {"type":"command", "label": "On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.2.on"}},
          {"type":"command", "label": "Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.2.off"}}
        ], "break":true},
        {"type":"doubleCommand", "label": "3", "glyphicon":"glyphicon-lamp", "status": {"key":"salon.3"}, "components": [
          {"type":"command", "label": "On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.3.on"}},
          {"type":"command", "label": "Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.3.off"}}
        ], "break":true},
        {"type":"doubleCommand", "label": "4", "glyphicon":"glyphicon-lamp", "status": {"key":"salon.4"}, "components": [
          {"type":"command", "label": "On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.4.on"}},
          {"type":"command", "label": "Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.4.off"}}
        ], "break":true},
        {"type":"doubleCommand", "label": "5", "glyphicon":"glyphicon-lamp", "status": {"key":"salon.5"}, "components": [
          {"type":"command", "label": "On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.5.on"}},
          {"type":"command", "label": "Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"salon.5.off"}}
        ], "break":true}
      ]},
      
      {"type":"tab", "id":"tabStudio", "label": "Studio", "components": [
        {"type":"command", "label": "On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.on"}},
        {"type":"command", "label": "Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.off"}, "break":true},
        {"type":"command", "label": "1 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.1.on"}, "status": {"key":"studio.1"}},
        {"type":"command", "label": "1 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.1.off"}, "status": {"key":"studio.1"}, "break":true},
        {"type":"command", "label": "2 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.2.on"}},
        {"type":"command", "label": "2 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.2.off"}, "break":true},
        {"type":"command", "label": "3 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.3.on"}},
        {"type":"command", "label": "3 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.3.off"}, "break":true},
        {"type":"command", "label": "4 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.4.on"}},
        {"type":"command", "label": "4 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.4.off"}, "break":true},
        {"type":"command", "label": "5 On", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.5.on"}},
        {"type":"command", "label": "5 Off", "command": {"type":"cmdMqtt", "topic":"home/domo/nodedomo/cmd", "payload":"studio.5.off"}, "break":true}
      ]},

      {"type":"tab", "id":"tabDevices", "label": "Devices", "components": [
        {"type":"dropdownMenu", "id":"dropESPIR01", "label": "ESPIR01", "components": [
          {"type":"command", "label": "Version", "confirmation": true, "command": {"type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"version"}},
          {"type":"command", "label": "Toggle", "command": {"type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"toggle"}, "break":true},
          {"type":"separator"},
          {"type":"command", "label": "OTA", "confirmation": true, "command": {"type":"cmdMqtt", "topic":"home/domo/espIR01/OTA", "payload":"http://raffault.free.fr/ESPIR.ino.bin"}}
        ]},
        {"type":"dropdownMenu", "id":"dropArd1", "label": "Ard1", "components": [
          {"type":"command", "label": "Version", "command": {"type":"cmdMqtt", "topic":"home/domo/ard1/cmd", "payload":"version"}}
        ]},
        {"type":"dropdownMenu", "id":"dropSonOff01", "label": "SonOff01", "components": [
          {"type":"command", "label": "Version", "command": {"type":"cmdMqtt", "topic":"home/domo/sonoff01/cmd", "payload":"version"}},
          {"type":"command", "label": "Toggle",
            "command": {"type":"cmdMqtt", "topic":"home/domo/sonoff01/cmd", "payload":"toggle"},
            "statut":{"type":"cmdMqtt", "topic":"home/domo/sonoff01/statut", "payload":""},
            "break":true
          },
          {"type":"separator"},
          {"type":"command", "label": "OTA", "confirmation": true, "command": {"type":"cmdMqtt", "topic":"home/domo/sonoff01/OTA", "payload":"http://raffault.free.fr/ESPIR.ino.bin"}}
        ]},
        {"type":"dropdownMenu", "id":"dropSonOff02", "label": "SonOff02", "components": [
          {"type":"command", "label": "Version", "command": {"type":"cmdMqtt", "topic":"home/domo/sonoff02/cmd", "payload":"version"}},
          {"type":"command", "label": "Toggle", "command": {"type":"cmdMqtt", "topic":"home/domo/sonoff02/cmd", "payload":"toggle"}, "break":true},
          {"type":"separator"},
          {"type":"command", "label": "OTA", "confirmation": true, "command": {"type":"cmdMqtt", "topic":"home/domo/sonoff02/OTA", "payload":"http://raffault.free.fr/ESPIR.ino.bin"}}
        ], "break":true},
        
        {"type":"command", "label": "Version", "command": {"type":"cmdMqtt", "topic":"home/domo/sonoff01/cmd", "payload":"version"}},
        {"type":"command", "label": "Toggle",
          "command": {"type":"cmdMqtt", "topic":"home/domo/sonoff01/cmd", "payload":"toggle"},
          "status": {"url":"http://82.66.49.29:8888/api/status?id=sonoff01"},
          "break":true
        }
      ]}
    ]}
  ]
},

"commandCategories":[
{"label":"Favoris", "commandCategories":[
  {"label":"Général", "showLabel":false, "commands":[
		{"id":"comboSalon", "label":"Salon", "type":"cmdCombo", "closeOnCommand": false, "commands":[
			{"label":"Tout On", "type":"cmdCommand", "id":"salon.on"}, 
			{"label":"Tout Off", "type":"cmdCommand", "id":"salon.off", "break":true},
			{"label":"1 On", "type":"cmdCommand", "id":"salon.1.on"}, 
			{"label":"1 Off", "type":"cmdCommand", "id":"salon.1.off", "break":true},
			{"label":"2 On", "type":"cmdCommand", "id":"salon.2.on"}, 
			{"label":"2 Off", "type":"cmdCommand", "id":"salon.2.off", "break":true},
			{"label":"3 On", "type":"cmdCommand", "id":"salon.3.on"}, 
			{"label":"3 Off", "type":"cmdCommand", "id":"salon.3.off", "break":true},
			{"label":"4 On", "type":"cmdCommand", "id":"salon.4.on"}, 
			{"label":"4 Off", "type":"cmdCommand", "id":"salon.4.off", "break":true},
			{"label":"5 On", "type":"cmdCommand", "id":"salon.5.on"}, 
			{"label":"5 Off", "type":"cmdCommand", "id":"salon.5.off", "break":true}
		]},
		{"id":"comboStudio", "label":"Studio", "type":"cmdCombo", "closeOnCommand": false, "commands":[
			{"label":"Tout On", "type":"cmdCommand", "id":"studio.on"}, 
			{"label":"Tout Off", "type":"cmdCommand", "id":"studio.off", "break":true},
			{"label":"1 On", "type":"cmdCommand", "id":"studio.1.on"}, 
			{"label":"1 Off", "type":"cmdCommand", "id":"studio.1.off", "break":true},
			{"label":"2 On", "type":"cmdCommand", "id":"studio.2.on"}, 
			{"label":"2 Off", "type":"cmdCommand", "id":"studio.2.off", "break":true},
			{"label":"3 On", "type":"cmdCommand", "id":"studio.3.on"}, 
			{"label":"3 Off", "type":"cmdCommand", "id":"studio.3.off", "break":true},
			{"label":"4 On", "type":"cmdCommand", "id":"studio.4.on"}, 
			{"label":"4 Off", "type":"cmdCommand", "id":"studio.4.off", "break":true},
			{"label":"5 On", "type":"cmdCommand", "id":"studio.5.on"}, 
			{"label":"5 Off", "type":"cmdCommand", "id":"studio.5.off", "break":true}
		]},

		{"id":"comboTV", "label":"TV", "type":"cmdCombo", "commands":[
			{"label":"TV On", "type":"cmdCommand", "id":"tvon"}, 
			{"label":"TV Off", "type":"cmdCommand", "id":"tvoff", "break":true},
			{"label":"VP On", "type":"cmdCommand", "id":"vpon"}, 
			{"label":"VP Off", "type":"cmdCommand", "id":"vpoff"}
		]},

		{"id":"comboAmpli", "label":"Ampli", "type":"cmdCombo", "commands":[
			{"id":"ampli.mute", "label":"Mute", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend marantz C0D"},
			{"id":"ampli.volp", "label":"V+", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend marantz 410"},
			{"id":"ampli.volm", "label":"V-", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend marantz C11"}
		]},

		{"id":"comboHdmi", "label":"HDMI", "type":"cmdCombo", "commands":[
			{"id":"hdmi.1", "label":"HDMI 1", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend.hdmi.1"},
			{"id":"hdmi.2", "label":"HDMI 2", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend.hdmi.2"},
			{"id":"hdmi.3", "label":"HDMI 3", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend.hdmi.3"},
			{"id":"hdmi.4", "label":"HDMI 4", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend.hdmi.4"},
			{"id":"hdmi.5", "label":"HDMI 5", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend.hdmi.5"}
		]}
	]}
]},

{"label":"Média", "commandCategories":[
  {"label":"Macros", "commands":[
		{"id":"tvon", "label":"TV On", "type":"cmdComposite", "setStatus": [{"key":"mtv","value":1}], "commands":[
			{"type":"cmdCommand", "id":"tvlg.on"}, 
			{"type":"cmdCommand", "id":"hdmi.3"},
			{"type":"cmdCommand", "id":"ampli.on"},
			{"type":"cmdCommand", "id":"ampli.on"},
			{"type":"cmdCommand", "id":"ampli.on"}
		]},
		{"id":"tvoff", "label":"TV Off", "type":"cmdComposite", "setStatus": [{"key":"mtv","value":0}], "commands":[
			{"type":"cmdCommand", "id":"tvlg.off"}, 
			{"type":"cmdCommand", "id":"ampli.off"},
			{"type":"cmdCommand", "id":"ampli.off"},
			{"type":"cmdCommand", "id":"ampli.off"}
		]},

		{"id":"vpon", "label":"VP On", "type":"cmdComposite", "setStatus": [{"key":"mvp","value":1}], "commands":[
			{"type":"cmdCommand", "id":"vpsalon.on"}, 
			{"type":"cmdCommand", "id":"ecran.down"}, 
			{"type":"cmdCommand", "id":"tvlg.off"}, 
			{"type":"cmdCommand", "id":"hdmi.3"},
			{"type":"cmdCommand", "id":"ampli.on"},
			{"type":"cmdCommand", "id":"ampli.on"},
			{"type":"cmdCommand", "id":"ampli.on"}
		]},
		{"id":"vpoff", "label":"VP Off", "type":"cmdComposite", "setStatus": [{"key":"mvp","value":0}], "commands":[
			{"type":"cmdCommand", "id":"vpsalon.off"}, 
			{"type":"cmdCommand", "id":"ecran.up"}, 
			{"type":"cmdCommand", "id":"hdmi.3"},
			{"type":"cmdCommand", "id":"ampli.off"},
			{"type":"cmdCommand", "id":"ampli.off"},
			{"type":"cmdCommand", "id":"ampli.off"}
		]}
	]},
  {"label":"Ampli", "commands":[
		{"id":"ampli.on", "label":"Ampli On", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend.amplimarantz.pwron", "setStatus": [{"key":"ampli","value":1}]},
		{"id":"ampli.off", "label":"Ampli Off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend.amplimarantz.pwroff", "setStatus": [{"key":"ampli","value":0}]},
		{"id":"ampli.mute", "label":"Ampli Mute", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend marantz C0D"},
		{"id":"ampli.volp", "label":"Ampli V+", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend marantz 410"},
		{"id":"ampli.volm", "label":"Ampli V-", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend marantz C11"}
  ]},
  {"label":"HDMI", "commands":[
		{"id":"hdmi.1", "label":"HDMI 1", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend.hdmi.1"},
		{"id":"hdmi.2", "label":"HDMI 2", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend.hdmi.2"},
		{"id":"hdmi.3", "label":"HDMI 3", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend.hdmi.3"},
		{"id":"hdmi.4", "label":"HDMI 4", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend.hdmi.4"},
		{"id":"hdmi.5", "label":"HDMI 5", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend.hdmi.5"}
  ]},
  {"label":"TV LG", "commands":[
		{"id":"tvlg.on", "label":"TV On", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend nec 20DF23DC", "setStatus": [{"key":"tv","value":1}]},
		{"id":"tvlg.off", "label":"TV Off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend nec 20DFA35C", "setStatus": [{"key":"tv","value":0}]}
  ]},
  {"label":"VP", "commands":[
		{"id":"vpsalon.on", "label":"VP On", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend.vp.power", "setStatus": [{"key":"vp","value":1}]},
		{"id":"vpsalon.off", "label":"VP Off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"irsend.vp.pwroff", "setStatus": [{"key":"vp","value":0}]},    
		{"id":"ecran.down", "label":"Ecran bas", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rfsend.vp.scrdown"},
		{"id":"ecran.up", "label":"Ecran haut", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rfsend.vp.scrup"}
  ]}
]},

{"label":"Salon", "commandCategories":[
  {"label":"RF", "commands":[
		{"id":"salon.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.a*.on", "setStatus": [{"key":"salon.1","value":1},{"key":"salon.2","value":1},{"key":"salon.3","value":1},{"key":"salon.4","value":1},{"key":"salon.5","value":1}]},
		{"id":"salon.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.a*.off", "setStatus": [{"key":"salon.1","value":0},{"key":"salon.2","value":0},{"key":"salon.3","value":0},{"key":"salon.4","value":0},{"key":"salon.5","value":0}], "break":true},
		{"id":"salon.1.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.a1.on", "setStatus": [{"key":"salon.1","value":1}]},
		{"id":"salon.1.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.a1.off", "setStatus": [{"key":"salon.1","value":0}], "break":true},
		{"id":"salon.2.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.a2.on", "setStatus": [{"key":"salon.2","value":1}]},
		{"id":"salon.2.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.a2.off", "setStatus": [{"key":"salon.2","value":0}], "break":true},
		{"id":"salon.3.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.a3.on", "setStatus": [{"key":"salon.3","value":1}]},
		{"id":"salon.3.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.a3.off", "setStatus": [{"key":"salon.3","value":0}], "break":true},
		{"id":"salon.4.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.a4.on", "setStatus": [{"key":"salon.4","value":1}]},
		{"id":"salon.4.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.a4.off", "setStatus": [{"key":"salon.4","value":0}], "break":true},
		{"id":"salon.5.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.a5.on", "setStatus": [{"key":"salon.5","value":1}]},
		{"id":"salon.5.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.a5.off", "setStatus": [{"key":"salon.5","value":0}], "break":true}
  ]},
  {"label":"SonOff", "commands":[
		{"id":"doSonoff01.toggle", "label":"SonOff01 0/1", "type":"cmdMqtt", "topic":"home/domo/sonoff01/cmd", "payload":"toggle"},
		{"id":"doSonoff02.toggle", "label":"SonOff02 0/1", "type":"cmdMqtt", "topic":"home/domo/sonoff02/cmd", "payload":"toggle"}
  ]}
]},

{"label":"Studio", "commands":[
	{"id":"studio.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.b*.on", "setStatus": [{"key":"studio.1","value":1},{"key":"studio.2","value":1},{"key":"studio.3","value":1},{"key":"studio.4","value":1},{"key":"studio.5","value":1}]},
	{"id":"studio.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.b*.off", "setStatus": [{"key":"studio.1","value":0},{"key":"studio.2","value":0},{"key":"studio.3","value":0},{"key":"studio.4","value":0},{"key":"studio.5","value":0}], "break":true},
	{"id":"studio.1.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.b1.on", "setStatus": [{"key":"studio.1","value":1}]},
	{"id":"studio.1.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.b1.off", "setStatus": [{"key":"studio.1","value":0}], "break":true},
	{"id":"studio.2.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.b2.on", "setStatus": [{"key":"studio.2","value":1}]},
	{"id":"studio.2.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.b2.off", "setStatus": [{"key":"studio.2","value":0}], "break":true},
	{"id":"studio.3.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.b3.on", "setStatus": [{"key":"studio.3","value":1}]},
	{"id":"studio.3.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.b3.off", "setStatus": [{"key":"studio.3","value":0}], "break":true},
	{"id":"studio.4.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.b4.on", "setStatus": [{"key":"studio.4","value":1}]},
	{"id":"studio.4.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.b4.off", "setStatus": [{"key":"studio.4","value":0}], "break":true},
	{"id":"studio.5.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.b5.on", "setStatus": [{"key":"studio.5","value":1}]},
	{"id":"studio.5.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.b5.off", "setStatus": [{"key":"studio.5","value":0}]}
]},

{"label":"RF C", "commands":[
	{"id":"rfc.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.c*.on"},
	{"id":"rfc.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.c*.off", "break":true},
	{"id":"rfc.1.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.c1.on"},
	{"id":"rfc.1.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.c1.off", "break":true},
	{"id":"rfc.2.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.c2.on"},
	{"id":"rfc.2.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.c2.off", "break":true},
	{"id":"rfc.3.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.c3.on"},
	{"id":"rfc.3.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.c3.off", "break":true},
	{"id":"rfc.4.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.c4.on"},
	{"id":"rfc.4.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.c4.off", "break":true},
	{"id":"rfc.5.on", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.c5.on"},
	{"id":"rfc.5.off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.c5.off"}
]},

{"label":"Maison", "commands":[
	{"id":"jardin.1.on", "label":"Jardin On", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.b1.on"},
	{"id":"jardin.1.off", "label":"Jardin Off", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"rf.b1.off", "break":true},
	{"id":"volets.up", "label":"Volets haut", "type":"cmdMqtt", "topic":"home/domo/ard1/cmd", "payload":"volets.haut"},
	{"id":"volets.down", "label":"Volets bas", "type":"cmdMqtt", "topic":"home/domo/ard1/cmd", "payload":"volets.bas"}
]},

{"label":"Toggle", "commands":[
	{"id":"toggle.tv", "label":"TV", "type":"cmdToggle", "key":"mtv", "commandOn":{"type":"cmdCommand", "id":"tvon"}, "commandOff":{"type":"cmdCommand", "id":"tvoff"}},
	{"id":"toggle.vp", "label":"VP", "type":"cmdToggle", "key":"mvp", "commandOn":{"type":"cmdCommand", "id":"vpon"}, "commandOff":{"type":"cmdCommand", "id":"vpoff"}, "break":true},
	{"id":"toggle.salon", "label":"Salon", "type":"cmdToggle", "key":"salon", "commandOn":{"type":"cmdCommand", "id":"salon.on"}, "commandOff":{"type":"cmdCommand", "id":"salon.off"}},
	{"id":"toggle.salon.1", "label":"Salon 1", "type":"cmdToggle", "key":"salon.1", "commandOn":{"type":"cmdCommand", "id":"salon.1.on"}, "commandOff":{"type":"cmdCommand", "id":"salon.1.off"}},
	{"id":"toggle.salon.2", "label":"Salon 2", "type":"cmdToggle", "key":"salon.2", "commandOn":{"type":"cmdCommand", "id":"salon.2.on"}, "commandOff":{"type":"cmdCommand", "id":"salon.2.off"}},
	{"id":"toggle.salon.3", "label":"Salon 3", "type":"cmdToggle", "key":"salon.3", "commandOn":{"type":"cmdCommand", "id":"salon.3.on"}, "commandOff":{"type":"cmdCommand", "id":"salon.3.off"}},
	{"id":"toggle.salon.4", "label":"Salon 4", "type":"cmdToggle", "key":"salon.4", "commandOn":{"type":"cmdCommand", "id":"salon.4.on"}, "commandOff":{"type":"cmdCommand", "id":"salon.4.off"}},
	{"id":"toggle.salon.5", "label":"Salon 5", "type":"cmdToggle", "key":"salon.5", "commandOn":{"type":"cmdCommand", "id":"salon.5.on"}, "commandOff":{"type":"cmdCommand", "id":"salon.5.off"}, "break":true},
	{"id":"toggle.studio", "label":"Studio", "type":"cmdToggle", "key":"studio", "commandOn":{"type":"cmdCommand", "id":"studio.on"}, "commandOff":{"type":"cmdCommand", "id":"studio.off"}},
	{"id":"toggle.studio.1", "label":"Studio 1", "type":"cmdToggle", "key":"studio.1", "commandOn":{"type":"cmdCommand", "id":"studio.1.on"}, "commandOff":{"type":"cmdCommand", "id":"studio.1.off"}},
	{"id":"toggle.studio.2", "label":"Studio 2", "type":"cmdToggle", "key":"studio.2", "commandOn":{"type":"cmdCommand", "id":"studio.2.on"}, "commandOff":{"type":"cmdCommand", "id":"studio.2.off"}},
	{"id":"toggle.studio.3", "label":"Studio 3", "type":"cmdToggle", "key":"studio.3", "commandOn":{"type":"cmdCommand", "id":"studio.3.on"}, "commandOff":{"type":"cmdCommand", "id":"studio.3.off"}},
	{"id":"toggle.studio.4", "label":"Studio 4", "type":"cmdToggle", "key":"studio.4", "commandOn":{"type":"cmdCommand", "id":"studio.4.on"}, "commandOff":{"type":"cmdCommand", "id":"studio.4.off"}},
	{"id":"toggle.studio.5", "label":"Studio 5", "type":"cmdToggle", "key":"studio.5", "commandOn":{"type":"cmdCommand", "id":"studio.5.on"}, "commandOff":{"type":"cmdCommand", "id":"studio.5.off"}, "break":true}
]},

{"label":"Test", "commands":[
	{"id":"toggle.version", "type":"cmdToggle", "commandOn":{"type":"cmdCommand", "id":"ard1.version"}, "commandOff":{"type":"cmdCommand", "id":"espIR01.version"}},

	{"id":"ard1.version", "type":"cmdMqtt", "topic":"home/domo/ard1/cmd", "payload":"version"},
	{"id":"espIR01.version", "type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"version"},
	{"id":"macro.version", "type":"cmdComposite", "commands":[
		{"type":"cmdCommand", "id":"ard1.version"}, 
		{"type":"cmdCommand", "id":"espIR01.version"}
	]},
	{"id":"macro.test1", "type":"cmdComposite", "commands":[
		{"type":"cmdMqtt", "topic":"home/domo/ard1/cmd", "payload":"version"}, 
		{"type":"cmdWait", "duration":500}, 
		{"type":"cmdMqtt", "topic":"home/domo/espIR01/cmd", "payload":"version"}
	]},
	{"id":"macro.salon.on", "type":"cmdComposite", "commands":[
		{"type":"cmdMqtt", "topic":"home/domo/ard1/cmd", "payload":"rf.a1.on"}, 
		{"type":"cmdMqtt", "topic":"home/domo/ard1/cmd", "payload":"rf.a2.on"},
		{"type":"cmdMqtt", "topic":"home/domo/ard1/cmd", "payload":"rf.a3.on"},
		{"type":"cmdMqtt", "topic":"home/domo/ard1/cmd", "payload":"rf.a4.on"},
		{"type":"cmdMqtt", "topic":"home/domo/ard1/cmd", "payload":"rf.a5.on"}
	]},
	{"id":"macro.salon.off", "type":"cmdComposite", "commands":[
		{"type":"cmdMqtt", "topic":"home/domo/ard1/cmd", "payload":"rf.a1.off"}, 
		{"type":"cmdMqtt", "topic":"home/domo/ard1/cmd", "payload":"rf.a2.off"},
		{"type":"cmdMqtt", "topic":"home/domo/ard1/cmd", "payload":"rf.a3.off"},
		{"type":"cmdMqtt", "topic":"home/domo/ard1/cmd", "payload":"rf.a4.off"},
		{"type":"cmdMqtt", "topic":"home/domo/ard1/cmd", "payload":"rf.a5.off"}
	]}
]},

{"label":"Ancien", "commands":[
	{"id":"tvtoggle", "commande":"tvsamsung.power;amplimarrantz.mute"},
	{"id":"tv2vp", "commande":"vp.on;ecran.bas;tv.power"},
	{"id":"vp2tv", "commande":"vp.on;vp.on;ecran.haut;tv.power"},
	{"id":"tvstudio.on", "commande":"vpstudio.on;rf.b3.on"},
	{"id":"tvstudio.off", "commande":"vpstudio.on;vpstudio.on;rf.b3.off"},
	{"id":"resetwc.*", "commande":"rpi1.exec.$root$divers$resetwc.sh;rpi2.exec.$root$divers$resetwc.sh"},
	{"id":"version.*", "commande":"ard1:version;ard2:version"},
	{"id":"toggleM.studio.2", "commande":"toggle.studio.2?studio.2.on:studio.2.off"},
	{"id":"mtest1", "commande":"version"}
]}
],

"triggers":[
  {"type":"trgMqtt", "topic":"home/domo/espIR01", "payload":"trigger1", "command":{"type":"cmdCommand", "id":"ard1.version"}},

  {"comment":"rxir sony 1->salon.2.on", "type":"trgMqtt", 
    "topic":"home/domo/espIR01/event", "payload":"rxIR proto=4 code=11 (12 bits)",
    "command":{"type":"cmdCommand", "id":"salon.2.on"}},
  {"comment":"rxir sony 2->salon.2.off", "type":"trgMqtt", 
    "topic":"home/domo/espIR01/event", "payload":"rxIR proto=4 code=811 (12 bits)",
    "command":{"type":"cmdCommand", "id":"salon.2.off"}},

  {"comment":"rxir sony 3->tv.on", "type":"trgMqtt", 
    "topic":"home/domo/espIR01/event", "payload":"rxIR proto=4 code=411 (12 bits)",
    "command":{"type":"cmdCommand", "id":"tv.on"}},
  {"comment":"rxir sony 4->tv.off", "type":"trgMqtt", 
    "topic":"home/domo/espIR01/event", "payload":"rxIR proto=4 code=C11 (12 bits)",
    "command":{"type":"cmdCommand", "id":"tv.off"}},
    
  {"comment":"rxrf rf.b4.on->tvon", "type":"trgMqtt", 
    "topic":"home/domo/espIR01/event", "payload":"rxRF 1 7fd514",
    "command":{"type":"cmdCommand", "id":"tvon"}},
  {"comment":"rxrf rf.b4.off->tvoff", "type":"trgMqtt", 
    "topic":"home/domo/espIR01/event", "payload":"rxRF 1 7fd511",
    "command":{"type":"cmdCommand", "id":"tvoff"}},

  {"comment":"rxrf rf.b5.on->sonoff01.on", "type":"trgMqtt", 
    "topic":"home/domo/espIR01/event", "payload":"rxRF 1 7fd544",
    "command":{"type":"cmdMqtt", "topic":"home/domo/sonoff01/cmd", "payload":"on"}},
  {"comment":"rxrf rf.b5.off->sonoff01.off", "type":"trgMqtt", 
    "topic":"home/domo/espIR01/event", "payload":"rxRF 1 7fd541",
    "command":{"type":"cmdMqtt", "topic":"home/domo/sonoff01/cmd", "payload":"off"}}
],

"aliases":[
  {"id":"salon.on", "alias":"rf.a*.on"},
  {"id":"salon.off", "alias":"rf.a*.off"},
  {"id":"salon.", "alias":"rf.a"},
  {"id":"salon", "alias":"rf.a"},
  {"id":"studio.on", "alias":"rf.b*.on"},
  {"id":"studio.off", "alias":"rf.b*.off"},
  {"id":"studio.", "alias":"rf.b"},
  {"id":"studio", "alias":"rf.b"},
  {"id":"chambre.on", "alias":"rf.b*.on"},
  {"id":"chambre.off", "alias":"rf.b*.off"},
  {"id":"chambre.", "alias":"rf.b"},
  {"id":"chambre", "alias":"rf.b"},
  {"id":"jardin", "alias":"rf.b1"},
  {"id":"terrasse", "alias":"rf.a5"},
  {"id":"hdmi.csat", "alias":"hdmi.1"},
  {"id":"hdmi.freebox", "alias":"hdmi.2"},
  {"id":"hdmi.appletv", "alias":"hdmi.3"},
  {"id":"hdmi.rpi", "alias":"hdmi.4"},
  {"id":"hdmi.xbox", "alias":"hdmi.5"},
  {"id":"sl", "alias":"salon"}
]
}
}
