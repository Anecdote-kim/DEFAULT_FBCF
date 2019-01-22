// @flow
export type JSON = {
  success: boolean,
  payload: object,
};

export type RESULT = {
  type: string,
  json: RESJSON,
};

const result: Function = (type: string, json: JSON): RESULT => {
  const obj: RESULT = { type, json };
  return obj;
};

const json: Function = (success: boolean, payload: object): JSON => {
  const obj: JSON = { success, payload };
  return obj;
};

export const creator: any = { result, json };
