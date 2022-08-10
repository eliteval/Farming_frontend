import humanizeDuration from "humanize-duration";

/*
https://www.npmjs.com/package/humanize-duration
uints - ['y', 'mo', 'w', 'd', 'h', 'm', 's', 'ms']
langugae - en, tr(trukish)
*/
export function readableDuration(milliseconds) {
  return humanizeDuration(milliseconds, {
    language: "en",
    round: true,
    largest: 1,
  });
}

export function getNodeName(index) {
  switch (Number(index)) {
    case 0:
      return "Starter";
      break;
    case 1:
      return "Pro";
      break;
    case 2:
      return "Whale";
      break;
    default:
      return "Unknown";
  }
}

export function convertToDate(timestamp) {
  return new Date(timestamp).toLocaleString();
}

export function getValue(big_num, deciaml = 1) {
  return "$ " + (big_num / 1e18).toFixed(deciaml);
}
