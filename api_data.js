define({ "api": [
  {
    "type": "get",
    "url": "/api/latest",
    "title": "Latest Snapshot",
    "version": "0.0.1",
    "name": "getLatest",
    "group": "Snapshots",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "manual",
            "description": "<p>If this snapshot was taken manually or false if our controller made it.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>ID of this snapshot.</p>"
          },
          {
            "group": "Success 200",
            "type": "Instant",
            "optional": false,
            "field": "creation",
            "description": "<p>The Instant this snapshot was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "waterTemperature",
            "description": "<p>The temperature of the water.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "airTemperature",
            "description": "<p>The temperature of the air.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"manual\": \"false\",\n  \"id\": \"1\"\n  \"creation\": \"2019-07-26T05:56:05.518Z\"\n  \"waterTemperature\": \"67.5\"\n  \"airTemperature\": \"21.1\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/chestermere/lake/temperature/controllers/LatestController.java",
    "groupTitle": "Snapshots"
  }
] });