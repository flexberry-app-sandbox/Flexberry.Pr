import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Pr',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Pr',
          title: 'Pr'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
