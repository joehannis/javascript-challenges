class Thermostat {
  constructor() {
    this.temperature = 20;
    this.power_saving_mode = false;
  }

  getTemperature() {
    if (this.power_saving_mode === true) {
      if (this.temperature > 25) {
        this.temperature = 25;
      }
    } else {
      if (this.temperature > 32) {
        this.temperature = 32;
      }
    }

    return this.temperature;
  }

  up() {
    this.temperature += 1;
  }

  down() {
    this.temperature -= 1;
  }

  setPowerSavingMode(state) {
    if (state === true) {
      this.power_saving_mode = true;
    } else if (state === false) {
      this.power_saving_mode = false;
    }
  }

  reset() {
    this.temperature = 20;
  }
}
module.exports = Thermostat;
