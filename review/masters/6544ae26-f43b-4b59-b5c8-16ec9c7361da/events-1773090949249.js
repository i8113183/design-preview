jQuery("#simulation")
  .on("mouseenter dragenter", ".m-6544ae26-f43b-4b59-b5c8-16ec9c7361da .mouseenter,.m-6544ae26-f43b-4b59-b5c8-16ec9c7361da.mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#Button_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-6544ae26-f43b-4b59-b5c8-16ec9c7361da #Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FAD01D"
                    }
                  },{
                    "target": [ "#m-6544ae26-f43b-4b59-b5c8-16ec9c7361da #Button_6 span" ],
                    "attributes": {
                      "color": "#0F032F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".m-6544ae26-f43b-4b59-b5c8-16ec9c7361da .mouseleave,.m-6544ae26-f43b-4b59-b5c8-16ec9c7361da.mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#Button_6")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    }
  });