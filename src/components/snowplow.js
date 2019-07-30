// eslint-disable-next-line import/prefer-default-export
export const snowplowScript = `;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
    p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
    };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
    n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","//d3j1weegxvu8ns.cloudfront.net/2.6.2/t.js","snowplow"));

  window.snowplow('newTracker', 'cgtracker', 'sp.cargurus.com', {
    appId: 'techblog',
    discoverRootDomain: true,
    forceSecureTracker: true,
    contexts: {
      webPage: true,
      performanceTiming: true
    }
  });
  window.snowplow('enableActivityTracking', 5, 5);
  window.snowplow('trackPageView');
  window.snowplow('enableLinkClickTracking');
  window.snowplow('enableFormTracking');`;
