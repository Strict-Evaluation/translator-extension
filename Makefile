default: ; rm ext.xpi; zip ext.xpi manifest.json *.js *.html; firefox ext.xpi; i3-msg workspace 2
