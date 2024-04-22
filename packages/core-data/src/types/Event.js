// @flow

type FuzzyDate = {
  accuracy: number,
  range: boolean,
  description: string,
  start_date: Date,
  end_date: Date
};

export type Event = {
  uuid: string,
  name: string,
  description: string,
  start_date: FuzzyDate,
  end_date: FuzzyDate
};
