$(document).ready(() => {
    if ($('#homepage-sponsors').length) {
        const sponsors = [
            ['/assets/images/sponsors/ritLarge.png', 'http://rit.edu', 'Rochester Instiute of Technology'],
            ['/assets/images/sponsors/symantec.png', 'http://symantec.com', 'Symantec'],
            ['/assets/images/sponsors/att.png', 'http://att.com', 'AT&T'],
            ['/assets/images/sponsors/datto.png', 'http://datto.com', 'Datto'],
            ['/assets/images/sponsors/UofR.png', 'http://rochester.edu', 'University of Rochester'],
            ['/assets/images/sponsors/linkedin.png', 'http://linkedin.com', 'LinkedIn'],
            ['/assets/images/sponsors/microsoft.png', 'http://microsoft.com', 'Microsoft'],
            ['/assets/images/sponsors/cisco.png', 'http://cicso.com', 'Cisco'],
            ['/assets/images/sponsors/google.png', 'http://google.com', 'Google'],
            ['/assets/images/sponsors/hp.png', 'http://hp.com', 'HP'],
            ['/assets/images/sponsors/johnsonjohnson.png', 'http://jnj.com', 'Johnson and Johnson'],
            ['/assets/images/sponsors/lourdesindustries.png', 'http://lourdesinc.com', 'Lourdres Industries'],
            ['/assets/images/sponsors/mooreresearchcenter.png', 'http://mrci.com', 'Moore Research Center'],
            ['/assets/images/sponsors/intergraph.png', 'http://intergraph.com', 'Intergraph'],
            ['/assets/images/sponsors/nortel.png', 'http://nortel-us.com', 'Nortel'],
            ['/assets/images/sponsors/janestreet.png', 'http://janestreet.com', 'Jane Street'],
            ['/assets/images/sponsors/northropgrumman.png', 'http://northropgrumman.com', 'Northrop Grumman'],
            ['/assets/images/sponsors/sonus.png', 'http://sonus.net', 'Sonus'],
            ['/assets/images/sponsors/oracle.png', 'http://oracle.com', 'Oracle'],
            ['/assets/images/sponsors/perforce.png', 'http://perforce.com', 'Perforce'],
            ['/assets/images/sponsors/cadence.png', 'http://cadence.com', 'Cadence'],
            ['/assets/images/sponsors/podi.png', 'http://podi.com', 'Potomac Digitek'],
            ['/assets/images/sponsors/dupont.png', 'http://dupont.com', 'DuPont'],
            ['/assets/images/sponsors/amdex.png', 'http://amdexcorp.com', 'Amdex'],
            ['/assets/images/sponsors/ti.png', 'http://ti.com', 'Texas Instruments'],
            ['/assets/images/sponsors/xerox.png', 'http://xerox.com', 'Xerox'],
            ['/assets/images/sponsors/citrix.png', 'http://citrix.com', 'Citrix'],
            ['/assets/images/sponsors/fxcm.png', 'http://fxcm.com', 'FXCM'],
            ['/assets/images/sponsors/pdhi.png', 'http://pdhi.com', 'PDHI'],
            ['/assets/images/sponsors/datadog.png', 'http://www.datadoghq.com/', 'Datadog'],
            ['/assets/images/sponsors/dmarcian.svg', 'http://dmarcian.com/', 'dmarcian'],
            ['/assets/images/sponsors/pritunl.png', 'https://pritunl.com/', 'Pritunl'],
            ['/assets/images/sponsors/sentry.svg', 'https://sentry.io/', 'Sentry'],
            ['/assets/images/sponsors/slack.png', 'https://slack.com/', 'Slack'],
        ];

        for (let i = 0; i <= 6; i++) {
            var index = Math.floor(Math.random() * sponsors.length)
            var item = sponsors[index];
            $('#sponsor-' + i + ' img').attr('src', item[0]);
            $('#sponsor-' + i + ' a').attr('href', item[1]);
            $('#sponsor-' + i + ' img').attr('alt', item[2]);
            sponsors.splice(index, 1);
        }
    }
});
