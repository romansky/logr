log = (prefix, source, message, e) ->
	n = new Date()
	dateStr = "#{n.getFullYear()}-#{n.getMonth()+1}-#{n.getDate()} #{n.getHours()}:#{n.getMinutes()}:#{n.getSeconds()}.#{n.getMilliseconds()}"
	console?.log "#{source} :: #{dateStr} :: #{prefix.toUpperCase()} :: #{message}"
	if e then console?.log e.toString()

exports.getLogger = (source)->
	source = if source.indexOf "/" > 0 then source.split("/").pop() else source
	new _Logger(source)

_debug = false

class _Logger
# @param source String name of class / file name
	constructor: (@source)->
	error : (message,e)=>
		log("ERROR", @source, message, e)
	info : (message)=>
		log("INFO", @source, message, null)
	notice : (message)=>
		log("NOTICE", @source, message,null)
	debug: (message)=>
		if _debug then log("DEBUG", @source, message, null)

exports.toggleDebug = ()->
	if _debug then _debug = false else _debug = true
