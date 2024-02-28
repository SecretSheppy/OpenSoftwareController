(function () {

    /**
     * Markdown parser
     *
     * A simple Markdown parser that uses regular expressions to parse markdown
     * into html. This is obviously not the best implementation of a parser,
     * but it was a quick solution for the initial version of the project. It
     * will be replaced with a more robust solution in the future.
     */

    'use strict';

    const RULES = [

        // Sanitization

        // Script detection
        [
            /<script(.*)>(.*)<\/script>/gm,
            "<div>WARNING: Script detected and removed</div>"
        ],

        // iframe detection
        [
            /<iframe(.*)>(.*)<\/iframe>/gm,
            "<div>WARNING: Iframe detected and removed</div>"
        ],

        // object detection
        [
            /<object(.*)>(.*)<\/object>/gm,
            "<div>WARNING: Object detected and removed</div>"
        ],

        // embed detection
        [
            /<embed(.*)>/gm,
            "<div>WARNING: Embed detected and removed</div>"
        ],

        // link detection
        [
            /<link(.*)>/gm,
            "<div>WARNING: Link detected and removed</div>"
        ],

        // style detection
        [
            /<style(.*)>(.*)<\/style>/gm,
            "<div>WARNING: Style detected and removed</div>"
        ],

        // img detection
        [
            /<img(.*)>/gm,
            "<div>WARNING: Image detected and removed</div>"
        ],

        // svg detection
        [
            /<svg(.*)>(.*)<\/svg>/gm,
            "<div>WARNING: SVG detected and removed</div>"
        ],

        // form detection
        [
            /<form(.*)>(.*)<\/form>/gm,
            "<div>WARNING: Form detected and removed</div>"
        ],

        // input detection
        [
            /<input(.*)>/gm,
            "<div>WARNING: Input detected and removed</div>"
        ],

        // button detection
        [
            /<button(.*)>(.*)<\/button>/gm,
            "<div>WARNING: Button detected and removed</div>"
        ],

        // select detection
        [
            /<select(.*)>(.*)<\/select>/gm,
            "<div>WARNING: Select detected and removed</div>"
        ],

        // textarea detection
        [
            /<textarea(.*)>(.*)<\/textarea>/gm,
            "<div>WARNING: Textarea detected and removed</div>"
        ],

        // meta detection
        [
            /<meta(.*)>/gm,
            "<div>WARNING: Meta detected and removed</div>"
        ],

        // title detection
        [
            /<title(.*)>(.*)<\/title>/gm,
            "<div>WARNING: Title detected and removed</div>"
        ],

        // head detection
        [
            /<head(.*)>(.*)<\/head>/gm,
            "<div>WARNING: Head detected and removed</div>"
        ],

        // body detection
        [
            /<body(.*)>(.*)<\/body>/gm,
            "<div>WARNING: Body detected and removed</div>"
        ],

        // html detection
        [
            /<html(.*)>(.*)<\/html>/gm,
            "<div>WARNING: HTML detected and removed</div>"
        ],

        // DOCTYPE detection
        [
            /<!DOCTYPE(.*)>/gm,
            "<div>WARNING: DOCTYPE detected and removed</div>"
        ],

        // audio detection
        [
            /<audio(.*)>(.*)<\/audio>/gm,
            "<div>WARNING: Audio detected and removed</div>"
        ],

        // video detection
        [
            /<video(.*)>(.*)<\/video>/gm,
            "<div>WARNING: Video detected and removed</div>"
        ],

        // Markdown

        // Headers
        [/#{6}\s?(.+)/g, "<h6>$1</h6>"],
        [/#{5}\s?(.+)/g, "<h5>$1</h5>"],
        [/#{4}\s?(.+)/g, "<h4>$1</h4>"],
        [/#{3}\s?(.+)/g, "<h3>$1</h3>"],
        [/#{2}\s?(.+)/g, "<h2>$1</h2>"],
        [/#\s?(.+)/g, "<h1>$1</h1>"],

        // Bold
        [/\*{2}(.+)\*{2}/g, "<strong>$1</strong>"],
        [/_{2}(.+)_{2}/g, "<strong>$1</strong>"],

        // Italic
        [/\*(.+)\*/g, "<em>$1</em>"],
        [/_(.+)_/g, "<em>$1</em>"],

        // Strikethrough
        [/~{2}(.+)~{2}/g, "<del>$1</del>"],

        // Code block
        [/`{3}(.+)`{3}/gm, "<pre><code>$1</code></pre>"],

        // Inline code
        [/`(.+)`/g, "<code>$1</code>"],

        // Image
        [/!\[(.+)]\((.+)\)/g, "<img src='$2' alt='$1'>"],

        // Link
        [/\[(.+)]\((.+)\)/g, "<a href='$2'>$1</a>"],

        // Bullet point
        [/\*\s(.+)/g, "<ul><li>$1</li></ul>"],

        // Numbered list
        [/\d+\.\s(.+)/g, "<ul><li>$1</li></ul>"],
    ];

    /**
     * Parse markdown into html
     * @param {string} text the markdown to be parsed
     * @returns {string} the parsed html
     */
    function parse (text) {
        RULES.forEach(function ([rule, replacement]) {
            text = text.replace(rule, replacement);
        });
        return text;
    }

    module.exports = exports = { parse };

})();