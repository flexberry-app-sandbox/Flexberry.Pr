import { Serializer as СпрСотрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-pr-спр-сотр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпрСотрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
