require('dotenv').config();
const { execSync } = require('child_process');

const port = process.env.PROJECT_PORT || 3000; // Default to 3000 if PROJECT_PORT is not set
execSync(`next start -p ${port}`, { stdio: 'inherit' });
