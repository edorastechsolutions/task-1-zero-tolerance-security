require('dotenv').config();

const validateConfig = require('./security/config_validator/configValidator');
validateConfig();

const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});