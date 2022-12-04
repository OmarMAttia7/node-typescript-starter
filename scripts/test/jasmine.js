import Jasmine from "jasmine";
const jasmine = new Jasmine();

// Load configuration file
jasmine.loadConfigFile("./spec/support/jasmine.json");

// Don't exit on completion to avoid disrupting other
jasmine.exitOnCompletion = false;

jasmine.execute();