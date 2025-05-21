export class StringUtils {
  public toUpperCase(arg: string): string {
    return toUpperCase(arg);
  }
}

export function toUpperCase(arg: string): string {
  return arg.toUpperCase();
}

export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function gerStringInfo(arg: string): stringInfo {
  return {
    lowerCase: arg.toLowerCase(),
    upperCase: arg.toUpperCase(),
    characters: arg.split(""),
    length: arg.length,
    extraInfo: {},
  };
}
