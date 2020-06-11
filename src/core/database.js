import mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);

export const isConnected = () => mongoose.connection.readyState === 1;

export const connect = () => {
  console.log('Database connected');
  return mongoose.connect(process.env.DBURL, {
    autoReconnect: true,
    useNewUrlParser: true,
  });
};

export const disconnect = () => {
  console.log('Database disconnected');
  return mongoose.disconnect(process.env.DBURL);
};
