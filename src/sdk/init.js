const conn = new WebIM.connection({
  isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
  https: false,
  url: WebIM.config.xmppURL,
  heartBeatWait: WebIM.config.heartBeatWait,
  autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
  autoReconnectInterval: WebIM.config.autoReconnectInterval,
  apiUrl: WebIM.config.apiURL,
  isHttpDNS: WebIM.config.isHttpDNS,
  isWindowSDK: WebIM.config.isWindowSDK,
  isAutoLogin: true,
  encrypt: WebIM.config.encrypt,
  delivery: WebIM.config.delivery
});

// export default conn;
window.sdk = { conn: conn };
