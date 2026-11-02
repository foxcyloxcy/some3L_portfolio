/* Lunar illumination based on approximate solar/lunar orbital coordinates.
 * The phase is continuous across months (not reset on the 1st).
 * Meeus-style solar and lunar longitude/latitude approximation, as used
 * in lightweight astronomy libraries such as SunCalc.
 * Reference phase dates: https://aa.usno.navy.mil/calculated/moon/phases
 * Visualized for the Northern Hemisphere (Philippines: waxing light on right).
 */
(function (global) {
  'use strict';
  const RAD = Math.PI / 180;
  const sin = Math.sin, cos = Math.cos;
  const clamp = (n, low, high) => Math.max(low, Math.min(high, n));

  function phaseName(phase) {
    if (phase < .025 || phase >= .975) return 'New Moon';
    if (phase < .225) return 'Waxing Crescent';
    if (phase < .275) return 'First Quarter';
    if (phase < .475) return 'Waxing Gibbous';
    if (phase < .525) return 'Full Moon';
    if (phase < .725) return 'Waning Gibbous';
    if (phase < .775) return 'Last Quarter';
    return 'Waning Crescent';
  }

  function phaseAt(date) {
    const when = date || new Date();
    const d = (when.getTime() - Date.UTC(2000, 0, 1, 12)) / 86400000;
    const tilt = 23.4397 * RAD;
    const solarMeanAnomaly = (357.5291 + .98560028 * d) * RAD;
    const solarCorrection = (1.9148 * sin(solarMeanAnomaly)
      + .02 * sin(2 * solarMeanAnomaly)
      + .0003 * sin(3 * solarMeanAnomaly)) * RAD;
    const solarLongitude = solarMeanAnomaly + solarCorrection + 102.9372 * RAD + Math.PI;
    const sunRa = Math.atan2(sin(solarLongitude) * cos(tilt), cos(solarLongitude));
    const sunDec = Math.asin(sin(solarLongitude) * sin(tilt));

    const meanLongitude = (218.316 + 13.176396 * d) * RAD;
    const meanAnomaly = (134.963 + 13.064993 * d) * RAD;
    const meanLatitude = (93.272 + 13.229350 * d) * RAD;
    const longitude = meanLongitude + 6.289 * RAD * sin(meanAnomaly);
    const latitude = 5.128 * RAD * sin(meanLatitude);
    const distance = 385001 - 20905 * cos(meanAnomaly);
    const moonRa = Math.atan2(sin(longitude) * cos(tilt)
      - Math.tan(latitude) * sin(tilt), cos(longitude));
    const moonDec = Math.asin(sin(latitude) * cos(tilt)
      + cos(latitude) * sin(tilt) * sin(longitude));

    const separation = Math.acos(clamp(sin(sunDec) * sin(moonDec)
      + cos(sunDec) * cos(moonDec) * cos(sunRa - moonRa), -1, 1));
    const incidence = Math.atan2(149598000 * sin(separation),
      distance - 149598000 * cos(separation));
    const limbAngle = Math.atan2(cos(sunDec) * sin(sunRa - moonRa),
      sin(sunDec) * cos(moonDec)
      - cos(sunDec) * sin(moonDec) * cos(sunRa - moonRa));

    const illuminated = clamp((1 + cos(incidence)) / 2, 0, 1);
    const phase = (0.5 + 0.5 * incidence * (limbAngle < 0 ? -1 : 1) / Math.PI) % 1;
    return { phase, illuminated, waxing: phase < .5, name: phaseName(phase) };
  }

  global.PortfolioMoon = Object.freeze({ phaseAt, phaseName });
})(window);
