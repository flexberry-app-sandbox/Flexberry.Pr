import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrАдминLForm from './forms/i-i-s-pr-админ-l';
import IISPrКарДосLForm from './forms/i-i-s-pr-кар-дос-l';
import IISPrСпрСотрLForm from './forms/i-i-s-pr-спр-сотр-l';
import IISPrАдминEForm from './forms/i-i-s-pr-админ-e';
import IISPrКарДосEForm from './forms/i-i-s-pr-кар-дос-e';
import IISPrСпрСотрEForm from './forms/i-i-s-pr-спр-сотр-e';
import IISPrАдминModel from './models/i-i-s-pr-админ';
import IISPrКарДосModel from './models/i-i-s-pr-кар-дос';
import IISPrСпрСотрModel from './models/i-i-s-pr-спр-сотр';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-pr-админ': IISPrАдминModel,
    'i-i-s-pr-кар-дос': IISPrКарДосModel,
    'i-i-s-pr-спр-сотр': IISPrСпрСотрModel
  },

  'application-name': 'Pr',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Pr',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Pr',
          title: 'Pr'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        pr: {
          caption: 'Pr',
          title: 'Pr',
          'i-i-s-pr-спр-сотр-l': {
            caption: 'Спр сотр',
            title: ''
          },
          'i-i-s-pr-админ-l': {
            caption: 'Админ',
            title: ''
          },
          'i-i-s-pr-кар-дос-l': {
            caption: 'Кар дос',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-pr-админ-l': IISPrАдминLForm,
    'i-i-s-pr-кар-дос-l': IISPrКарДосLForm,
    'i-i-s-pr-спр-сотр-l': IISPrСпрСотрLForm,
    'i-i-s-pr-админ-e': IISPrАдминEForm,
    'i-i-s-pr-кар-дос-e': IISPrКарДосEForm,
    'i-i-s-pr-спр-сотр-e': IISPrСпрСотрEForm
  },

});

export default translations;
