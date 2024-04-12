function FindProxyForURL(url, host) {

	if ( shExpMatch(host, "piwik.dev.apps.sebp") || shExpMatch(host, "artifactory.prd.apps.bdl") || shExpMatch(host, "ged.dev.apps.sebp") || shExpMatch(host, "arows.dev.apps.sebp") || shExpMatch(host, "svc.dev.apps.sebp") || shExpMatch(host, "watsblu.prd.apps.bdl") || shExpMatch(host, "devproxy.prod.apps.bdl") || shExpMatch(host, "authservicesext.dev.apps.bdl") || shExpMatch(host, "watsblu.*"))
		return "DIRECT";

	if (shExpMatch(host, "*.apps.sebp") || shExpMatch(host, "*.apps.bdl")   || shExpMatch(host, "*.devzone.sebp*"))
		return "SOCKS localhost:8585";
	else
		return "DIRECT";
} 
