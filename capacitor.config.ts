import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vpnclient.app',
  appName: 'V2Ray VPN Client',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  android: {
    buildOptions: {
      keystorePath: 'my-release-key.keystore',
      keystorePassword: 'password',
      keystoreAlias: 'alias_name',
      keystoreAliasPassword: 'password',
      releaseType: 'APK'
    }
  }
};

export default config;