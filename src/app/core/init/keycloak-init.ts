import { KeycloakService } from "keycloak-angular";
import { environment } from 'src/environments/environment';

export function initializer(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.KEYCLOAK_URL,
        realm: 'ucb-judge',
        clientId: 'frontend'
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false
      }
    });
}