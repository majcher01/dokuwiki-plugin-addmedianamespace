<?php

use dokuwiki\Extension\ActionPlugin;
use dokuwiki\Extension\EventHandler;
use dokuwiki\Extension\Event;

/**
 * DokuWiki Plugin addmedianamespace (Action Component)
 *
 * @license GPL 2 http://www.gnu.org/licenses/gpl-2.0.html
 * @author Jakub Majcherski <jakub@majcherski.com>
 */
class action_plugin_addmedianamespace extends ActionPlugin
{
    /** @inheritDoc */
    public function register(EventHandler $controller)
    {
        $controller->register_hook('MEDIAMANAGER_STARTED', 'AFTER', $this, 'handleMediamanagerStarted');

    }


    /**
     * Event handler for MEDIAMANAGER_STARTED
     *
     * @see https://www.dokuwiki.org/devel:events:MEDIAMANAGER_STARTED
     * @param Event $event Event object
     * @param mixed $param optional parameter passed when event was registered
     * @return void
     */
    public function handleMediamanagerStarted(Event $event, $param)
    {
    }

}
