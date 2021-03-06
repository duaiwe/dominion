window.Card_Collection = Backbone.Collection.extend({
  model: Card_Model,
  compare_Name: function(card) {
    return card.get('name');
  },
  compare_Set: function(card) {
    var set = card.get('set') === 'Promo' ? '~' : '';
    set += card.get('set');
    return set+'_'+
      card.get('name');
  },
  compare_Cost: function(card) {
    return card.get('cost')+'_'+
      (card.get('potion')?'1':'0')+'_'+
			card.get('name');
  },
  orderBy: function(sort) {
    if( 'name' === sort ) {
      this.comparator = this.compare_Name;
    }
    else if( 'set' === sort ) {
      this.comparator = this.compare_Set;
    }
    else if( 'cost' === sort ) {
      this.comparator = this.compare_Cost;
    }
    this.sort();
  }
});
