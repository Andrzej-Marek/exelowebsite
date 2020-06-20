const express = require("express");
const router = express.Router();
const moment = require("moment");
// const { google } = require("googleapis");
const fs = require("fs");

// const calendarConfig = require("../config/calendarConfig");
// const authorize = require("../config/calendarConfig");

router.post("/day-info", async (req, res) => {
  const { day } = req.body;

  fs.readFile(__dirname + "/credentials.json", async (err, content) => {
    if (err) return res.status(500).json(err);
    console.log(content);
    authorize(JSON.parse(content), listEvents);
  });

  const listEvents = auth => {
    Date.prototype.addDays = function(days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };

    const calendar = google.calendar({ version: "v3", auth });
    calendar.events.list(
      {
        calendarId: "primary",
        timeMin: moment(day)
          .format()
          .toString(),
        timeMax: moment(day)
          .add(1, "d")
          .format()
          .toString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: "startTime"
      },
      (err, data) => {
        if (err) return res.status(500).json(err);
        const events = data.data.items;

        let eventsArray = [];
        if (events.length) {
          events.map((event, i) => {
            const start = event.start.dateTime || event.start.date;
            const end = event.end.dateTime || event.end.date;
            const object = {
              start,
              end
            };
            eventsArray.push(object);
          });
          res.json(eventsArray);
        } else {
          res.json(eventsArray);
        }
      }
    );
  };
});

router.post("/create-event", (req, res) => {
  const { date, title, desc, phone } = req.body;

  fs.readFile(__dirname + "/credentials.json", async (err, content) => {
    if (err) return res.status(500).json(err);
    authorize(JSON.parse(content), createEvent);
  });

  var event = {
    summary: `${phone}`,
    description: desc,
    start: {
      dateTime: date.toString(),
      timeZone: "Europe/Warsaw"
    },
    end: {
      dateTime: moment(new Date(date))
        .add(59, "m")
        .format()
        .toString(),
      timeZone: "Europe/Warsaw"
    },
    attendees: [
      { email: "andrzejmarek116@gmail.com" },
      { email: "firma.exelo@gmail.com" }
    ]
  };

  const createEvent = auth => {
    const calendar = google.calendar({ version: "v3", auth });
    calendar.events.insert(
      {
        auth: auth,
        calendarId: "primary",
        resource: event
      },
      function(err, event) {
        if (err) {
          return res.status(500).json(err);
        }
        res.send("OK");
      }
    );
  };
});

module.exports = router;
