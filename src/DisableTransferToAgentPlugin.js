import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

const PLUGIN_NAME = 'DisableTransferToAgentPlugin';

export default class DisableTransferToAgentPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {
    // Removing the Agent tab from the transfer directory to disable
    // transferring directly to an agent instead of a queue
    flex.WorkerDirectoryTabs.Content.remove('workers');
  }
}
