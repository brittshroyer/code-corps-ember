import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

/**
 * Displays progress towards the current donation goal
 *
 * Needs to be provided a donation goal and the current amount donated towards that goal.
 *
 * ## default usage
 *
 * {{project-card/donation-progress
 *   donationGoal=donationGoal
 *   amountDonated=amountDonated
 * }}
 *
 * @class project-card/donation-progress
 * @module  Component
 * @extends Ember.Component
 */
export default Component.extend({
  classNames: ['project-card__donation-progress'],

  /**
   * The amount donated towards this donation goal
   * @property {Number} amountDonated
   */
  amountDonated: 0,

  /**
   * The total amount needed to donate towards the current donation goal.
   * Aliased from the donation goal assigned in the template.
   *
   * @property {Number} amountNeeded
   */
  amountNeeded: computed.alias('donationGoal.amount'),

  /**
   * The description this donation goal
   * @property {String} description
   */
  description: computed.alias('donationGoal.description'),

  /**
   * A computed field. Uses fields `amountDonated` and `amountNeeded` to
   * compute a percentage.
   *
   * @return {String} The computed percentage, rounded to two decimals.
   */
  percentage: computed('amountDonated', 'amountNeeded', function() {
    let { amountDonated, amountNeeded } = this.getProperties('amountDonated', 'amountNeeded');
    let percentage = amountDonated / amountNeeded * 100;
    return percentage.toFixed(2);
  })
});
