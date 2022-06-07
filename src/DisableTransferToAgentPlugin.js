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

    // Per business request, removing any queues containing "Registration" 
    // in their name from the transfer directory
    const queuesToHide = [
      'GDC GD Registration En',
      'GDC GD Registration Es',
      'GDC Walmart Registration En',
      'GDC Walmart Registration Es',
      'GDC GD Activation En (Not IVR Xfer)',
      'GDC GD Activation Es (Not for IVR Xfer)',
      'GDC Intuit_Turbo Activation En (Not for IVR Xfer)',
      'GDC Intuit_Turbo Activation Es (Not for IVR Xfer)',
      'GDC Walmart Activation En (Not for IVR Xfer)',
      'GDC Walmart Activation Es (Not for IVR Xfer)',
      'Everyone'
    ];

    flex.WorkerDirectoryTabs.defaultProps.hiddenQueueFilter = `data.queue_name NOT_IN ${JSON.stringify(queuesToHide)}`;
  }
}
