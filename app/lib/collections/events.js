Events = new Mongo.Collection('events');


if (Meteor.isServer) {
  Events.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

}

Events.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Party Name",
    max: 100
  },
  guestCount: {
    type: Number,
    label: "Guest Count",
    max: 2000
  },
  courses: {
    type: Number,
    label: "Number Of Courses",
    max: 10
  },
  date: {
    type: Date,
    label: "Date Of Event"
  },
  confirmed: {
    type: Boolean,
    label: "confirmed?",
    optional: true
  },
  createdBy: {
    type: String,
    autoValue:function(){return this.userId},
  },
  createdAt: {
    type: Date,
    autoValue:function(){return new Date()}
  }
}));
