/**********
 *
 * pubsub.subscribe() on() add() listen()
 * pubsub.unsubscribe() off() remove() unlisten()
 * pubsub.publish() emit() announce()
 *
 * */

export const eventBus = {
  events: {},
  subscribe: function (evName, fn) {
    console.info(`PS: Someone subscribed to ${evName}`);
    this.events[evName] = this.events[evName] || [];
    this.events[evName].push(fn);
  },
  unsubscribe: function (evName, fn) {
    console.info(`PS: Someone unsubscribed from ${evName}`);
    if (this.events[evName]) {
      this.events[evName].filter((f) => f !== fn);
    }
  },
  publish: function (evName, data) {
    console.log(`PS: Making a broadcast about ${evName} with ${data}`);
    if (this.events[evName]) {
      this.events[evName].forEach((f) => {
        f(data);
      });
    }
  },
};
