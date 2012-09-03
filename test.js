var logr = require('logr').getLogger(__filename);

logr.info("this is an informative message");
logr.notice("this should not normally happen");

try {
	iDontExist()
} catch (e){
	logr.error("was expecting this error", e);
}

logr.debug("this is a ghost debug message"); // should not print anything

require('logr').toggleDebug();

logr.debug("this is a debug message");
