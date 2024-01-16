
/**
 * https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map
 */

export class MapSerializer {
  static replacer(key, value) {
    if(value instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(value.entries()), // or with spread: value: [...value]
      };
    } else {
      return value;
    }
  }
  
  static reviver(key, value) {
    if(typeof value === 'object' && value !== null) {
      if (value.dataType === 'Map') {
        return new Map(value.value);
      }
    }
    return value;
  }

  static map2string(map) {
    return JSON.stringify(map, this.replacer);
  }

  static string2map(str) {
    return JSON.parse(str, this.reviver);
  }
}