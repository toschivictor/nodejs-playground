import 'dotenv/config';
import { connect } from './core/database.js';
import { start } from './core/server.js';

(async function main() {
  console.log('Initializing...');
  try {
    await connect();
    await start();
    console.log(`Server is listening on port ${process.env.PORT}`);
  } catch (error) {
    console.error('Failed to start application', error);
  }
})();
