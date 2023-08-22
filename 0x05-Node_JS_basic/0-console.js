/**
 * Logs a message to the consoel
 * @param {string} message - The message to log.
 * @returns {void}
 */
const displayMessage = (str_arg) => process.stdout.write(str_arg + '\n');
module.exports = displayMessage;
