// @flow

class FuzzyDate {
  /**
   * Returns the passed date as a FuzzyDate input date.
   *
   * @param date
   *
   * @returns {{endDate: *, _destroy, accuracy, description, range, id, startDate: *}|null}
   */
  toFuzzyDate(date) {
    if (!date) {
      return null;
    }

    return {
      id: date.id,
      accuracy: date.accuracy,
      description: date.description,
      endDate: date.end_date,
      range: date.range,
      startDate: date.start_date,
      _destroy: date._destroy
    };
  }

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
        start_date: date.startDate,
        _destroy: date._destroy
      }
    };
  }
}

const FuzzyDateTransform: FuzzyDate = new FuzzyDate();
export default FuzzyDateTransform;
