import mongoose from 'mongoose';
import exampleSchema from './index.schema';

const Example = mongoose.model('Example', exampleSchema);
export default Example;
