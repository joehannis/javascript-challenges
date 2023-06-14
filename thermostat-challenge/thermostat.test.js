const Thermostat = require("./thermostat");
const thermostat = new Thermostat();

describe("thermostat", () => {
  it("returns the temperature of the thermosts", () => {
    expect(thermostat.getTemperature()).toBe(20);
  });
  it("Adds 2 to the thermostat and returns the temperature of the thermosts", () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });
  it("Adds 2 to the thermostat, then reduces by 1 and returns the temperature of the thermosts", () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it("Turns on power saving, raises temp above limit, returns 25", () => {
    thermostat.setPowerSavingMode(true);
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it("Turns off power saving, raises temp above limit, returns 26", () => {
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(26);
  });
  it("resets to 20", () => {
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });
});
