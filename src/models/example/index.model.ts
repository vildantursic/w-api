import sequelize from '../../config/database';
import exampleSchema from 'index.schema';

const Example = sequelize.define('user', exampleSchema);

export default Example;
