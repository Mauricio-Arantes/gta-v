import { hideHudElements } from 'utils/hud';

/**
 * Event called after the player has loaded all client scripts
 */
mp.events.add('clientLaunched', (): void => {
  hideHudElements([1, 3]);
  mp.nametags.enabled = true;
  mp.discord.update('GAY', 'TESTANDO ALGO GAY');
  mp.game.vehicle.defaultEngineBehaviour = true;
});
