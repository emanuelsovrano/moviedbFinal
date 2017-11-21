import jsdom from 'jsdom';
import $ from 'jquery';

global.$ = global.jQuery = $;

global.window = new jsdom.JSDOM("");
global.document = new jsdom.JSDOM("").document;