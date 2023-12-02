import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-pr-админ-l');
  this.route('i-i-s-pr-админ-e',
  { path: 'i-i-s-pr-админ-e/:id' });
  this.route('i-i-s-pr-админ-e.new',
  { path: 'i-i-s-pr-админ-e/new' });
  this.route('i-i-s-pr-кар-дос-l');
  this.route('i-i-s-pr-кар-дос-e',
  { path: 'i-i-s-pr-кар-дос-e/:id' });
  this.route('i-i-s-pr-кар-дос-e.new',
  { path: 'i-i-s-pr-кар-дос-e/new' });
  this.route('i-i-s-pr-спр-сотр-l');
  this.route('i-i-s-pr-спр-сотр-e',
  { path: 'i-i-s-pr-спр-сотр-e/:id' });
  this.route('i-i-s-pr-спр-сотр-e.new',
  { path: 'i-i-s-pr-спр-сотр-e/new' });
});

export default Router;
