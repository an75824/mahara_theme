<?php
/**
 *
 * @package    mahara
 * @subpackage core
 * @author     Antony 
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL version 3 or later
 * @copyright  For copyright information on Mahara, please see the README file distributed with this software.
 */

$theme = new StdClass;

$theme->displayname  = 'ExperimentalTheme'; //The name of the theme
$theme->formrenderer = 'div'; //tableless
$theme->parent      = 'raw'; //inherit from 'raw', so when Mahara can't find something in our files, 'raw' theme will provide it.
