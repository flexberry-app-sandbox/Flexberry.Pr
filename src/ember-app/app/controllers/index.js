import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.pr.caption'),
          title: i18n.t('forms.application.sitemap.pr.title'),
          children: [{
            link: 'i-i-s-pr-спр-сотр-l',
            caption: i18n.t('forms.application.sitemap.pr.i-i-s-pr-спр-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.pr.i-i-s-pr-спр-сотр-l.title'),
            children: null
          }, {
            link: 'i-i-s-pr-админ-l',
            caption: i18n.t('forms.application.sitemap.pr.i-i-s-pr-админ-l.caption'),
            title: i18n.t('forms.application.sitemap.pr.i-i-s-pr-админ-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-pr-кар-дос-l',
            caption: i18n.t('forms.application.sitemap.pr.i-i-s-pr-кар-дос-l.caption'),
            title: i18n.t('forms.application.sitemap.pr.i-i-s-pr-кар-дос-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})