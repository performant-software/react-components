// @flow

import { faker } from '@faker-js/faker';
import { FuzzyDate as FuzzyDateUtils } from '@performant-software/shared-components';
import Base from './Base';

const { Accuracy } = FuzzyDateUtils;

/**
 * Class responsible for handling all event API requests for the Storybook Core Data API.
 */
class Events extends Base {
  /**
   * Builds a single event item.
   */
  buildItem() {
    const startDate = this.createFuzzyDate();
    const endDate = this.createFuzzyDate(startDate.end_date);

    return {
      relationship_type: 'Events',
      uuid: faker.string.uuid(),
      name: faker.lorem.words({ min: 1, max: 5 }),
      description: faker.lorem.sentences({ min: 0, max: 3 }),
      start_date: startDate,
      end_date: endDate
    }
  }

  /**
   * Returns the events index attribute name.
   *
   * @returns {string}
   */
  getIndexAttribute() {
    return 'events';
  }

  /**
   * Returns the events show attribute name.
   *
   * @returns {string}
   */
  getShowAttribute () {
    return 'event';
  }

  /**
   * Creates a random fuzzy date.
   *
   * @returns {{end_date, accuracy: number, range: number, description: string, start_date: Date}}
   */
  createFuzzyDate() {
    const accuracy = faker.number.int({ min: 0, max: 2 });
    let startDate = faker.date.anytime();

    let endDate;
    let range = faker.number.int({ min: 0, max: 1 });

    if (accuracy === Accuracy.date) {
      if (range) {
        endDate = new Date(startDate).setDate(startDate.getDate() + faker.number.int({ min: 1, max: 60 }));
      } else {
        endDate = new Date(startDate).setDate(startDate.getDate() + 1);
      }
    } else if (accuracy === Accuracy.month) {
      if (range) {
        endDate = new Date(startDate).setMonth(startDate.getMonth() + faker.number.int({ min: 1, max: 12 }));
      } else {
        endDate = new Date(startDate).setMonth(startDate.getMonth() + 1);
      }
    } else if (accuracy === Accuracy.year) {
      if (range) {
        endDate = new Date(startDate).setYear(startDate.getYear() + faker.number.int({ min: 1, max: 5 }));
      } else {
        endDate = new Date(startDate).setYear(startDate.getYear() + 1);
      }
    }

    return {
      accuracy,
      range,
      start_date: startDate,
      end_date: endDate
    };
  }
}

export default new Events();
