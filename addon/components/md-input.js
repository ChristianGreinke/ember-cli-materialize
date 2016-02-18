import MaterializeInputField from './md-input-field';
import layout from '../templates/components/md-input';

export default MaterializeInputField.extend({
  layout,
  type: 'text',

  didInsertElement() {
    this._super(...arguments);
    // make sure the label moves when a value is bound.
    this._setupLabel();
	var _bubbles = this.get('attrs.bubbles');
	if(_bubbles !== undefined && _bubbles=== false)
		this.$().click(function(e) {
			e.stopPropagation();
		});
  }
});
