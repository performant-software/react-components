// @flow

class FuzzyDate {
  /**
   * Returns the passed FuzzyDateable object for PUT/POST requests.
   *
   * @param dateable
   * @param attribute
   *
   * @returns {{}}
   */
  toPayload(dateable, attribute) {
    const date = dateable[attribute];

    if (!date) {
      return null;
    }

    return {
      [attribute]: {
        accuracy: date.accuracy,
        description: date.description,
        end_date: date.endDate,
        range: date.range,
        start_date: date.startDate
      }
    };
  }
}

const FuzzyDateTransform: FuzzyDate = new FuzzyDate();
export default FuzzyDateTransform;
